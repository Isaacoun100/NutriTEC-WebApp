import { Mongo_URL } from './../../../setValues';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { FeedbackI } from 'src/app/model/Nutritionist/add-feedback';
import { GetDailyI } from 'src/app/model/Nutritionist/follow-up';
import { ResponseTemplateI, ResponseTemplateListDailyI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  BD_URL = BD_URL;
  Mongo_URL = Mongo_URL;
  
  constructor(private http: HttpClient) {}
  
  private handleErrorFollowUp(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not load patient information.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  loadPatientInfo(form : GetDailyI): Observable<ResponseTemplateListDailyI>{
    let direccion = this.BD_URL + 'patient_follow_up';
    return this.http.post<ResponseTemplateListDailyI>(direccion, form).pipe(
      catchError(this.handleErrorFollowUp)
      );
  }

  leaveComment(form : FeedbackI): Observable<ResponseTemplateI>{
    let direccion = this.Mongo_URL + 'add_feedback';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorFollowUp)
      );
  }

}
