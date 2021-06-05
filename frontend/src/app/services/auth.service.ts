import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // baseUrl=environment.baseUrl;

    readonly baseUrl = 'http://localhost:64200/api';

    // baseUrl:'http://localhost:64200/house_api/api';

    constructor(private http: HttpClient) { }

    registerUser(user: User){
        const body: User = {
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber
        };

        return this.http.post(this.baseUrl + "/account/register", body);
    }
    login(email: string, password: string){

        const data = {
            email,
            password
        };
        // var reqHeader=new HttpHeaders({'Content-Type':'application/json', 'charset':'utf-8'});

        return this.http.post(this.baseUrl + '/account/login', data);

    }
}
