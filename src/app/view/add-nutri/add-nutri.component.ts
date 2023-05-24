import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-nutri',
  templateUrl: './add-nutri.component.html',
  styleUrls: ['./add-nutri.component.scss']
})
export class AddNutriComponent {

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  nutriForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    firstLastName: new FormControl('', Validators.required),
    secondLastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nutriID: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    weight: new FormControl(0, Validators.required),
    height: new FormControl(0, Validators.required),
    password: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    creditCard: new FormControl('', Validators.required),
    paymentType: new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to create a new Nutri
   * @param form 
   */
  createNewNutri(form : any) {
    console.log(form);
  }

}
