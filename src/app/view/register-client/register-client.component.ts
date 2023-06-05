import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddClientService } from 'src/app/controler/Client/addClient/add-client.service';
import { AddClientI } from 'src/app/model/Client/add-client';

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
    lastname1: new FormControl('', Validators.required),
    lastname2: new FormControl('', Validators.required),
    birth_date: new FormControl('01-01-2000', Validators.required),
    weight: new FormControl(0, Validators.required),
    height: new FormControl(0, Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    country : new FormControl('', Validators.required),
    calorie_goal: new FormControl(0, Validators.required)
  });

  constructor( private api : AddClientService ) { }

  /**
   * @description This method is used to create a new client
   * @param form 
   */
  createNewClient(form : AddClientI) {

    console.log(form);

    this.api.addClient(form).subscribe(data => {
      alert('Client created successfully!');
    });
  }
  
}
