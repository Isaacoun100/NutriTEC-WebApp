import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-measurement',
  templateUrl: './add-measurement.component.html',
  styleUrls: ['./add-measurement.component.scss']
})
export class AddMeasurementComponent {

  measurementForm = new FormGroup({
    weight : new FormControl(0, Validators.required),
    waist : new FormControl(0, Validators.required),
    neck : new FormControl(0, Validators.required),
    hip : new FormControl(0, Validators.required),
    muscle_percentage : new FormControl(0, Validators.required),
    client_id : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    fat_percentage : new FormControl(0, Validators.required)
  });

  addMeasurement(form : any) {
    console.log(form);
  }

}