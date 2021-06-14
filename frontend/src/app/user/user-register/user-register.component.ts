
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

    registrationForm: FormGroup;
    user: User;
    userSubmitted: boolean;

    constructor(private authService: AuthService, private userService: UserService, private alertyfyService: AlertifyService) { }

    ngOnInit(): void {
        this.registrationForm = new FormGroup({

            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
            confirmPassword: new FormControl(null, [Validators.required]),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(10)])
        }, this.passwordMatchingValidator);
    }

    passwordMatchingValidator(formGroup: FormGroup): Validators{

        return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : { notmatched: true};
    }

    userData(): User {
        return this.user = {
            firstName: this.firstName.value,  // assigning the value of userName form control to userName property of the User interface
            email: this.email.value,
            password: this.password.value,
            lastName: this.lastName.value,
            phoneNumber: this.phoneNumber.value
        };
    }

    onSubmit(){

        this.userSubmitted = true;
        if (this.registrationForm.valid){
            // this.user=Object.assign(this.user, this.registrationForm.value);
            // this.userService.addUser(this.userData());
            this.authService.registerUser(this.userData()).subscribe( () => {
                this.registrationForm.reset();
                this.userSubmitted = false;
                this.alertyfyService.success('Congratulations, You are successfully registered');
            });

        }

    }




    // ------------------------------------
    // Getter methods for all form controls
    // ------------------------------------
    get firstName() {
        return this.registrationForm.get('firstName') as FormControl;
    }
    get lastName() {
        return this.registrationForm.get('lastName') as FormControl;
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
    get phoneNumber() {
        return this.registrationForm.get('phoneNumber') as FormControl;
    }
    // ------------------------






}
