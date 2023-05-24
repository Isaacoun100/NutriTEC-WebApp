import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  
  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  adminForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  /**
   * @description This method is used to login the admin
   * @param form 
   */
  adminLogin(form : any){
    console.log(form);
  }

}
