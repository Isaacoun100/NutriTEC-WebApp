import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutri-hub',
  templateUrl: './nutri-hub.component.html',
  styleUrls: ['./nutri-hub.component.scss']
})
export class NutriHubComponent implements OnInit {

  nutri = "{}";

  /**
   * @description Fills the JSON Nutri with the user data
   */
  ngOnInit(): void { 
      this.nutri = String(sessionStorage.getItem('nutri'));
  }

  /**
   * @description This method is used to get the nutritionist data
   */
  getNutri(){
    return JSON.parse(this.nutri);
  }


}
