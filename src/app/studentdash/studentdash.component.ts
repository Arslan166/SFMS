import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { StudentDashModel } from './studentdash.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.css']
})
export class StudentdashComponent implements OnInit {
  formvalue !: FormGroup;
  StudentModelObj: StudentDashModel = new StudentDashModel();
  StudentAll:any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private FormBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formvalue = this.FormBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      fees: [''],
    })
    this.getAllStudents(data);
  }

  clickAddStudent(){
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postStudentDetails(){
    this.StudentModelObj.firstName = this.formvalue.value.firstName;
    this.StudentModelObj.lastName = this.formvalue.value.lastName;
    this.StudentModelObj.email = this.formvalue.value.email;
    this.StudentModelObj.mobile = this.formvalue.value.mobile;
    this.StudentModelObj.fees = this.formvalue.value.fees;

    this.api.postStudent(this.StudentModelObj).subscribe(res=>{
      console.log(res);
      alert("StudentAdedd Successfully!");
      this.formvalue.reset();
    })
  }

  getAllStudents(data:any){
    this.api.getStudent(data).subscribe(res=>{
      this.StudentAll = res;
    })
  }

  deleteStudents(data:any){
    this.api.deleteStudent(data.id).subscribe(res=>{
      console.log(res);
    })
  }

  onEdit(data:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.StudentModelObj.id=data.id;
    this.formvalue.controls['firstName'].setValue(data.firstName);
    this.formvalue.controls['lastName'].setValue(data.lastName);
    this.formvalue.controls['email'].setValue(data.email);
    this.formvalue.controls['mobile'].setValue(data.mobile);
    this.formvalue.controls['fees'].setValue(data.fees);
  }
  putStudentDetails(){
    this.StudentModelObj.firstName = this.formvalue.value.firstName;
    this.StudentModelObj.lastName = this.formvalue.value.lastName;
    this.StudentModelObj.email = this.formvalue.value.email;
    this.StudentModelObj.mobile = this.formvalue.value.mobile;
    this.StudentModelObj.fees = this.formvalue.value.fees;

    this.api.updateStudent(this.StudentModelObj, this.StudentModelObj.id).subscribe(res=>{
      alert("Recorded Update Successfully!!!");
      this.formvalue.reset();
      this.getAllStudents(data);
      return res;
    })
  }

}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

