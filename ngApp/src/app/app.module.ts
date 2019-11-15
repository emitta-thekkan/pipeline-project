import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpClientModule  } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptComponent } from './dept/dept.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

import { Router, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    AboutusComponent,
    DeptComponent,
    EmplistComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    ErrorComponent,
    EditComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: AppComponent},
      {path: "employee-register", component: EmployeeRegisterComponent},
      {path: "emplist", component: EmplistComponent},
      {path: "employee-list", component: EmployeeListComponent},
      {path: "aboutus", component: AboutusComponent},
      {path: "edit/:No", component: EditComponent},
      {path: "**", component: ErrorComponent}
    ])
  ],
  providers: [EmployeeService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
