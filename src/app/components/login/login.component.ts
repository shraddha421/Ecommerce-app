import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormBuilder().group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  get form() { return this.loginForm.controls; }

  public onSubmit():void{
    //Check if login form is valid
    if(!this.loginForm.valid){
      return;
    }else{
      //Redirect to prodcts page  
      this.router.navigate(['/products']);      
    }
  }
} 
