import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, ErrorStateMatcher } from '@angular/material';

import { FormDataService } from '../form-data.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();
  hide = false;

  constructor(
    private formDataService: FormDataService, 
    private formBuilder: FormBuilder, 
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(\d{13}|\w+@\w+\.\w{2,3})$/;
    this.registrForm  =  this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'emailOrPhone': ['', [Validators.required, Validators.pattern(emailregex)]],
      'passwordGroup': this.formBuilder.group({
        'password': ['', [Validators.required, this.checkPassword]],
        'pconfirm': ['']
      }, {validator: this.equalValidator})
    });
  };


  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  equalValidator({value}: FormGroup): {[key: string]: any} {
    const [first, last] = Object.keys(value || {});
    return value[first] === value[last] ? null : {equal: true};
  }

  getErrorName() {
    return this.registrForm.get('name').hasError('required') ? 'Field is required' :
      this.registrForm.get('name').hasError('minlength') ? 'Type at least 3 characters' : '';
  }


  getErrorEmailOrPhone() {
    return this.registrForm.get('emailOrPhone').hasError('required') ? 'Field is required' :
      this.registrForm.get('emailOrPhone').hasError('pattern') ? 'Not a valid emailaddress' : '';
  }

  getErrorPassword() {
    return this.registrForm.get('passwordGroup').get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.registrForm.get('passwordGroup').get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  registrate() {
    console.log(this.registrForm.value);
    this.formDataService.submitRegistr(this.registrForm.value)
      .subscribe(
        data => console.log('success', data),
        error => {
          console.log('err!', error);
          const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '250px'            
          });

          dialogRef.afterClosed().subscribe();
        }
      )
  }
}
