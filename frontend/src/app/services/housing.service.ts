import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]>{

    return this.http.get<string[]>(this.baseUrl+'/cities') ;
  }

  getAllProperties(sellRent?: number): Observable<Property[]>{
    return this.http.get('/data/properties.json').pipe(
      map(data =>{

        const propertiesArray: Array<Property>=[];

        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        if(localProperties){

          for(const id in localProperties){

            if(sellRent){
            if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent === sellRent){
              propertiesArray.push(localProperties[id]);
            }
          }else{
            propertiesArray.push(localProperties[id]);
          }

          }
        }


        for(const id in data){

          if(sellRent){
          if(data.hasOwnProperty(id) && data[id].SellRent === sellRent){
            propertiesArray.push(data[id]);
          }
        }else{
          propertiesArray.push(data[id]);
        }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  getProperty(id:number){
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id ===id);
      })
    );
  }

  addProperty(property: Property){
    let newProp = [property];

    if(localStorage.getItem('newProp')){
      newProp=[...JSON.parse(localStorage.getItem('newProp')), property];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID')+1));
      return +localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
