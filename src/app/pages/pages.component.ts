import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  title = '3sm-web';
  shouldRun: any;
  constructor(public authService: AuthService) {} // Inject AuthService here

}
