import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})

export class UserRegisterComponent implements OnInit {
  RegistrationForm: FormGroup;
  //passwordmatchingvalidator: AbstractControlOptions | ValidatorFn | ValidatorFn[] | null | undefined;

  
 constructor(){}

  ngOnInit() {
    this.RegistrationForm= new FormGroup({
      userName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null,Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.maxLength(13)])
    }
  );
  }

  /*passwordmatchingvalidator(formGroup: FormGroup): Validators{
  
    return formGroup.get('Password').value === formGroup.get('confirmPassword').value ? null: 
    {notmatched:true};
  }*/
get userName()
{
  return this.RegistrationForm.get('userName') as FormControl;
}
get email()
{
  return this.RegistrationForm.get('email') as FormControl;
}
get password()
{
  return this.RegistrationForm.get('password') as FormControl;
}
get confirmPassword()
{
  return this.RegistrationForm.get('confirmPassword') as FormControl;
}
get mobile()
{
  return this.RegistrationForm.get('mobile') as FormControl;
}
  onsubmit(){
    console.log(this.RegistrationForm);
  }





}
