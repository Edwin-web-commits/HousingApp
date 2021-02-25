import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup;
  user:User;
  userSubmitted:boolean;

  constructor(private userService: UserServiceService,private alertyfyService: AlertifyService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    },this.passwordMatchingValidator);
  }

  passwordMatchingValidator(formGroup: FormGroup): Validators{

    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null: { notmatched: true}
  }

  userData(): User {
    return this.user ={
      userName: this.userName.value,  //assigning the value of userName form control to userName property of the User interface
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  onSubmit(){

    this.userSubmitted=true;
     if(this.registrationForm.valid){
     // this.user=Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());

      this.registrationForm.reset();
      this.userSubmitted=false;
      this.alertyfyService.success("Congratulations, You are successfully registered");
     }else{
      this.alertyfyService.error("Kindly provide the require fields");
     }

  }




   // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  // ------------------------






}
