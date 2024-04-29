import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    //initialize email, password and mobile number fields
    this.registrationForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
    })
  }
  onSubmit():void{
    //Check if registration form is valid
    if(!this.registrationForm.valid){
      return;
    }else{
      //Redirect to prodcts page  
      this.router.navigate(['/login']);      
    }
  }

}
