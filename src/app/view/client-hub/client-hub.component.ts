import { Component } from '@angular/core';
import { client, comments, patientDaily } from 'src/app/setValues';

@Component({
  selector: 'app-client-hub',
  templateUrl: './client-hub.component.html',
  styleUrls: ['./client-hub.component.scss']
})
export class ClientHubComponent {

  client = client;
  patientDaily = patientDaily;
  comments = comments;

}
