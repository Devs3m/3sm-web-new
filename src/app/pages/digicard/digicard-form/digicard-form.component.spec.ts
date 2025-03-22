import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigicardFormComponent } from './digicard-form.component';

describe('DigicardFormComponent', () => {
  let component: DigicardFormComponent;
  let fixture: ComponentFixture<DigicardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigicardFormComponent]
    });
    fixture = TestBed.createComponent(DigicardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
