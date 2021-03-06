import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddVehicleComponent } from "./vehicles/add-vehicle/add-vehicle.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: VehiclesComponent, children: [
      { path: 'add-vehicle', component: AddVehicleComponent }
    ] }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
