import { patients } from 'src/app/setValues';
import { patientDaily } from './../../setValues';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-follow-up',
  templateUrl: './client-follow-up.component.html',
  styleUrls: ['./client-follow-up.component.scss']
})
export class ClientFollowUpComponent {

  patientDaily = patientDaily;
  patients = patients;

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  clientForm = new FormGroup({
    id: new FormControl('', Validators.required),
    date: new FormControl('2000-01-01', Validators.required),
  });

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  commentForm = new FormGroup({
    comment : new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to loads the consumption of set client
   * @param form 
   */
  loadClientInfo(form: any) {
    console.log(form);
  }

  /**
   * @description This method is used to loads the consumption of set client
   * @param form 
   */
  commentClient(form: any) {
    console.log(form);
  }

}
