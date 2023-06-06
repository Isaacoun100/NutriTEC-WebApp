import { FeedbackI } from 'src/app/model/Nutritionist/add-feedback';
import { Mongo_URL, BD_URL } from './../../../setValues';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { ResponseTemplateI, ResponseTemplateListDailyI } from 'src/app/model/responseTemplate';
import { DailyPlanI, LoadPlanI } from 'src/app/model/Client/load-plan';
import { CommentI } from 'src/app/model/Client/load-comments';

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

  loadComments(form : LoadPlanI): Observable<CommentI[]>{
    let direccion = this.Mongo_URL + 'get_feedback';
    console.log(form)
    return this.http.post<CommentI[]>(direccion, form).pipe(
      catchError(this.handleErrorComments)
      );
  }

  loadPlan(form : DailyPlanI): Observable<ResponseTemplateListDailyI>{
    let direccion = this.BD_URL + 'get_client_plan';
    return this.http.post<ResponseTemplateListDailyI>(direccion, form).pipe(
      catchError(this.handleErrorPlan)
      );
  }

}
