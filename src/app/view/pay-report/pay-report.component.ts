import { Component, OnInit } from '@angular/core';
import { PayReportService } from 'src/app/controler/Admin/payReport/pay-report.service';
import { PaymentI } from 'src/app/model/Admin/approve-product';

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
