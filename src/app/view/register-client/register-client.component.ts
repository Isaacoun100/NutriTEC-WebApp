import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstLastName: new FormControl('', Validators.required),
    secondLastName: new FormControl('', Validators.required),
    birthDate: new FormControl('01-01-2000', Validators.required),
    weight: new FormControl(0, Validators.required),
    height: new FormControl(0, Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    caloriesGoal: new FormControl(0, Validators.required),
    country : new FormControl('', Validators.required)
  });

  constructor() { }

  /**
   * @description This method is used to create a new client
   * @param form 
   */
  createNewClient(form : any) {
    console.log(form);
  }
  
}
