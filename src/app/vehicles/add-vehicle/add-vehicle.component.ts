import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../vehicle.service";
import { VehicleInterface } from "../vehicle.interface";
import { ActivatedRoute, Router } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  addVehicleForm!: FormGroup;

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //adding reactive form
    this.addVehicleForm = new FormGroup({
      'year': new FormControl(null, [Validators.required, Validators.min(1930), Validators.max(2020)]),
      'make': new FormControl(null),
      'model': new FormControl(null)
    });
  }

  onAddVehicle() {
    // @ts-ignore
    const year = this.addVehicleForm.get('year').value;
    // @ts-ignore
    const make = this.addVehicleForm.get('make').value;
    // @ts-ignore
    const model = this.addVehicleForm.get('model').value;
    const newVehicle: VehicleInterface = {year, make, model};
    this.vehicleService.addVehicle(newVehicle);
  }
}
