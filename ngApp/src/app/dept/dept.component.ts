import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {
  depts=[];
  constructor() 
  { 
  this.depts=[
    {"No":"1","Dept":"IT","City":"Pune"},
    {"No":"2","Dept":"CSM","City":"Noida"},
    {"No":"3","Dept":"GEC","City":"Delhi"}
  ];
}
 DoSomething()
 {
   console.log("Hello");
  this.depts.push({"No":4,"Dept":"COMP","City":"Shanghai"});
this.depts.splice(0,1);
}
 }
