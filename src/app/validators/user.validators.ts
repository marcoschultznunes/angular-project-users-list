import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const username:string = control.value.trim();
    
    if(username.length < 2 || username.length > 100){
      return {invalidLength: true};
    }
    
    return null;
  };
};

export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value.trim();
    
    if(!age || isNaN(age) || age.indexOf(".") !== -1){
      return {notInt: true};
    }
    if(Number(age) < 0) {
      return {negative: true};
    }

    return null;
  };
};
