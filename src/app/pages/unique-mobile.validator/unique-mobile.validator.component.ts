import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-unique-mobile.validator',
  templateUrl: './unique-mobile.validator.component.html',
  styleUrls: ['./unique-mobile.validator.component.css']
})
export class UniqueMobileValidatorComponent {

}

export function uniqueMobileValidator(existingNumbers: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const isDuplicate = existingNumbers.includes(control.value.trim());
    return isDuplicate ? { duplicateMobile: true } : null;
  };
}
