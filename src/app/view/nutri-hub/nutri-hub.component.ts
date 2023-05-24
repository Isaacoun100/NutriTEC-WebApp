import { nutri } from 'src/app/setValues';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nutri-hub',
  templateUrl: './nutri-hub.component.html',
  styleUrls: ['./nutri-hub.component.scss']
})
export class NutriHubComponent {

  nutri = nutri;

}
