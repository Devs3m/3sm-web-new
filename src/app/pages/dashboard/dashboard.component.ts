import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accountForm!: FormGroup;
  isFormOpen = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      companyname: [''],
      ownername: ['']
    });
  }

  toggleForm(): void {
    this.isFormOpen = !this.isFormOpen;
  }
}


