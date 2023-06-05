import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { vitamins } from './../../setValues';
import { Component } from '@angular/core';
import { AddProductService } from 'src/app/controler/Shared/addProduct/add-product.service';
import { AddProductI } from 'src/app/model/Nutritionist/add-product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor( private api : AddProductService ) { }

  vitamins = vitamins;
  parentSelector: boolean = false;

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    size: new FormControl(0, Validators.required),
    calories: new FormControl(0, Validators.required),
    fat: new FormControl(0, Validators.required),
    sodium: new FormControl(0, Validators.required),
    carbs: new FormControl(0, Validators.required),
    protein: new FormControl(0, Validators.required),
    calcium: new FormControl(0, Validators.required),
    iron: new FormControl(0, Validators.required),
    vitamins : new FormArray([
      new FormControl('', Validators.required)
    ])
  });

  addVitamins(){

    this.productForm.controls['vitamins'].clear();
    
    for (let index = 0; index < vitamins.length; index++){
      
      if (vitamins[index].select == true){
        this.productForm.controls['vitamins'].push( new FormControl(vitamins[index].vitamin, Validators.required) );
      }
      
    }

  }

  addProduct (form : AddProductI) {

    console.log(form);

    this.api.addProduct(form).subscribe((data) => {
      alert('Product added successfully');
    });
    
    }

  onChangeFood($event: any) {
    const vitamin = $event.target.value;
    const isChecked = $event.target.checked;

    this.vitamins = this.vitamins.map((d) => {
      if (d.vitamin == vitamin) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      return d;
    });
    console.log(this.vitamins);
  }
    
}
