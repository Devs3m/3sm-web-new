import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RoleGuard } from './gaurds/role.guard';

const routes: Routes = [
  { path: '', component:PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      { 
        path: 'dashboard', 
        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule),
        canActivate: [RoleGuard]
        // Dashboard accessible without specific permission check (handled in guard)
      },
      { 
        path: 'account', 
        loadChildren: () => import(`./account/account.module`).then(m => m.AccountModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'account', action: 'view' } }
      },
      { 
        path: 'instance', 
        loadChildren: () => import(`./instance/instance.module`).then(m => m.InstanceModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'instance', action: 'view' } }
      },
      { 
        path: 'user', 
        loadChildren: () => import(`./user/user.module`).then(m => m.UserModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'user', action: 'view' } }
      },
      { 
        path: 'userrole', 
        loadChildren: () => import(`./userrole/userrole.module`).then(m => m.UserroleModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'userrole', action: 'view' } }
      },
      { 
        path: 'city', 
        loadChildren: () => import(`./city/city.module`).then(m => m.CityModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'city', action: 'view' } }
      },
      { 
        path: 'gst', 
        loadChildren: () => import(`./gst/gst.module`).then(m => m.GstModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'gst', action: 'view' } }
      },
      { 
        path: 'vat', 
        loadChildren: () => import(`./vat/vat.module`).then(m => m.VatModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'vat', action: 'view' } }
      },
      { 
        path: 'product', 
        loadChildren: () => import(`./product/product.module`).then(m => m.ProductModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'product', action: 'view' } }
      },
      { 
        path: 'digicard', 
        loadChildren: () => import(`./digicard/digicard.module`).then(m => m.DigicardModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'digicard', action: 'view' } }
      },
      { 
        path: 'sales', 
        loadChildren: () => import(`./sales/sales.module`).then(m => m.SalesModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      { 
        path: 'salesadd', 
        loadChildren: () => import(`./sales/sales.module`).then(m => m.SalesModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      { 
        path: 'salesedit', 
        loadChildren: () => import(`./salesedit/salesedit.module`).then(m => m.SaleseditModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'update' } }
      },
      { 
        path: 'inventorysales', 
        loadChildren: () => import(`./inventorysales/inventorysales.module`).then(m => m.InventorysalesModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      { 
        path: 'inventorysalesadd', 
        loadChildren: () => import(`./inventorysales/inventorysales.module`).then(m => m.InventorysalesModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      { 
        path: 'customer', 
        loadChildren: () => import(`./customer/customer.module`).then(m => m.CustomerModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'customer', action: 'view' } }
      },
      {
        path: 'supplier',
        loadChildren: () => import(`./supplier/supplier.module`).then(m => m.SupplierModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'supplier', action: 'view' } }
      },
      {
        path: 'purchase',
        loadChildren: () => import(`./purchase/purchase.module`).then(m => m.PurchaseModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'purchase', action: 'view' } }
      },
      { 
        path: 'product-ledger', 
        loadChildren: () => import(`./product-ledger/product-ledger.module`).then(m => m.ProductLedgerModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      {
        path: 'sales-ledger',
        loadChildren: () => import(`./sales-ledger/sales-ledger.module`).then(m => m.SalesLedgerModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      {
        path: 'finance',
        loadChildren: () => import(`./finance/finance.module`).then(m => m.FinanceModule),
        canActivate: [RoleGuard],
        data: { permission: { resource: 'sales', action: 'view' } }
      },
      {
        path: 'receipt',
        redirectTo: 'finance',
        pathMatch: 'full',
      },
      {
        path: 'receipts',
        redirectTo: 'finance',
        pathMatch: 'full',
      },
      {
        path: 'accounts',
        redirectTo: 'finance',
        pathMatch: 'full',
      },
      { 
        path: 'settings', 
        loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule),
        canActivate: [RoleGuard]
      },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
