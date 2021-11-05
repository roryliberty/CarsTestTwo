import { Component, OnInit } from '@angular/core';
import { VehicleService } from "./vehicle.service";
import {VehicleInterface} from "./vehicle.interface";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: VehicleInterface[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehicles();
    console.log(this.vehicles);
  }

}
