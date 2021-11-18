import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from "./vehicles/vehicle.service";
import { AppRoutingModule } from './app-routing.module';
import { AddVehicleComponent } from './vehicles/add-vehicle/add-vehicle.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    AddVehicleComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [VehicleService, AddVehicleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
