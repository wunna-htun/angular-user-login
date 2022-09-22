import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userlist :any;
  
  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit() {
    console.log("task list");
    this.usersService.getuserlist().subscribe(res=>{
      console.log(res);
      this.userlist=res
      
    })
    console.log();
    
  }

  onLogin(){
    console.log("login")
  }


  getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
  }

  determineErroMessage(formControlName: string, validatorName: string): string {
    switch(formControlName) {
      case 'email': return 'You must enter a valid email'
      default: return 'You must enter a value'
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/', 'login']);


  }

  onDelete(id:string){
    console.log("delete");
    

    this.usersService.deleteUser(id).subscribe(res=>{
      console.log("delete",res);
      
    })



  }



}
