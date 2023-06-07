import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { GenerateReportI } from 'src/app/model/Client/report';
import { ResponseTemplateListProgressI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class ProgressReportService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @desciption Error handler for the progress Report service
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, no progress could be loaded.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Sends a request to the server to get the progress report using the following link
   * @link BD_ULR + generate_report
   */
  getProgressReport(form : GenerateReportI): Observable<ResponseTemplateListProgressI>{
    let direccion = this.BD_URL + 'generate_report';
    return this.http.post<ResponseTemplateListProgressI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
