import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signupForm !:FormGroup;
  constructor (private formBuilder: FormBuilder, private http : HttpClient, private router:Router){}

  signupmethod(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['', [Validators.required, Validators.nullValidator,  Validators.minLength(3), Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.nullValidator,Validators.email, Validators.minLength(3), Validators.maxLength(20)]],
      password:['',[Validators.required, Validators.nullValidator, Validators.minLength(3), Validators.maxLength(20)]],
      mobile:['',[Validators.required, Validators.nullValidator, Validators.minLength(5), Validators.maxLength(10)]]
    })
    }
    signUp(){
      this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
      .subscribe(res=>{
        alert("Signup successfull");
        this.signupForm.reset();
        this.router.navigate(['login'])
      },err=>{
        alert("Something went wrong")
      })

    }

}
