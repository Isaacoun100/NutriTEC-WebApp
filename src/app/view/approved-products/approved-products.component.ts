import { Component, OnInit } from '@angular/core';
import { ApproveProductsService } from 'src/app/controler/Admin/approveProducts/approve-products.service';
import { UnnaprovedProductsI } from 'src/app/model/Admin/approve-product';

@Component({
  selector: 'app-approved-products',
  templateUrl: './approved-products.component.html',
  styleUrls: ['./approved-products.component.scss']
})
export class ApprovedProductsComponent implements OnInit {

  currentProduct = 0;

  unnaprovedProducts : UnnaprovedProductsI[] = [];

  /**
   * @description constructor for ApprovedProductsComponent
   */
  constructor( private api: ApproveProductsService ) {}

  /**
   * @description function to delete product
   */
  deleteProduct(){

    console.log( "Deleting "+ this.unnaprovedProducts[this.currentProduct].name + "..." )
    
    const product = { 
      product_name: this.unnaprovedProducts[this.currentProduct].name
    }

    console.log(product);

    this.api.deleteProduct(product).subscribe((data) => {
      console.log(data);
      alert('Product deleted successfully');
    });

    this.updateProducts();
    
  }

  /**
   * @description function to approve product
   */
  approveProduct(){
    console.log( "Approving "+ this.unnaprovedProducts[this.currentProduct].name + "..." );

    const product = { 
      product_name: this.unnaprovedProducts[this.currentProduct].name
    }

    this.api.approveProduct(product).subscribe((data) => {
      console.log(data);
      alert('Product approved successfully');
    });

    this.updateProducts();

  }

  /**
   * @description function to set current product
   */
  setCurrentProduct(index : number){
    this.currentProduct = index;
    console.log(this.currentProduct);
  }

  /**
   * @description function to get current product
   */
  ngOnInit(): void {
    this.updateProducts();
  }

  /**
   * @description function to update products
   */
  updateProducts(){
    this.api.getUnnaprovedProducts().subscribe((data) => {
      console.log(data);
      this.unnaprovedProducts = data.result;
    });
  }

}
