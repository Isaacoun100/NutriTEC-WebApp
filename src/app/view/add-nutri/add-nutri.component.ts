import { paymentTypes } from './../../setValues';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddNutriService } from 'src/app/controler/Nutritionist/addNutri/add-nutri.service';
import { CreateNutriI } from 'src/app/model/Nutritionist/create-nutri';

@Component({
  selector: 'app-add-nutri',
  templateUrl: './add-nutri.component.html',
  styleUrls: ['./add-nutri.component.scss']
})
export class AddNutriComponent {

  paymentTypes = paymentTypes;

  constructor( private api : AddNutriService ) { }

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  nutriForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastname_1: new FormControl('', Validators.required),
    lastname_2: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    birth_date: new FormControl('', Validators.required),
    weight: new FormControl(0, Validators.required),
    address: new FormControl('', Validators.required),
    height: new FormControl(0, Validators.required),
    photo: new FormControl('', Validators.required),
    credit_card: new FormControl('', Validators.required),
    payment_type: new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to create a new Nutri
   */
  createNewNutri(form : CreateNutriI) {

    console.log(form);

    this.api.AddNutri(form).subscribe((data) => {
      alert('Nutritionist added successfully');
    });
  }

}
