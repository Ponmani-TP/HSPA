import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { propertycardcomponent } from './property/property-card/property-card-component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './User/UserLogin/UserLogin/UserLogin.component';
import { UserRegisterComponent } from './User/UserRegister/UserRegister/UserRegister.component';

//you can find this part in link displayed in url.Array is mentioned coz an app can have many routes
const appRoutes: Routes =[
  {path: '', component: PropertyListComponent},
  {path: 'Rent-Property', component: PropertyListComponent},
  {path: 'Add-Property', component: AddPropertyComponent},
  {path: 'Property-Details/:id', component: PropertyDetailComponent},
  {path: 'User/Login', component: UserLoginComponent},
  {path: 'User/Register', component: UserRegisterComponent},
  {path: '**', component: PropertyListComponent}//this is error link 
]
@NgModule({
  declarations: [	
    AppComponent,
    propertycardcomponent,PropertyDetailComponent,
    PropertyListComponent,
      NavBarComponent,UserLoginComponent,UserRegisterComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,//this is where we need to add the data file i.e., properties.json
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
