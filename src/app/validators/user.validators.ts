import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/* username */
export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const username = control.value.trim();
    
    if(username.length < 2 || username.length > 100){  // Error if username not 2-100 characters
      return {invalidLength: true};
    }
    
    return null;
  };
};

/* age */
export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value.trim();
    
    if(!age || isNaN(age) || age.indexOf(".") !== -1){  // Error if empty, NaN or float
      return {notInt: true};
    }
    if(Number(age) < 0) {  // Error if negative
      return {negative: true};
    }

    return null;
  };
};
