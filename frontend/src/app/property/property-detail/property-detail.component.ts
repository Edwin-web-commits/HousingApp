import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

    public propertyId: number;
    property = new Property();

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

    ngOnInit(): void {
        this.propertyId = +this.route.snapshot.params.id;
        this.route.data.subscribe( (data) => {
            this.property = data.prp;
        });

        // this.route.params.subscribe(params =>{
        //   this.propertyId = +params['id'];
        //   this.housingService.getProperty(this.propertyId).subscribe( (data: Property) => {

        //     console.log(data);
        //     this.property= data ;
        //   })
        // })


        this.galleryOptions = [
            {
                width: '100%',
                height: '465px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            }

        ];

        this.galleryImages = [
            {
                small: 'assets/images/int-1.jpg',
                medium: 'assets/images/int-1.jpg',
                big: 'assets/images/int-1.jpg'
            },
            {
                small: 'assets/images/int-2.jpg',
                medium: 'assets/images/int-2.jpg',
                big: 'assets/images/int-2.jpg'
            },
            {
                small: 'assets/images/int-3.jpg',
                medium: 'assets/images/int-3.jpg',
                big: 'assets/images/int-3.jpg'
            }, {
                small: 'assets/images/int-5.jpg',
                medium: 'assets/images/int-5.jpg',
                big: 'assets/images/int-5.jpg'
            },
            {
                small: 'assets/images/int-1.jpg',
                medium: 'assets/images/int-1.jpg',
                big: 'assets/images/int-1.jpg'
            }
        ];

    }



}
