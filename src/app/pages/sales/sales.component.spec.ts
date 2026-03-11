import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { SalesComponent } from './sales.component';
import { SalesService } from '../service/sales.service';
import { AuthService } from '../service/auth.service';
import { GstService } from '../service/gst.service';
import { InstanceService } from '../service/instance.service';
import { FormMaterialModule } from '../service/form-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;
  let salesService: jasmine.SpyObj<SalesService>;
  let authService: jasmine.SpyObj<AuthService>;
  let gstService: jasmine.SpyObj<GstService>;
  let instanceService: jasmine.SpyObj<InstanceService>;

  beforeEach(async () => {
    salesService = jasmine.createSpyObj('SalesService', [
      'getCustomers', 'getProducts', 'getSalesSummaryCounts', 'getSalesSummaryList',
      'getSalesSummaryByInvoice', 'getSalesPrint', 'getSalesPrintData', 'getNextInvoiceNo'
    ]);
    salesService.getCustomers.and.returnValue(of([]));
    salesService.getProducts.and.returnValue(of([]));
    salesService.getSalesSummaryCounts.and.returnValue(of({ totalSalessummary: 0, totalAmount: 0 }));
    salesService.getSalesSummaryList.and.returnValue(of([]));
    salesService.getSalesSummaryByInvoice.and.returnValue(of({ summary: {}, details: [] }));
    salesService.getSalesPrint.and.returnValue(of(new Blob(['pdf'])));
    salesService.getSalesPrintData.and.returnValue(of({ salessummary: {}, salesdetails: [], instance: {}, customer: {} }));
    salesService.getNextInvoiceNo.and.returnValue(of({ nextInvoiceNo: 1 }));

    authService = jasmine.createSpyObj('AuthService', ['getUser', 'isAuthenticated']);
    authService.getUser.and.returnValue({ userId: 1, accountid: 1, instanceid: 1 });
    authService.isAuthenticated.and.returnValue(true);

    gstService = jasmine.createSpyObj('GstService', ['getGstDetails']);
    gstService.getGstDetails.and.returnValue(of([]));

    instanceService = jasmine.createSpyObj('InstanceService', ['getInstanceById']);
    instanceService.getInstanceById.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [SalesComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'pages/sales', component: SalesComponent },
          { path: 'pages/salesadd', component: SalesComponent }
        ]),
        ReactiveFormsModule,
        FormsModule,
        FormMaterialModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: SalesService, useValue: salesService },
        { provide: AuthService, useValue: authService },
        { provide: GstService, useValue: gstService },
        { provide: InstanceService, useValue: instanceService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have salesForm defined after init', () => {
    expect(component.salesForm).toBeDefined();
  });

  it('should call getCustomers on init', () => {
    expect(salesService.getCustomers).toHaveBeenCalled();
  });

  it('clearCustomer should reset customer fields', () => {
    component.salesForm.patchValue({
      customername: 'Test Customer',
      customerid: '1',
      customermobile: '1234567890'
    });
    component.clearCustomer();
    expect(component.salesForm.get('customername')?.value).toBe('');
    expect(component.salesForm.get('customerid')?.value).toBe('');
  });

  it('editSummaryItem should set error when invoiceno is null', () => {
    component.editSummaryItem({});
    expect(component.errorMessage).toBe('Invalid invoice. Cannot edit.');
  });

  it('openAddCustomerModal should set showAddCustomerModal to true', () => {
    component.openAddCustomerModal();
    expect(component.showAddCustomerModal).toBe(true);
  });

  it('closeAddCustomerModal should set showAddCustomerModal to false', () => {
    component.showAddCustomerModal = true;
    component.closeAddCustomerModal();
    expect(component.showAddCustomerModal).toBe(false);
  });
});
