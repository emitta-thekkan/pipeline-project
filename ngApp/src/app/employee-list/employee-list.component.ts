import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees;
  message;
  
  constructor(private service:EmployeeService,
    public router:Router) { }

  ngOnInit() {
    console.log("Home Component Loaded");
    let resultstate=this.service.GetData();
    resultstate.subscribe((data)=>{
      this.employees =data;
      //console.log(this.employees);
    });
  }

  GoToRegister()
  {
    //console.log("Route to register");
   this.router.navigate(['employee-register']);
  }

  Delete(empNo)
  {
    let statusofDelete=this.service.DeleteData(empNo);
    
    statusofDelete.subscribe((result:any)=>{
      console.log(result);
      if(result.affectedrows>0)
      {
        this.router.navigate(['/employee-list']);
      }
      else{
        this.message="Something went wrong!";
      }
    })
  }
}
