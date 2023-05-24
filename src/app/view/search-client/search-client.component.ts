import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patients } from 'src/app/setValues';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent {

  patients = patients;

  searchForm = new FormGroup({
    name : new FormControl('', Validators.required)
  });

  searchPatient(form : any) {
    console.log(form);
  }

  assignPatient(patientID : string) {
    console.log(patientID);
  }

}
