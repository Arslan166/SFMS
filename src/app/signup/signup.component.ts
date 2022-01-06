import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[''],
      mobile:[''],
      email:[''],
      password:[''],

    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("Form Signup Successfully ");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}
