import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../core/users.service';
import { User } from '../model/user';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {



  name='';
  email='';
  password='';
  
  registerForm: FormGroup;


  constructor(private fb: FormBuilder,private userService:UsersService,private router:Router) { 


    this.registerForm = this.fb.group({
      name: [''],
      email: ['',Validators.email],
      password:['']
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      

    })
  }

  getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
  }


  onRegister(){

    console.log("form data",this.registerForm)
    console.log("form data",this.registerForm.value)
    if(!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }else{
      this.userService.register(this.registerForm.value).subscribe(res=>{
        console.log("register",res);
        this.router.navigate(['/', 'login']);
        
      })
    }
    console.log('Passed validation and submitted')



  }




   determineErroMessage(formControlName: string, validatorName: string): string {
    switch(formControlName) {
      case 'email': return 'You must enter a valid email'
      default: return 'You must enter a value'
    }
  }

}
