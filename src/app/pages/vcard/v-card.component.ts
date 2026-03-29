import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../digicard/card/@core/card.service';
import { ProfileData } from './v-card.model';

@Component({
  selector: 'app-v-card',
  templateUrl: './v-card.component.html',
  styleUrls: ['./v-card.component.scss']
})
export class VCardComponent implements OnInit {
  private readonly tokenAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private readonly tokenMultiplier = 131;
  private readonly tokenOffset = 7919;
  setDefaultActive = false;
  productDetails: ProfileData = {};
  zoom = 13;
  showOptionShareBtn = false;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(event: number): void {
    this.setDefaultActive = event < 600;
  }

  ngOnInit(): void {
    this.zoom = 13;
    this.onResize(window.innerWidth);

    const routeId = this.route.snapshot.paramMap.get('id');
    const decodedId = this.decodeTokenToId(routeId);
    if (decodedId) {
      this.cardService.getVCardProductDetails(decodedId).subscribe({
        next: (res) => {
          const result = res?.result;
          const raw = Array.isArray(result) ? result : [];
          const first = raw
            .map((r: any) => {
              r.latitude = r.latitude != null ? Number(r.latitude) : undefined;
              r.longitude = r.longitude != null ? Number(r.longitude) : undefined;
              return r;
            })[0];

          this.productDetails = first ?? {};
        },
        error: () => {
          this.productDetails = {};
        }
      });
    } else {
      this.productDetails = {};
    }
  }

  getHref(item: string | undefined, type: string): string {
    if (!item) return '#';
    return `${type}:${item}`;
  }

  safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url || '#');
  }

  showShareBtn(): void {
    this.showOptionShareBtn = !this.showOptionShareBtn;
  }

  getMapEmbedUrl(): SafeResourceUrl {
    const lat = this.productDetails?.latitude;
    const lng = this.productDetails?.longitude;
    if (lat == null || lng == null || isNaN(lat) || isNaN(lng)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
    }
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=${this.zoom}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get hasValidMapCoordinates(): boolean {
    const lat = this.productDetails?.latitude;
    const lng = this.productDetails?.longitude;
    return lat != null && lng != null && !isNaN(lat) && !isNaN(lng);
  }

  getShareUrl(): string {
    const id = this.productDetails?.vCardMasterId;
    if (id == null || id === '') return '';
    const token = this.encodeIdToToken(id);
    return `https://card.connectsite.in/pages/digicard/card/${token}`;
  }

  private encodeIdToToken(id: string | number): string {
    const parsed = Number(id);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      return String(id);
    }
    let value = Math.trunc(parsed) * this.tokenMultiplier + this.tokenOffset;
    let token = '';
    while (value > 0) {
      token = this.tokenAlphabet[value % this.tokenAlphabet.length] + token;
      value = Math.floor(value / this.tokenAlphabet.length);
    }
    return token || this.tokenAlphabet[0];
  }

  private decodeTokenToId(routeValue: string | null): string | null {
    if (!routeValue) return null;
    if (/^\d+$/.test(routeValue)) return routeValue;
    if (!/^[a-zA-Z0-9]+$/.test(routeValue)) return routeValue;

    let decoded = 0;
    for (const ch of routeValue) {
      const index = this.tokenAlphabet.indexOf(ch);
      if (index < 0) {
        return routeValue;
      }
      decoded = decoded * this.tokenAlphabet.length + index;
    }

    const normalized = decoded - this.tokenOffset;
    if (normalized <= 0 || normalized % this.tokenMultiplier !== 0) {
      return routeValue;
    }

    return String(normalized / this.tokenMultiplier);
  }

  getFacebookShareUrl(): string {
    const url = encodeURIComponent(this.getShareUrl());
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }

  getWhatsappShareUrl(): string {
    const url = encodeURIComponent(this.getShareUrl());
    return `https://api.whatsapp.com/send?text=${url}`;
  }

  getTwitterShareUrl(): string {
    const url = encodeURIComponent(this.getShareUrl());
    return `https://twitter.com/intent/tweet?url=${url}`;
  }

  getLinkedinShareUrl(): string {
    const url = encodeURIComponent(this.getShareUrl());
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  }
}

