import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { AssignPlanI } from 'src/app/model/Nutritionist/assign-plan';
import { GetNutriClientsI } from 'src/app/model/Nutritionist/get-nutri';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class AssignPlanService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  private handleErrorPlans(error: HttpErrorResponse) {
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

  private handleErrorClient(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not load clients.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private handleErrorAssign(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not assign plan to that client.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getNutriPlans(form : GetNutriClientsI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'get_nutritionist_plans';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorPlans)
      );
  }

  getNutriClients(form : GetNutriClientsI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'get_nutritionist_clients';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorClient)
      );
  }

  assignPlan(form : AssignPlanI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'assign_plan';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorAssign)
      );
  }




  
}
