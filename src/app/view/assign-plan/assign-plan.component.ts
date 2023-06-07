import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignPlanService } from 'src/app/controler/Nutritionist/assignPlan/assign-plan.service';
import { NutriClientsI, PlansI, GetNutriClientsI } from 'src/app/model/Nutritionist/get-nutri';

@Component({
  selector: 'app-assign-plan',
  templateUrl: './assign-plan.component.html',
  styleUrls: ['./assign-plan.component.scss']
})
export class AssignPlanComponent implements OnInit{

  patients : NutriClientsI[] = [];
  plans : PlansI[] = [];

  /**
   * @description constructor for AssignPlanComponent
   */
  assignForm = new FormGroup({
    email_client : new FormControl('', Validators.required),
    plan_name : new FormControl('', Validators.required),
    start_date : new FormControl('', Validators.required),
    end_date : new FormControl('', Validators.required)
  });

  /**
   * @description constructor for AssignPlanComponent
   */
  constructor( private api : AssignPlanService ){}

  /**
   * @description function to assign plan
   */
  assignPlan(form : any) {
    
    console.log(form);

    this.api.assignPlan(form).subscribe((data) => {
      alert('Plan assigned successfully');
    });
    
  }

  /**
   * @description function to update patients and plans
   */
  ngOnInit(): void {

    const nutritionist : GetNutriClientsI = {'nutritionist_id': JSON.parse(String(sessionStorage.getItem('nutri')))['nutri_code']};

    this.api.getNutriClients(nutritionist).subscribe((data) => {
      this.patients = data.result;
    });

    this.api.getNutriPlans(nutritionist).subscribe((data) => {
      this.plans = data.result;
    });

  }

}
