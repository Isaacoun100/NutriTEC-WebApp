import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdminService } from 'src/app/controler/Admin/loginAdmin/login-admin.service';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  constructor( 
    private router : Router,
    private api : LoginAdminService ) {}
  
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
    
    this.api.loginAdmin(form).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;
      
      if (JSON.parse(JSON.stringify(dataResponse.status)) == 'ok') {
        console.log(dataResponse.status);
        sessionStorage.setItem('admin', JSON.stringify(data.result));
        console.log(data);
        this.router.navigate(['/pay-report']);
      } 
      else {
        console.log(dataResponse.status);
        alert('Usuario o contraseña incorrecto');
        console.log(data);
      }
    });
    
  }

}
