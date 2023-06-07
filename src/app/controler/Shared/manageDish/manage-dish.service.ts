import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { NewProductI, ProductI } from 'src/app/model/Admin/approve-product';
import { DishI } from 'src/app/model/Nutritionist/add-dish';
import { ResponseTemplateI, ResponseTemplateListProductI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class ManageDishService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the seatchDish method
   */
  private handleErrorDish(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, could not add dish.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  /**
   * @description Error handler for the addProduct method
   */
  private handleErrorProduct(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, no products where found.') ;
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
  addDish(form : DishI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'add_dish';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorDish)
      );
  }

  /**
   * @description Method in charge of adding a product to the database using the following link
   * @link BD_URL + 'search_dish'
   */
  searchDish(form : NewProductI): Observable<ResponseTemplateListProductI>{
    let direccion = this.BD_URL + 'search_dish ';
    return this.http.post<ResponseTemplateListProductI>(direccion, form).pipe(
      catchError(this.handleErrorProduct)
      );
  }

}
