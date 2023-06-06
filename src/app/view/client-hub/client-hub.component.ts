import { Component } from '@angular/core';
import { ClientHubService } from 'src/app/controler/Client/clientHub/client-hub.service';
import { CommentI } from 'src/app/model/Client/load-comments';
import { DailyFoodI } from 'src/app/model/Nutritionist/follow-up';

@Component({
  selector: 'app-client-hub',
  templateUrl: './client-hub.component.html',
  styleUrls: ['./client-hub.component.scss']
})
export class ClientHubComponent {

  patientDaily : DailyFoodI[] = [];
  comments : CommentI[] = [];

  constructor( private api : ClientHubService ) {
      
    this.api.loadComments({client : this.getSessionStorage('email') }).subscribe( data => {
      console.log(data);
      this.comments = data;
    });

    this.api.loadPlan({client_id : this.getSessionStorage('email') }).subscribe( data => {
      console.log(data.result);
      this.patientDaily = data.result;
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

  getSessionStorage( key : string ) {
    return JSON.parse( sessionStorage.getItem('client') || '{}')[key];
  }

}
