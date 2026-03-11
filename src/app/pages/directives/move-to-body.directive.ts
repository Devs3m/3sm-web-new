import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';

/**
 * Moves the host element to document.body when created, and removes it from body on destroy.
 * Use for modals/overlays so they appear on top of layout (e.g. mat-sidenav-container).
 */
@Directive({
  selector: '[appMoveToBody]'
})
export class MoveToBodyDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const host = this.el.nativeElement;
    if (host.parentNode && document.body) {
      document.body.appendChild(host);
    }
  }

  ngOnDestroy(): void {
    const host = this.el.nativeElement;
    if (host.parentNode === document.body) {
      document.body.removeChild(host);
    }
  }
}
