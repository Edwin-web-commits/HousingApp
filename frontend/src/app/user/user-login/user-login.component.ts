import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {



    constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

    ngOnInit(): void {
    }

    onLogin(loginForm: NgForm){

        // const token = this.authService.authUser(loginForm.value);
        this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((data: any) => {


            localStorage.setItem('token', data.token);
            localStorage.setItem('username', loginForm.value.email);
            this.alertify.success('Login Successful');
            loginForm.reset();
            this.router.navigate(['/']);
        });
        // if(token){
        //   localStorage.setItem('token', token.userName);

        //   this.alertify.success("Login Successful");
        //   loginForm.reset();

    //   this.router.navigate(['/']);
    // }else{
    //   this.alertify.error("Username or password is wrong");
    // }
    }

}
