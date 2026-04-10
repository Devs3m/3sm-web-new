import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SetupProvisionService } from './setup-provision.service';

const LS_ONLINE_BASE = 's3m-provision-online-url';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  ownerEmail = '';
  enrollmentToken = '';
  /** Online API base for download URL / curl (no trailing slash). */
  onlineBaseUrl = '';
  busy = false;
  fileBusy = false;
  errorMessage = '';
  successMessage = '';
  copyHint = '';

  constructor(
    private readonly provision: SetupProvisionService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const fromEnv = (environment as { provisionOnlineBaseUrl?: string }).provisionOnlineBaseUrl?.trim() ?? '';
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(LS_ONLINE_BASE)) || '';
    this.onlineBaseUrl = (fromEnv || stored).replace(/\/$/, '');
  }

  private persistOnlineBase(): void {
    const v = this.onlineBaseUrl.trim().replace(/\/$/, '');
    if (v && typeof localStorage !== 'undefined') {
      localStorage.setItem(LS_ONLINE_BASE, v);
    }
  }

  get downloadUrl(): string {
    const base = this.onlineBaseUrl.trim().replace(/\/$/, '');
    const email = this.ownerEmail.trim();
    if (!base || !email) {
      return '';
    }
    const q = encodeURIComponent(email);
    return `${base}/provision/export-by-owner-email/download?ownerEmail=${q}`;
  }

  get curlGetCommand(): string {
    const url = this.downloadUrl;
    const token = this.enrollmentToken.trim() || 'YOUR_ENROLLMENT_TOKEN';
    if (!url) {
      return '';
    }
    return `curl -L -o s3m-provision-bundle.json -H "X-Enrollment-Token: ${token}" "${url}"`;
  }

  get curlPostCommand(): string {
    const base = this.onlineBaseUrl.trim().replace(/\/$/, '');
    const email = this.ownerEmail.trim();
    const token = this.enrollmentToken.trim() || 'YOUR_ENROLLMENT_TOKEN';
    if (!base || !email) {
      return '';
    }
    const payload = JSON.stringify({ ownerEmail: email });
    const escapedPayload = payload.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `curl -L -o s3m-provision-bundle.json -H "Content-Type: application/json" -H "X-Enrollment-Token: ${token}" -d "${escapedPayload}" "${base}/provision/export-by-owner-email/file"`;
  }

  async copyText(label: string, text: string): Promise<void> {
    this.copyHint = '';
    if (!text) {
      this.copyHint = 'Fill in online API URL and owner email first.';
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      this.copyHint = `${label} copied to clipboard.`;
      setTimeout(() => (this.copyHint = ''), 4000);
    } catch {
      this.copyHint = 'Could not copy — select the text below and copy manually.';
    }
  }

  submit(): void {
    this.errorMessage = '';
    this.successMessage = '';
    const email = this.ownerEmail.trim();
    const token = this.enrollmentToken.trim();
    if (!email || !token) {
      this.errorMessage = 'Enter account owner email and enrollment token.';
      return;
    }
    this.persistOnlineBase();
    this.busy = true;
    this.provision.pullAndImport(email, token).subscribe({
      next: (res) => {
        this.busy = false;
        this.successMessage = `${res.message} Account ID: ${res.accountid}. You can sign in with your usual user email and password.`;
      },
      error: (err) => {
        this.busy = false;
        this.errorMessage = this.formatHttpError(err);
      },
    });
  }

  onBundleFileSelected(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    this.errorMessage = '';
    this.successMessage = '';
    this.fileBusy = true;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result ?? '');
        const bundle = this.parseBundleJson(text);
        const token = this.enrollmentToken.trim();
        if (!token) {
          this.errorMessage = 'Enter the enrollment token for your local API.';
          this.fileBusy = false;
          input.value = '';
          return;
        }
        this.provision.importBundle(bundle, token).subscribe({
          next: (res) => {
            this.fileBusy = false;
            input.value = '';
            this.successMessage = `${res.message} Account ID: ${res.accountid}. You can sign in with your usual user email and password.`;
          },
          error: (err) => {
            this.fileBusy = false;
            input.value = '';
            this.errorMessage = this.formatHttpError(err);
          },
        });
      } catch (e) {
        this.fileBusy = false;
        input.value = '';
        this.errorMessage =
          e instanceof Error ? e.message : 'Invalid JSON bundle file.';
      }
    };
    reader.onerror = () => {
      this.fileBusy = false;
      input.value = '';
      this.errorMessage = 'Could not read the file.';
    };
    reader.readAsText(file, 'UTF-8');
  }

  private parseBundleJson(text: string): object {
    const parsed = JSON.parse(text) as Record<string, unknown>;
    const bundle =
      parsed['version'] === 1 && parsed['account'] !== undefined
        ? parsed
        : (parsed['bundle'] as Record<string, unknown> | undefined);
    if (!bundle || bundle['version'] !== 1) {
      throw new Error('File must be a version 1 provisioning bundle (from export or download).');
    }
    return bundle as object;
  }

  private formatHttpError(err: unknown): string {
    const e = err as { error?: unknown; message?: string };
    const body = e?.error;
    if (typeof body === 'string') {
      return body;
    }
    if (body && typeof body === 'object') {
      const o = body as { message?: unknown; error?: unknown };
      const msg = o['message'] ?? o['error'];
      if (msg != null) {
        return Array.isArray(msg) ? msg.join(' ') : String(msg);
      }
    }
    if (e?.message) {
      return e.message;
    }
    return 'Request failed.';
  }

  goLogin(): void {
    void this.router.navigate(['/login']);
  }
}
