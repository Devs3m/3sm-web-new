import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  OfflineInstallerMetadata,
  OfflineInstallerService,
  OwnerAccountPreview,
} from './offline-installer.service';

type StepId = 'email' | 'confirm' | 'done';

@Component({
  selector: 'app-offline-installer',
  templateUrl: './offline-installer.component.html',
  styleUrls: ['./offline-installer.component.css'],
})
export class OfflineInstallerComponent implements OnInit {
  ownerEmail = '';
  step: StepId = 'email';
  preview: OwnerAccountPreview | null = null;
  busy = false;
  errorMessage = '';
  successMessage = '';
  metadata: OfflineInstallerMetadata | null = null;
  metadataError = '';

  constructor(private readonly offlineInstaller: OfflineInstallerService) {}

  ngOnInit(): void {
    this.offlineInstaller.getOfflineInstallerMetadata().subscribe({
      next: (m) => {
        this.metadata = m;
      },
      error: () => {
        this.metadataError = 'Could not load installer configuration from the server.';
      },
    });
  }

  formatBytes(n: number | null): string {
    if (n == null || n <= 0) {
      return '';
    }
    if (n < 1024) {
      return `${n} B`;
    }
    if (n < 1024 * 1024) {
      return `${(n / 1024).toFixed(1)} KB`;
    }
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  }

  reset(): void {
    this.step = 'email';
    this.preview = null;
    this.errorMessage = '';
    this.successMessage = '';
  }

  verifyAccount(): void {
    this.errorMessage = '';
    this.successMessage = '';
    const email = this.ownerEmail.trim();
    if (!email) {
      this.errorMessage = 'Enter the account owner email (master.account.owneremail).';
      return;
    }
    this.busy = true;
    this.offlineInstaller.ownerAccountPreview(email).subscribe({
      next: (p) => {
        this.busy = false;
        this.preview = p;
        this.step = 'confirm';
      },
      error: (err) => {
        void this.handleError(err);
      },
    });
  }

  downloadCustomerPackage(): void {
    this.downloadZip(() => this.offlineInstaller.exportOfflineSetupPackage(this.resolvedEmail()));
  }

  downloadJsonOnly(): void {
    this.downloadZip(() => this.offlineInstaller.exportBundleFile(this.resolvedEmail()));
  }

  private resolvedEmail(): string {
    return (this.preview?.ownerEmail ?? this.ownerEmail).trim();
  }

  private downloadZip(
    request: () => ReturnType<OfflineInstallerService['exportOfflineSetupPackage']>,
  ): void {
    this.errorMessage = '';
    this.successMessage = '';
    const email = this.resolvedEmail();
    if (!email) {
      this.errorMessage = 'Missing owner email.';
      return;
    }
    this.busy = true;
    request().subscribe({
      next: (resp) => {
        this.busy = false;
        const body = resp.body;
        if (!body || body.size === 0) {
          this.errorMessage = 'Empty file from server.';
          return;
        }
        let filename = this.defaultFilename(resp);
        const cd = resp.headers.get('Content-Disposition');
        if (cd) {
          filename = this.parseFilename(cd) ?? filename;
        }
        this.triggerBlobDownload(body, filename);
        this.step = 'done';
        const hasExe = this.metadata?.bootstrapperPresent;
        this.successMessage = filename.toLowerCase().endsWith('.zip')
          ? hasExe
            ? `Download started: ${filename}. The customer extracts the ZIP and runs S3M-Offline-Setup.exe (wizard) after IT has installed the native WiX platform package.`
            : `Download started: ${filename}. No EXE is configured on the server — customer uses Run-S3M-Offline-Setup.cmd or ask ops to set OFFLINE_BOOTSTRAPPER_EXE_PATH.`
          : `Download started: ${filename}. For advanced import only (e.g. /setup or POST /provision/import).`;
      },
      error: (err) => {
        void this.handleError(err);
      },
    });
  }

  private defaultFilename(resp: HttpResponse<Blob>): string {
    const type = resp.headers.get('Content-Type') ?? '';
    if (type.includes('zip')) {
      return 'S3M-Offline-Setup.zip';
    }
    return 's3m-provision-bundle.json';
  }

  private parseFilename(cd: string): string | null {
    const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(cd);
    if (utf8?.[1]) {
      try {
        return decodeURIComponent(utf8[1]);
      } catch {
        return utf8[1];
      }
    }
    const m = /filename="([^"]+)"/i.exec(cd) ?? /filename=([^;\s]+)/i.exec(cd);
    if (m?.[1]) {
      return m[1].replace(/^["']|["']$/g, '');
    }
    return null;
  }

  private triggerBlobDownload(body: Blob, filename: string): void {
    const url = URL.createObjectURL(body);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  private async handleError(err: unknown): Promise<void> {
    this.busy = false;
    const e = err as { error?: Blob | unknown; status?: number; message?: string };
    let msg = e?.message ?? 'Request failed.';
    if (e?.error instanceof Blob) {
      try {
        const text = await e.error.text();
        try {
          const j = JSON.parse(text) as { message?: string | string[] };
          const m = j?.message;
          msg = Array.isArray(m) ? m.join(' ') : m ?? text;
        } catch {
          msg = text || msg;
        }
      } catch {
        msg = `Error ${e.status ?? ''}`.trim();
      }
    } else if (e?.error && typeof e.error === 'object' && 'message' in (e.error as object)) {
      const m = (e.error as { message?: string | string[] }).message;
      msg = Array.isArray(m) ? m.join(' ') : String(m);
    }
    this.errorMessage = msg;
  }
}
