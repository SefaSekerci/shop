import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) { 
  }

  isWrong: boolean = false;
  user: User = new User();
  loginForm: FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      inputPassword: ["", Validators.required]
    })
  };

  login(): void {
    // console.log(this.user.userName);
    // console.log(this.user.password);
    this.accountService.login(this.user);
    console.log(this.accountService.isLoggedIn());
    if (this.accountService.isLoggedIn()){
      this.isWrong = false;
      console.log('Giris Yapildi');
      this.router.navigate(['/products']);
    }else{
      this.isWrong = true;
      this.user.userName="";
      this.user.password="";
    }
  }

}
