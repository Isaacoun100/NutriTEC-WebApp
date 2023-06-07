import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginNutriService } from 'src/app/controler/Nutritionist/loginNutri/login-nutri.service';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

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

    constructor( private router : Router,  
      private api : LoginNutriService ) { }

  
    /**
     * @description This method is used to login the admin
     * @param form 
     */
    nutriLogin(form : any){
      console.log(form);
      
      this.api.loginNutri(form).subscribe((data) => {
        let dataResponse: ResponseTemplateI = data;
        
        if (JSON.parse(JSON.stringify(dataResponse.status)) == 'ok') {
          console.log(dataResponse.status);
          sessionStorage.setItem('nutri', JSON.stringify(data.result));
          console.log(data);
          this.router.navigate(['/nutri-hub']);
        } 
        else {
          console.log(dataResponse.status);
          alert('Password or email incorrect');
          console.log(data);
        }
      });

    }

}
