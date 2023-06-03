import { Component } from '@angular/core';
import { unnaprovedProducts } from 'src/app/setValues';

@Component({
  selector: 'app-approved-products',
  templateUrl: './approved-products.component.html',
  styleUrls: ['./approved-products.component.scss']
})
export class ApprovedProductsComponent {

  currentProduct = 0;
  
  unnaprovedProducts = unnaprovedProducts

  deleteProduct(){
    console.log( "Deleting "+ this.unnaprovedProducts[this.currentProduct].name + "..." )
  }

  approveProduct(){
    console.log( "Approving "+ this.unnaprovedProducts[this.currentProduct].name + "..." );
  }

  setCurrentProduct(index : number){
    this.currentProduct = index;
    console.log(this.currentProduct);
  }

  }
