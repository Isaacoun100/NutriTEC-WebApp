import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductI } from 'src/app/model/Admin/approve-product';
import { ResponseTemplateI, ResponseTemplateListUnnaprovedI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})

export class ApproveProductsService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
  /**
   * @description Error handler for the getUnnaprovedProducts and approveProduct methods
   */
  private handleErrorProducts(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('No products to approve') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Error handler for the deleteProduct method
   */
  private handleErrorManage(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('No products to approve') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  /**
   * @description This method requests all of the unapproved products from the API using the following link
   * @link BD_ULR + get_unapproved_products
   */
  getUnnaprovedProducts(): Observable<ResponseTemplateListUnnaprovedI>{
    let direccion = this.BD_URL + 'get_unapproved_products';
    return this.http.get<ResponseTemplateListUnnaprovedI>(direccion).pipe(
      catchError(this.handleErrorProducts)
      );
  }

  /**
   * @description this method sends a product to the API to be approved using the following link
   * @link BD_ULR + approve_product
   */
  approveProduct(form : ProductI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'approve_product ';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorManage)
      );
  }

  /**
   * @description this method sends a product to the API to be deleted using the following link
   * @link BD_ULR + delete_product
   */
  deleteProduct(form : ProductI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'delete_product';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorManage)
      );
  }
  
}
