import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/gaurds/auth.gaurd';
import { AppComponent } from './app.component';
import { CardComponent } from './pages/digicard/card/card.component';


const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'pages', loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule) },
      { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
      { path: 'card/:id', component: CardComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
