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

  /**
   * @description This is the form we use to store the data the user inputs.
   */
  progressForm = new FormGroup({
    client_id : new FormControl('', Validators.required),
    start_date : new FormControl('', Validators.required),
    end_date : new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to get the progress report
   */
  getProgress(form : GenerateReportI) {

    console.log(form);

    this.api.getProgressReport(form).subscribe(data => {
      this.clientReports = data.result;
    });
  }

  getPDF() : string {

    if( this.progressForm.controls['start_date'].value != '' && this.progressForm.controls['end_date'].value != '' ){
      return ('https://nutritec-api.azurewebsites.net/api/create_pdf_report/'+
      String(this.progressForm.controls['client_id'].value).replace('@','%40') + '/' +
      this.progressForm.controls['start_date'].value + '/' +
      this.progressForm.controls['end_date'].value );
    }
    else{
      return 'http://localhost:4200/progress-report';
    }
  }

}
