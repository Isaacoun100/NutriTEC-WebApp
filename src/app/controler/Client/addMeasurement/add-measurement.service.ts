import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';
import { AddMeasurementsI } from './../../../model/Client/add-measurements';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMeasurementService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the addMeasurement method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, the information provided is incorrect.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Method to add measurements to the database using the following link
   * @link BD_ULR + add_measurement
   */
  addMeasuments(form : AddMeasurementsI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'add_measurement';

    console.log(form);

    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
