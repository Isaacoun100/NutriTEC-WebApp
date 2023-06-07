import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DailyIntakeService } from 'src/app/controler/Client/dailyIntake/daily-intake.service';
import { ManageDishService } from 'src/app/controler/Shared/manageDish/manage-dish.service';
import { DishItemI, NewProductI } from 'src/app/model/Admin/approve-product';
import { AddDailyI } from 'src/app/model/Client/add-daily';
import { mealTimes } from 'src/app/setValues';

@Component({
  selector: 'app-daily-intake',
  templateUrl: './daily-intake.component.html',
  styleUrls: ['./daily-intake.component.scss']
})
export class DailyIntakeComponent {
  
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
     * @description Constructor that injects the API's we are going to use.
     */
    constructor( private apiDish : ManageDishService,
      private apiIntake : DailyIntakeService){
        this.dailyIntakeForm.controls['client_id'].setValue(
          JSON.parse(String(sessionStorage.getItem('client'))).email
        );
      }
      
    /**
     * @description This is the form we use to store to search for a product.
     */
    searchForm = new FormGroup({
      product : new FormControl('', Validators.required)
     });

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


  /**
   * @description This is the form we use to store the size of the product.
   */
  sizeForm = new FormGroup({
    sizeInput : new FormControl(0, Validators.required)
  });

  /**
   * @description Using this method we will search for a product using the API.
   */
  searchProduct(form : NewProductI) {
    this.apiDish.searchDish(form).subscribe(data => {
      this.products = data.result;
    });
  }

  /**
   * @description Using this method we will add a new formGroup to the plans list, this is to later insert the list into the form array
   */
  addIntake( form : AddDailyI) {

    console.log(this.plans)

    console.log(form);

    this.apiIntake.addDailyIntake(form).subscribe(data => {
      alert('Daily intake added successfully');
    });
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
      this.dailyIntakeForm.controls['consumption'].controls.at(0)?.controls['food_time'].setValue(meal_type.value);

      console.log('I should only appear once')

    }
    else{

      const insertPlan = new FormGroup({
        size : new FormControl(0, Validators.required),
        product : new FormControl('', Validators.required),
        food_time : new FormControl('', Validators.required)
      });

      insertPlan.controls['size'].setValue(Number(size));
      insertPlan.controls['product'].setValue( this.products[this.currentProduct].product_name );
      insertPlan.controls['food_time'].setValue( meal_type.value );

      this.dailyIntakeForm.controls['consumption'].push(insertPlan);

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

    console.log(this.dailyIntakeForm.getRawValue());

  }

  /**
   * @description Using this method we will remove a formGroup from the plans list, this is to later insert the list into the form array
   */
  setCurrentProduct( index : number) {
    console.log("Current product: ");
    console.log(index);
    this.currentProduct = index;
  }

}
