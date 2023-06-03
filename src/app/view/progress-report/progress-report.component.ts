import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { clientReports } from 'src/app/setValues';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss']
})
export class ProgressReportComponent {

  clientReports = clientReports;

  progressForm = new FormGroup({
    client_id : new FormControl('', Validators.required),
    start_date : new FormControl('', Validators.required),
    end_date : new FormControl('', Validators.required)
  });

  getProgress(form : any) {
    console.log(form);
  }

}
