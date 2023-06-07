import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { AssociateClientI } from 'src/app/model/Nutritionist/associate-client';
import { SearchClientI } from 'src/app/model/Nutritionist/search-client';
import { ResponseTemplateI, ResponseTemplateListClientI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class PatientSearchService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the searchClient and assignClient methods
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not find patient.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  /**
   * @description Method to search a client in the application using the following link
   * @link BD_ULR + search_patient
   */
  searchClient(form : SearchClientI): Observable<ResponseTemplateListClientI>{
    let direccion = this.BD_URL + 'search_patient';
    return this.http.post<ResponseTemplateListClientI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }


  /**
   * @description Method to assign a client to a nutritionist in the application using the following link
   * @link BD_ULR + associate_client
   */
  assignClient(form : AssociateClientI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'associate_client';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
