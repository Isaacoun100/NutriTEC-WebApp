import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { products } from 'src/app/setValues';

@Component({
  selector: 'app-manage-dish',
  templateUrl: './manage-dish.component.html',
  styleUrls: ['./manage-dish.component.scss']
})
export class ManageDishComponent {

  currentProduct = 0;

  products = products;

  ingredients = [
    new FormGroup({
      barcode : new FormControl('', Validators.required),
      size : new FormControl(0, Validators.required),
      product : new FormControl('', Validators.required)
  })];

  searchForm = new FormGroup({
    product : new FormControl('', Validators.required)
  });

  newDish = new FormGroup({
    dish_name : new FormControl('', Validators.required),
    ingredients : new FormArray([
      new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required)
      })
    ])
  });

  sizeForm = new FormGroup({
    sizeInput : new FormControl(0, Validators.required)
  });

  searchProduct( form : any) {
    console.log(this.searchForm.value);
  }

  addDish( form : any) {
    console.log(this.newDish.value);
  }

  addProduct(size : any){
    console.log(Number(size));

    if(this.newDish.controls['ingredients'].controls.at(0)?.controls['size'].value == 0){

      console.log("Empty");

      this.ingredients[0].controls['size'].setValue(Number(size));
      this.ingredients[0].controls['product'].setValue( this.products[this.currentProduct].product_name );
      this.ingredients[0].controls['barcode'].setValue( this.products[this.currentProduct].barcode );

      this.newDish.controls['ingredients'].at(0).controls['size'].setValue(Number(size));
      this.newDish.controls['ingredients'].at(0).controls['product'].setValue( this.products[this.currentProduct].product_name );
    
    }
    else{

      const insertPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required)
      });

      insertPlan.controls['size'].setValue(Number(size));
      insertPlan.controls['product'].setValue( this.products[this.currentProduct].product_name );

      this.newDish.controls['ingredients'].push(insertPlan);

      const listPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        barcode : new FormControl('', Validators.required)
      });

      listPlan.controls['size'].setValue(Number(size));
      listPlan.controls['product'].setValue( this.products[this.currentProduct].product_name );
      listPlan.controls['barcode'].setValue( this.products[this.currentProduct].barcode );

      this.ingredients.push(listPlan);

    }

    this.sizeForm.controls['sizeInput'].setValue(0);

    console.log(this.newDish.getRawValue());

  }


  setCurrentProduct( index : number) {
    console.log("Current product: ");
    console.log(index);
    this.currentProduct = index;
  }

}
