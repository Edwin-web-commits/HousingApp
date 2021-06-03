import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser:string;

  constructor(private alertify: AlertifyService, private router:Router) { }

  ngOnInit(): void {

  }



  loggedIn(){
   // this.loggedinUser= localStorage.getItem('token');
    this.loggedinUser=localStorage.getItem('username');

    return this.loggedinUser;
  }


  onLogout(){
    localStorage.removeItem('username');
    localStorage.removeItem("token");

    this.alertify.success("You are logged out");
    this.router.navigate(['user/register']);
  }

}
