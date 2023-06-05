import { Component, ViewChild, ElementRef  } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePlanService } from 'src/app/controler/Nutritionist/createPlan/create-plan.service';
import { ManageDishService } from 'src/app/controler/Shared/manageDish/manage-dish.service';
import { DishItemI, NewProductI } from 'src/app/model/Admin/approve-product';
import { GetDailyI, PlanI } from 'src/app/model/Nutritionist/create-plan';
import { mealTimes, products } from 'src/app/setValues';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent {

  currentProduct = 0;
  mealTimes = mealTimes;
  products : DishItemI[] = [];

  plans = [
    new FormGroup({
      barcode : new FormControl(0, Validators.required),
      size : new FormControl(0, Validators.required),
      product : new FormControl('', Validators.required)
    })];
    
    /**
     * @description This is the form we use to store to search for a product.
     * @version 1.0
    */
   searchForm = new FormGroup({
     product : new FormControl('', Validators.required)
    });
    
  // The meal_time should be individual for each dish
  newPlan = new FormGroup({
    plan_name : new FormControl('', Validators.required),
    nutritionist_id : new FormControl('', Validators.required),
    plan : new FormArray([
      new FormGroup({
        meal_time : new FormControl('', Validators.required),
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required)
      })
    ])
  });

  sizeForm = new FormGroup({
    sizeInput : new FormControl(0, Validators.required)
  });

  constructor( private apiPlan : CreatePlanService,
    private apiDish : ManageDishService){
      this.newPlan.controls['nutritionist_id'].setValue(
        JSON.parse(String(sessionStorage.getItem('nutri'))).nutri_code
        );
    }

  searchProduct(form : NewProductI) {
    this.apiDish.searchDish(form).subscribe(data => {
      this.products = data.result;
    });
  }

  addPlan( form : GetDailyI) {

    console.log(form);
    
    this.apiPlan.createPlan(form).subscribe(data => {
      alert('Dish added successfully');
      });
  }

  addProduct(size : any, meal_type : any){

    console.log(Number(size));

    if(this.newPlan.controls['plan'].controls.at(0)?.controls['size'].value == 0){

      console.log("Empty");

      this.plans[0].controls['size'].setValue(Number(size));
      this.plans[0].controls['product'].setValue( this.products[this.currentProduct].product_name );
      this.plans[0].controls['barcode'].setValue( this.products[this.currentProduct].barcode );

      this.newPlan.controls['plan'].at(0).controls['size'].setValue(Number(size));
      this.newPlan.controls['plan'].at(0).controls['product'].setValue( this.products[this.currentProduct].product_name );
      this.newPlan.controls['plan'].at(0).controls['meal_time'].setValue( meal_type.value );
      
    
    }
    else{

      const insertPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        meal_time : new FormControl('', Validators.required)
      });

      insertPlan.controls['size'].setValue(Number(size));
      insertPlan.controls['product'].setValue( this.products[this.currentProduct].product_name );
      insertPlan.controls['meal_time'].setValue( meal_type.value );

      this.newPlan.controls['plan'].push(insertPlan);

      const listPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        barcode : new FormControl(0, Validators.required)
      });

      listPlan.controls['size'].setValue(Number(size));
      listPlan.controls['product'].setValue( this.products[this.currentProduct].product_name );
      listPlan.controls['barcode'].setValue( this.products[this.currentProduct].barcode );

      this.plans.push(listPlan);

    }

    this.sizeForm.controls['sizeInput'].setValue(0);

    console.log(this.newPlan.getRawValue());

  }


  setCurrentProduct( index : number) {
    console.log("Current product: ");
    console.log(index);
    this.currentProduct = index;
  }

}
