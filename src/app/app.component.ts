import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SFMS';
  filterTerm!: string;
  userRecords = [
    {
      "id": 2,
      "firstName": "Qadeer",
      "lastName": "Kamboh",
      "email": "Qadeer420@gmail.com",
      "mobile": "01234568789",
      "fees": "32000/-"
    },
    {
      "id": 3,
      "firstName": "Qadeer",
      "lastName": "Kamboh",
      "email": "Qadeer12@gmail.com",
      "mobile": "0123456789",
      "fees": "32000/-"
    },
    {
      "id": 4,
      "firstName": "Ali",
      "lastName": "Raza",
      "email": "ali22@gmail.com",
      "mobile": "09966666666",
      "fees": "10000"
    },
    {
      "id": 5,
      "firstName": "Aslam",
      "lastName": "Abdulsattar",
      "email": "aslam00@gmail.com",
      "mobile": "0333-9876453",
      "fees": "100000"
    },
    {
      "id": 6,
      "firstName": "Hassan",
      "lastName": "Mustafa",
      "email": "hassan24@gmail.com",
      "mobile": "98790654",
      "fees": "10000"
    }
  ]

  public ngOnInit(){
    $(document).ready(function(){
      
    });

  }
}
