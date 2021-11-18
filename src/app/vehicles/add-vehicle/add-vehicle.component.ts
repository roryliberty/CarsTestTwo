import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  addVehicleForm!: FormGroup;
  validYears = /^(?:192[0-9]|19[3-9][0-9]|20[0-1][0-9]|2020)$/; // Valid years 1920-2020

  constructor() { }

  ngOnInit() {
    this.addVehicleForm = new FormGroup({
      'vehicleData': new FormGroup({
        'year': new FormControl(null, [Validators.required, Validators.pattern(this.validYears)]),
        'make': new FormControl(null, Validators.required),
        'model': new FormControl(null, Validators.required)
      })
    });
  }

  onAddVehicle() {
    console.log(this.addVehicleForm);
  }

  onClearForm() {
    this.addVehicleForm.reset();
  }
}
