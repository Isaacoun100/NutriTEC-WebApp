import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetNutriClientsI, NutriClientsI } from 'src/app/model/Nutritionist/get-nutri';
import { AssignPlanService } from 'src/app/controler/Nutritionist/assignPlan/assign-plan.service';
import { FollowUpService } from 'src/app/controler/Nutritionist/followUp/follow-up.service';
import { DailyFoodI, GetDailyI } from 'src/app/model/Nutritionist/follow-up';
import { FeedbackI } from 'src/app/model/Nutritionist/add-feedback';

@Component({
  selector: 'app-client-follow-up',
  templateUrl: './client-follow-up.component.html',
  styleUrls: ['./client-follow-up.component.scss']
})
export class ClientFollowUpComponent implements OnInit  {

  patientDaily : DailyFoodI[] = [];
  patients : NutriClientsI[] = [];
  myDate : string | null = '';

  constructor( private apiPatients : AssignPlanService,
    private apiFollowUp : FollowUpService,
    private pipe : DatePipe ){
      this.myDate = this.pipe.transform( new Date(), 'yyyy-MM-dd');
    }

  ngOnInit(): void {
    
    const nutritionist : GetNutriClientsI = {'nutritionist_id': JSON.parse(String(sessionStorage.getItem('nutri')))['nutri_code']};

    this.apiPatients.getNutriClients(nutritionist).subscribe((data) => {
      this.patients = data.result;
    });

  }

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  clientForm = new FormGroup({
    client_email: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  /**
   * @description This is the form we use to store the data the user inputs.
   * @version 1.0
   */
  commentForm = new FormGroup({
    id : new FormControl('', Validators.required),  
    client: new FormControl('', Validators.required),
    nutritionist: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to loads the consumption of set client
   * @param form 
   */
  loadClientInfo(form: GetDailyI) {

    this.apiFollowUp.loadPatientInfo(form).subscribe((data) => {
      this.patientDaily = data.result;
      console.log(data.result);
    });

  }

  getDailyFood(time : string) {

    const food : DailyFoodI[] = [];

    for (let index = 0; index < this.patientDaily.length; index++) {
      if(this.patientDaily[index].food_time == time){
        food.push(this.patientDaily[index]);
      }
    }

    return food;
  }

  /**
   * @description This method is used to loads the consumption of set client
   * @param form 
   */
  commentClient(form: FeedbackI) {

    form.date = ''+this.myDate;
    form.nutritionist = ''+JSON.parse(String(sessionStorage.getItem('nutri')))['nutri_code'];
    form.client = ''+this.clientForm.value.client_email;

    console.log(form);

    this.apiFollowUp.leaveComment(form).subscribe((data) => {
      alert('Comentario agregado con éxito');
    });

  }

}
