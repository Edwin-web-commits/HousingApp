
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';


@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

    SellRent = 1 ;  // 1 means buy , 2 means sell
    Properties: IPropertyBase[];
    City = "";
    SearchCity = "";
    SortbyParam = "";
    SortDirection = "asc";


    constructor(private housingService: HousingService, private route: ActivatedRoute) { }

    ngOnInit(): void {

        if (this.route.snapshot.url.toString()){
            this.SellRent = 2 ; // Means we are in rent-property URL else we are on base URL
        }

        this.housingService.getAllProperties(this.SellRent).subscribe( data => {
            this.Properties = data ;


        }, error =>
        {
            console.log(error);
        });

    }

    onCityFilter(){
        this.SearchCity = this.City;
    }
    onCityFilterClear(){
        this.SearchCity = "";
        this.City = "";
    }

    onSortDirection(){
        if (this.SortDirection === "desc"){
            this.SortDirection = 'asc';
        }else{
            this.SortDirection = 'desc';
        }
    }
}
