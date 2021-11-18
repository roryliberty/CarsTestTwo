import {VehicleInterface} from "./vehicle.interface";

export class VehicleService {
  private vehicles: VehicleInterface[] = [
    {
      year: 1984,
      make: 'Ford',
      model: 'Thunderbird'
    },
    {
      year: 1990,
      make: 'Chrysler',
      model: 'LeBaron'
    },
    {
      year: 1993,
      make: 'Ford',
      model: 'Probe GT'
    }
  ];

  getVehicles() {
    return this.vehicles.slice();
  }

  addVehicle(newVehicle: VehicleInterface) {
    this.vehicles.push(newVehicle);
    console.log(this.vehicles);
  }
}
