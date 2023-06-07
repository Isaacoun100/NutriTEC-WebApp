import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { ResponseTemplateListReportI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class PayReportService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the generateAdmonReport method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('No payment reports') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Sends a GET request to the server to get the payment reports using the link
   * @link BD_ULR + generate_admin_report
   */
  generateAdminReport(): Observable<ResponseTemplateListReportI>{
    let direccion = this.BD_URL + 'generate_admin_report';
    return this.http.get<ResponseTemplateListReportI>(direccion).pipe(
      catchError(this.handleError)
      );
  }
  
}
