import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PayReportService } from 'src/app/controler/Admin/payReport/pay-report.service';
import { PaymentI } from 'src/app/model/Admin/approve-product';
import { payReports } from 'src/app/setValues';

@Component({
  selector: 'app-pay-report',
  templateUrl: './pay-report.component.html',
  styleUrls: ['./pay-report.component.scss']
})
export class PayReportComponent implements OnInit{

  payReports : PaymentI[] = [];

  exportPDF(form : any) {
    console.log(form);
  }

  constructor( private api : PayReportService ) { }

  ngOnInit(): void {
    this.api.generateAdminReport().subscribe((data) => {
      console.log(data);
      this.payReports = data.result;
    });
  }

}
