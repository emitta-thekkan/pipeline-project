import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp;
  message;
  constructor(public routes :ActivatedRoute,
    public service:EmployeeService,
    public router:Router) 
    {
      this.message="";
     }


  ngOnInit() {
    let paraMeterArrivalStatus=this.routes.paramMap;
    paraMeterArrivalStatus.subscribe((params)=>{
    let No=params.get("no")
    let statusofEmpSearched=this.service.GetEleByID(No);
    statusofEmpSearched.subscribe((result:any)=>{
        console.log(result);
        if(result != 0)
         {
             alert("hi");
            this.emp=result;
            this.message="Record Found";
        }
        else{
           this.message="Record Not Found!!";
         }
    });
});

  }

Update()
{
    let statusofEmpUpdate=this.service.UpdateData(this.emp);
    statusofEmpUpdate.subscribe((result:any)=>{
         if(result.affectedRows>0)
         {
            this.router.navigate(['employee-list']);
        }
        else{
            this.message="Something went wrong";
        }
    });
}

}
