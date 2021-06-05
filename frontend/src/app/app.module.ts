import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from './services/housing.service';
import { from } from 'rxjs';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { AuthGuard } from './auth/auth.guard';
import { HttpErrorInterceptorService } from './services/httperror-interceptor.service';

const appRoutes: Routes = [
    {path: "", component: PropertyListComponent},
    {path: "rent-property", component: PropertyListComponent},
    {path: "add-property", component: AddPropertyComponent, canActivate: [AuthGuard]},
    {path: "property-detail/:id", component: PropertyDetailComponent , resolve: {prp: PropertyDetailResolverService}, canActivate: [AuthGuard]},
    {path: "user/register", component: UserRegisterComponent},
    {path: "user/login", component: UserLoginComponent},
    {path: "**", component: PropertyListComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        NavBarComponent,
        AddPropertyComponent,
        PropertyDetailComponent,
        UserLoginComponent,
        UserRegisterComponent,
        FilterPipe,
        SortPipe

    ],
    imports: [
        TabsModule.forRoot(),
        ButtonsModule.forRoot(),
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        NgxGalleryModule


    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptorService,
            multi: true
        },
        HousingService,
        UserServiceService,
        AlertifyService,
        AuthService,
        PropertyDetailResolverService,
        AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
