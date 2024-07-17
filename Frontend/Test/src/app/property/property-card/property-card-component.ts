import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    //template: '<h1>Card</h1>', template should have appostofe not this single quotes
    templateUrl: 'property-card-component.html',
    styleUrls: ['property-card-component.css']

})

export class propertycardcomponent{
    property: any = {
        "Id": "1.",
        "Type": "House",
        "Price": "Rs.200000"
    }
}