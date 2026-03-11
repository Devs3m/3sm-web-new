import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMaterialModule } from '../../service/form-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DigicardFormComponent } from './digicard-form.component';

describe('DigicardFormComponent', () => {
  let component: DigicardFormComponent;
  let fixture: ComponentFixture<DigicardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigicardFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormMaterialModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DigicardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
