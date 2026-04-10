import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './pages/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private tokenCheckInterval: any;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tokenCheckInterval = setInterval(() => {
      const url = this.router.url;
      const isPublic =
        url === '/login' ||
        url.startsWith('/login') ||
        url === '/setup' ||
        url.startsWith('/setup');
      if (!isPublic) {
        this.authService.logoutIfTokenExpired();
      }
    }, 60000);
  }

  ngOnDestroy(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
  }
}
