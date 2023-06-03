import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { mealTimes, products } from 'src/app/setValues';

@Component({
  selector: 'app-daily-intake',
  templateUrl: './daily-intake.component.html',
  styleUrls: ['./daily-intake.component.scss']
})
export class DailyIntakeComponent {
  
  currentProduct = 0;
  mealTimes = mealTimes;
  products = products;
  
  plans = [
    new FormGroup({
      barcode : new FormControl('', Validators.required),
      size : new FormControl(0, Validators.required),
      product : new FormControl('', Validators.required)
    })];

  /**
   * @description This is the form we use to store to capture the user input for the daily intake.
   * @version 1.0
   */
  dailyIntakeForm = new FormGroup({
    client_id : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    consumption : new FormArray([
      new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        food_time : new FormControl('', Validators.required)
      })
    ])
  });

  searchForm = new FormGroup({
    product : new FormControl('', Validators.required)
   });

  sizeForm = new FormGroup({
    sizeInput : new FormControl(0, Validators.required)
  });

  searchProduct( form : any) {
    console.log(this.dailyIntakeForm.value);
  }

  addIntake( form : any) {
    console.log(this.dailyIntakeForm.value);
  }

  /**
   * @description Using this method we will add a new formGroup to the plans list, this is to later insert the list into the form array 
   */
  addProduct(size : any, meal_type : any){
    
    console.log(Number(size));

    if(this.dailyIntakeForm.controls['consumption'].controls.at(0)?.controls['size'].value == 0){

      console.log("Empty");

      // Here we add to the empty array
      this.plans[0].controls['size'].setValue(Number(size));
      this.plans[0].controls['product'].setValue(this.products[this.currentProduct].product_name);
      this.plans[0].controls['barcode'].setValue(this.products[this.currentProduct].barcode);

      this.dailyIntakeForm.controls['consumption'].controls.at(0)?.controls['size'].setValue(Number(size));
      this.dailyIntakeForm.controls['consumption'].controls.at(0)?.controls['product'].setValue(this.products[this.currentProduct].product_name);
      this.dailyIntakeForm.controls['consumption'].controls.at(0)?.controls['food_time'].setValue(meal_type);

    }
    else{

      const newPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        barcode : new FormControl('', Validators.required)
      });

      newPlan.controls['size'].setValue(Number(size));
      newPlan.controls['product'].setValue(this.products[this.currentProduct].product_name);
      newPlan.controls['barcode'].setValue(this.products[this.currentProduct].barcode);

      this.plans.push(newPlan);

    }

    this.sizeForm.controls['sizeInput'].setValue(0);

    console.log(this.dailyIntakeForm.getRawValue());

  }

  setCurrentProduct( index : number) {
    console.log("Current product: ");
    console.log(index);
    this.currentProduct = index;
  }

}
