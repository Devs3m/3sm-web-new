import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService, SalesSettings } from '../service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  salesForm!: FormGroup;
  savedMessage = '';

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.settingsService.refreshFromApi();
    const sales = this.settingsService.getSalesSettings();
    this.salesForm = this.formBuilder.group({
      expiryConfigEnabled: [sales.expiryConfigEnabled],
      hideProductsDaysBeforeExpiry: [
        sales.hideProductsDaysBeforeExpiry,
        [Validators.required, Validators.min(0), Validators.max(365)],
      ],
      gstInclusive: [sales.gstInclusive],
      hideBatchNoAndExpiryInProductSales: [sales.hideBatchNoAndExpiryInProductSales ?? false],
      allowDecimalQtyInSales: [sales.allowDecimalQtyInSales ?? false],
    });
  }

  saveSalesSettings(): void {
    if (this.salesForm.invalid) return;
    const v = this.salesForm.value;
    this.settingsService.setSalesSettings({
      expiryConfigEnabled: !!v.expiryConfigEnabled,
      hideProductsDaysBeforeExpiry: Math.max(0, Number(v.hideProductsDaysBeforeExpiry) || 0),
      gstInclusive: !!v.gstInclusive,
      hideBatchNoAndExpiryInProductSales: !!v.hideBatchNoAndExpiryInProductSales,
      allowDecimalQtyInSales: !!v.allowDecimalQtyInSales,
    });
    this.savedMessage = 'Settings saved successfully.';
    setTimeout(() => (this.savedMessage = ''), 3000);
  }
}
