import { Component, OnInit } from '@angular/core';
import { ApproveProductsService } from 'src/app/controler/Admin/approveProducts/approve-products.service';
import { ProductI, UnnaprovedProductsI } from 'src/app/model/Admin/approve-product';

@Component({
  selector: 'app-approved-products',
  templateUrl: './approved-products.component.html',
  styleUrls: ['./approved-products.component.scss']
})
export class ApprovedProductsComponent implements OnInit {

  currentProduct = 0;

  unnaprovedProducts : UnnaprovedProductsI[] = [];

  constructor( private api: ApproveProductsService ) {}

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

  setCurrentProduct(index : number){
    this.currentProduct = index;
    console.log(this.currentProduct);
  }

  ngOnInit(): void {
    this.updateProducts();
  }

  updateProducts(){
    this.api.getUnnaprovedProducts().subscribe((data) => {
      console.log(data);
      this.unnaprovedProducts = data.result;
    });
  }

}
