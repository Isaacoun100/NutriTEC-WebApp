import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BD_URL } from './../../../setValues';
import { Injectable } from '@angular/core';
import { AddProductI } from 'src/app/model/Nutritionist/add-product';
import { throwError, Observable, catchError } from 'rxjs';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the addProduct method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not add product.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Method in charge of adding a product to the database using the following link
   * @link BD_URL + 'add_product'
   */
  addProduct(form : AddProductI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'add_product';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleError)
      );
  }

}
