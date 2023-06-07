import { BD_URL } from './../../../setValues';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginAdminI } from 'src/app/model/Admin/login-admin';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {
  
  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the loginAdmin method
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
   * @description Sends a POST request to the server to login an admin using the link
   * @link BD_ULR + auth_admin
   */
  loginAdmin(form : LoginAdminI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'auth_admin';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
