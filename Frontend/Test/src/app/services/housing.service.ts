import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/Iproperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) 
   {}
  //This is where the input datas taken from properties.json file
  getAllProperties(SellRent: number):Observable<Iproperty[]> {
   return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertiesArray: Array<Iproperty> = [];
      for(const id in data){
        if(data.hasOwnProperty(id)&& data[id].SellRent === SellRent){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
   );
  }


}


