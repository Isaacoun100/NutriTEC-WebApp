import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { LoginNutriI } from 'src/app/model/Nutritionist/login-nutri';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class LoginNutriService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}

  /**
   * @description Error handling for the loginNutri method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, the email or password is incorrect.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Method to login a nutritionist in the application using the following link
   * @link BD_ULR + auth_nutritionist
   */
  loginNutri(form : LoginNutriI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'auth_nutritionist';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
