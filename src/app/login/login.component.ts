import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  validUsername = 'abcadmin01';
  validPassword = 'nimda5678#';
  successMessage = 'Login Successful!';
  failedMessage = 'Login Failed! Invalid username/password.';
  url = '/student-app';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clearInputs(){

  }

  validateLogin(username: string, password: string){
    if (this.validUsername === username && this.validPassword === password) {
      alert(this.successMessage);
      this.router.navigateByUrl(this.url);
    }
    else {
      alert(this.failedMessage);
    }
  }
}
