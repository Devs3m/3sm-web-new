import { Component } from '@angular/core';
import { OfflineInstallerService } from './offline-installer.service';

@Component({
  selector: 'app-offline-installer',
  templateUrl: './offline-installer.component.html',
  styleUrls: ['./offline-installer.component.css'],
})
export class OfflineInstallerComponent {
  ownerEmail = '';
  busy = false;
  errorMessage = '';
  successMessage = '';

  constructor(private readonly offlineInstaller: OfflineInstallerService) {}

  download(): void {
    this.errorMessage = '';
    this.successMessage = '';
    const email = this.ownerEmail.trim();
    if (!email) {
      this.errorMessage = 'Enter the account owner email (master.account.owneremail).';
      return;
    }
    this.busy = true;
    this.offlineInstaller.exportBundleFile(email).subscribe({
      next: (resp) => {
        this.busy = false;
        const body = resp.body;
        if (!body || body.size === 0) {
          this.errorMessage = 'Empty file from server.';
          return;
        }
        let filename = 's3m-provision-bundle.json';
        const cd = resp.headers.get('Content-Disposition');
        if (cd) {
          const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(cd);
          if (utf8?.[1]) {
            try {
              filename = decodeURIComponent(utf8[1]);
            } catch {
              filename = utf8[1];
            }
          } else {
            const m = /filename="([^"]+)"/i.exec(cd) ?? /filename=([^;\s]+)/i.exec(cd);
            if (m?.[1]) {
              filename = m[1].replace(/^["']|["']$/g, '');
            }
          }
        }
        const url = URL.createObjectURL(body);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        this.successMessage = `Download started: ${filename}. Import this file on the offline app (/setup) or POST /provision/import.`;
      },
      error: (err) => {
        void this.handleError(err);
      },
    });
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
