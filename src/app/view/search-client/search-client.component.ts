import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientSearchService } from 'src/app/controler/Nutritionist/patientSearch/patient-search.service';
import { SearchClientI, newClientI } from 'src/app/model/Nutritionist/search-client';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent {

  patients : newClientI[] = [];

  /**
   * @description Constructor that injects the API's we are going to use.
   */
  constructor( private api : PatientSearchService ) { }

  searchForm = new FormGroup({
    client_name : new FormControl('', Validators.required)
  });

  NewForm = new FormGroup({
    client_email : new FormControl('', Validators.required),
    nutritionist_id : new FormControl('', Validators.required)
  });

  /**
   * @description This function is used to parse the data we get from the API.
   */
  parsePatients(list : newClientI[]){
    
    for (let index = 0; index < list.length; index++) {
      this.patients.push(list[index]);
    }

  }

  /**
   * @description This function is used to search for a patient.
   */
  searchPatient(form : SearchClientI) {

    this.patients = [];

    this.api.searchClient(form).subscribe((data) => {
      let clients = data;
      console.log(clients);
      this.parsePatients(data.result);
    });
    
  }

  /**
   * @description This function is used to assign a patient to a nutritionist.
   */
  assignPatient(email : string | null) {

    this.NewForm.controls['client_email'].setValue(email);
    this.NewForm.controls['nutritionist_id'].setValue( JSON.parse(String(sessionStorage.getItem('nutri')))['nutri_code'] );

    console.log(this.NewForm.getRawValue());

    this.api.assignClient(this.NewForm.getRawValue()).subscribe((data) => {
      alert('Patient assigned successfully');
    });
  }

}
