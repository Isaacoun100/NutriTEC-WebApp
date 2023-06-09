import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { GetDailyI } from 'src/app/model/Nutritionist/create-plan';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class CreatePlanService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}

  /**
   * @description This function handles the error messages for the createPlan method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not create plan.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description This method creates a plan for a patient and returns a response template using the following link
   * @link https://nutritecapifeedback.azurewebsites.net/api/create_plan
   */
  createPlan(form : GetDailyI ): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'create_plan';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
