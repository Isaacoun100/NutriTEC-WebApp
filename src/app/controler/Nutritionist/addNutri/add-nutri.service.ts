import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { CreateNutriI } from 'src/app/model/Nutritionist/create-nutri';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class AddNutriService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}

  /**
   * @description This function handles the error messages for the addNutri method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not add nutritionist.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description This function sends a request to the API to add a nutritionist using the following link
   * @link https://nutritecapifeedback.azurewebsites.net/api/add_nutritionist
   */
  AddNutri(form : CreateNutriI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'add_nutritionist';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
