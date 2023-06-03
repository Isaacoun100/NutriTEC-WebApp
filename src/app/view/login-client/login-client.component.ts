import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent {

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  clientForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor( private router : Router ) { }

  /**
   * @description This method is used to login the admin
   * @param form 
   */
  clientLogin(form : any){
    console.log(form);
    this.router.navigate(['/client-hub']);
  }

}
