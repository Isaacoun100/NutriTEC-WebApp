import { FeedbackI } from 'src/app/model/Nutritionist/add-feedback';
import { Mongo_URL, BD_URL } from './../../../setValues';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { LoadPlanI } from 'src/app/model/Client/load-plan';

@Injectable({
  providedIn: 'root'
})
export class ClientHubService {

  Mongo_URL = Mongo_URL;
  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  private handleErrorComments(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not load comments.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private handleErrorPlan(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not load plans.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  loadComments(form : FeedbackI): Observable<ResponseTemplateI>{
    let direccion = this.Mongo_URL + 'get_feedback';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorComments)
      );
  }

  loadPlan(form : LoadPlanI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'load_plan';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorPlan)
      );
  }

}
