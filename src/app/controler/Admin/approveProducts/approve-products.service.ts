import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductI } from 'src/app/model/Admin/approve-product';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})

export class ApproveProductsService {

  BD_URL = BD_URL;
  
  constructor(private http: HttpClient) {}
  
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


  getUnnaprovedProducts(): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'get_unapproved_products';
    return this.http.get<ResponseTemplateI>(direccion).pipe(
      catchError(this.handleErrorProducts)
      );
  }

  approveProduct(form : ProductI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'approve_product ';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorManage)
      );
  }

  deleteProduct(form : ProductI): Observable<ResponseTemplateI>{
    let direccion = this.BD_URL + 'approve_product ';
    return this.http.post<ResponseTemplateI>(direccion, form).pipe(
      catchError(this.handleErrorManage)
      );
  }
  
}
