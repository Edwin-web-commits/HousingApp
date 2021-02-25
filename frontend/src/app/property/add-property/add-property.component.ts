import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string>=["House","Apartment","Duplex","Studio"];
  furnishTypes: Array<string>=["Fully","Semi","Unfurnished"];
  directionsToMove: Array<string>=["East","West","South","North"];

  propertyView: IProperty={
    Id:null,
    Name:'',
    Price:null,
    SellRent:null,
    Type:null,


  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(['/']);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

  onSubmit(Form: NgForm){

  }


}
