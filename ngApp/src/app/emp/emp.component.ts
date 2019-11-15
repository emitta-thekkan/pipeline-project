import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-emp',
//   template:`<h1>{{No}}</h1>
//             <h3>{{Name}}</h3>
//             <h6>{{City}}</h6>`
// })
@Component({
  selector: 'app-emp',
  template:`<input type="text" value="{{Name}}">`
})
export class EmpComponent  {
  No:number;
  Name:string;
  City:string;

  constructor() 

  {
    this.No=1;
    this.Name="Rachel";
    this.City="LA";
  }

}
