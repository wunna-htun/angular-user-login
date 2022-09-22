import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data:any;

  constructor(private router:Router,private fb: FormBuilder,private userService:UsersService) { 
    this.loginForm = this.fb.group({
   
      email: ['',Validators.email],
      password:['']
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    })
  }

  onLogin(){
    console.log("login")
    console.log("login",this.loginForm.value)

    this.userService.login(this.loginForm.value).subscribe(res=>{

      console.log("login",res);

       this.data=res;

      localStorage.setItem('token',this.data.accessToken);
      this.router.navigate(['/', 'dashboard']);
      

    })
    
    // this.router.navigate(['/', 'dashboard']);

  }



}
