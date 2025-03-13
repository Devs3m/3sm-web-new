import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HighchartComponent } from './highchart/highchart.component';
import { DigicardComponent } from './digicard/digicard.component';


const routes: Routes = [
  { path: '', component:PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
      { path: 'account', loadChildren: () => import(`./account/account.module`).then(m => m.AccountModule) },
      { path: 'instance', loadChildren: () => import(`./instance/instance.module`).then(m => m.InstanceModule) },
      { path: 'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) },
      { path: 'userrole', loadChildren: () => import(`./userrole/userrole.module`).then(m => m.UserroleModule) },
      { path: 'city', loadChildren: () => import(`./city/city.module`).then(m => m.CityModule) },
      { path: 'gst', loadChildren: () => import(`./gst/gst.module`).then(m => m.GstModule) },
      { path: 'vat', loadChildren: () => import(`./vat/vat.module`).then(m => m.VatModule) },
      { path: 'gdigicardst', loadChildren: () => import(`./digicard/digicard.module`).then(m => m.DigicardModule) },
      { path: 'product', loadChildren: () => import(`./product/product.module`).then(m => m.ProductModule) },
      {path:'highchart',component:HighchartComponent},
      {path:'digicard',component:DigicardComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
