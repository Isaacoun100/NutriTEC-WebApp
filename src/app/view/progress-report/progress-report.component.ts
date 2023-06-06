import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgressReportService } from 'src/app/controler/Client/progressReport/progress-report.service';
import { GenerateReportI, ProgressReportI } from 'src/app/model/Client/report';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss']
})
export class ProgressReportComponent {

  clientReports : ProgressReportI[] = [];

  constructor( private api : ProgressReportService ) {
    this.progressForm.controls['client_id'].setValue(
      String(JSON.parse(String(sessionStorage.getItem('client'))).email)
    );
  }

  progressForm = new FormGroup({
    client_id : new FormControl('', Validators.required),
    start_date : new FormControl('', Validators.required),
    end_date : new FormControl('', Validators.required)
  });

  getProgress(form : GenerateReportI) {

    console.log(form);

    this.api.getProgressReport(form).subscribe(data => {
      this.clientReports = data.result;
    });
  }

}
