import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-nutri',
  templateUrl: './login-nutri.component.html',
  styleUrls: ['./login-nutri.component.scss']
})
export class LoginNutriComponent {

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
    nutriForm = new FormGroup({
      email: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
    });

    constructor( private router : Router ) { }

  
    /**
     * @description This method is used to login the admin
     * @param form 
     */
    nutriLogin(form : any){
      console.log(form);
      this.router.navigate(['/nutri-hub']);
    }

}
