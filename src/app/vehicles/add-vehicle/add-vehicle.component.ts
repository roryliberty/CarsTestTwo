import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "../vehicle.service";
import { VehicleInterface } from "../vehicle.interface";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  addVehicleForm!: FormGroup; // ! is some kind of definite assertion
  validYears = /^(?:192[0-9]|19[3-9][0-9]|20[0-1][0-9]|2020)$/; // Valid years 1920-2020

  constructor(private router: Router,
              private route: ActivatedRoute,
              private vehicleService: VehicleService) { }

  ngOnInit() {
    this.addVehicleForm = new FormGroup({
      'vehicleData': new FormGroup({
        'year': new FormControl(1920, [Validators.required, Validators.pattern(this.validYears)]),
        'make': new FormControl('Make', Validators.required),
        'model': new FormControl('Model', Validators.required)
      })
    });
    console.log(this.addVehicleForm);
  }

  onAddVehicle() {
    // @ts-ignore
    const year  = this.addVehicleForm.get('vehicleData.year').value;
    // @ts-ignore
    const make = this.addVehicleForm.get('vehicleData.make').value;
    // @ts-ignore
    const model = this.addVehicleForm.get('vehicleData.model').value;
    const newVehicle: VehicleInterface = {year, make, model};

    this.vehicleService.addVehicle(newVehicle);
  }

  onClearForm() {
    this.addVehicleForm.reset();
  }

  onCloseForm() {
    //this.router.navigate(['']);
  }
}
