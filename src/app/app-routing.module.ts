import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddVehicleComponent } from "./vehicles/add-vehicle/add-vehicle.component";

const routes: Routes = [
  { path: 'addVehicle', component: AddVehicleComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
