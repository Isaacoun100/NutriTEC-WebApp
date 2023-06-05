import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutri-hub',
  templateUrl: './nutri-hub.component.html',
  styleUrls: ['./nutri-hub.component.scss']
})
export class NutriHubComponent implements OnInit {

  nutri = "{}";
  
  constructor() { }

  ngOnInit(): void { 
      this.nutri = String(sessionStorage.getItem('nutri'));
  }

  getNutri(){
    return JSON.parse(this.nutri);
  }


}
