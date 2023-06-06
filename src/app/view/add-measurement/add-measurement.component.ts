import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddMeasurementService } from 'src/app/controler/Client/addMeasurement/add-measurement.service';
import { AddMeasurementsI } from 'src/app/model/Client/add-measurements';

@Component({
  selector: 'app-add-measurement',
  templateUrl: './add-measurement.component.html',
  styleUrls: ['./add-measurement.component.scss']
})
export class AddMeasurementComponent {

  constructor( private api : AddMeasurementService) {
    this.measurementForm.controls['client_id'].setValue(
      JSON.parse(String(sessionStorage.getItem('client')))['email']
    );
   }

  measurementForm = new FormGroup({
    client_id : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    weight : new FormControl(0, Validators.required),
    waist : new FormControl(0, Validators.required),
    neck : new FormControl(0, Validators.required),
    hip : new FormControl(0, Validators.required),
    muscle_percentage : new FormControl('0', Validators.required),
    fat_percentage : new FormControl('0', Validators.required)
  });

  addMeasurement(form : AddMeasurementsI) {

    this.api.addMeasuments(form).subscribe(data => {
      alert('Measurement added successfully');
    });
  }

}