import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patients, plans } from 'src/app/setValues';

@Component({
  selector: 'app-assign-plan',
  templateUrl: './assign-plan.component.html',
  styleUrls: ['./assign-plan.component.scss']
})
export class AssignPlanComponent {

  patients = patients;
  plans = plans;

  assignForm = new FormGroup({
    patient : new FormControl('', Validators.required),
    plan : new FormControl('', Validators.required),
    startDate : new FormControl('', Validators.required),
    endDate : new FormControl('', Validators.required)
  });

  assignPlan(form : any) {
    console.log(form);
  }

}
