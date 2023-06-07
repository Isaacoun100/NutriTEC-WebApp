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

  /**
   * @description function to generate PDF
   */
  exportPDF(form : any) {
    console.log(form);
  }

  /**
   * @description Constructor that injects the API's we are going to use.
   */
  constructor( private api : PayReportService ) { }

  /**
   * @description Fill the payReports array with the data from the API
   */
  ngOnInit(): void {
    this.api.generateAdminReport().subscribe((data) => {
      console.log(data);
      this.payReports = data.result;
    });
  }

}
