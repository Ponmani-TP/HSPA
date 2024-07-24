import { Component, Input } from "@angular/core";
import { Iproperty } from "../Iproperty.interface";

@Component({
    selector: 'app-property-card',
    //template: '<h1>Card</h1>', template should have appostofe not this single quotes
    templateUrl: 'property-card-component.html',
    styleUrls: ['property-card-component.css']

})

export class propertycardcomponent{
    @Input() property: Iproperty;  
}