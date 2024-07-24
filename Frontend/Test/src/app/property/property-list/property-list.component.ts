import { Component, OnInit } from '@angular/core';

import { HousingService } from '../../services/housing.service';
import { Iproperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Iproperty[];
  
  constructor(private housingService: HousingService, private route: ActivatedRoute) 
  { }//This is where the input datas taken from services

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //under rent-property url, else it is under the base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
       this.properties=data;//this will display the properties.json inputs
       console.log(data);
       
      }, error => { 
        console.log('httperror:');
        console.log(error);
      }
  //the input data i.e., properties list components are fetched from the service
    );
  }
}

