import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { vitamins } from './../../setValues';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

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

  addProduct (form : any) {

    this.productForm.controls['vitamins'].clear();

    console.log(this.productForm.controls['vitamins']);
    
    for (let index = 0; index < vitamins.length; index++){
      
      if (vitamins[index].select == true){
        this.productForm.controls['vitamins'].push( new FormControl(vitamins[index].vitamin, Validators.required) );
      }

    }

    console.log(this.productForm.getRawValue());

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
