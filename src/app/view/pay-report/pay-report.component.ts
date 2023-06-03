import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { payReports } from 'src/app/setValues';

@Component({
  selector: 'app-pay-report',
  templateUrl: './pay-report.component.html',
  styleUrls: ['./pay-report.component.scss']
})
export class PayReportComponent {

  payReports = payReports;

  exportPDF(form : any) {
    console.log(form);
  }



}
