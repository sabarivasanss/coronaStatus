import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: CommonserviceService, private route: Router){
    
  }
  username: String = "";
  password: String = "";
  flag: Boolean = false;
  loginFailed = false;
  


  ngOnInit() {

  }
  
  onSubmit(name,password) {
      if(this.service.checkLogin(this.username, this.password) && !this.service.loggedIn) {
        this.service.loggedIn = true;
        this.route.navigate(['/dashboard']);
      } else {
        this.loginFailed = true;
        this.route.navigate(['']);
      }    
    
  }
}
