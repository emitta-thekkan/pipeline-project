import {Component} from '@angular/core'

@Component({
    selector:'app-emplist',
    templateUrl:'./emplist.component.html',
    styleUrls:['./emplist.component.css']
})

export class EmplistComponent{
    emps=[];
    //title='Employee List';
    constructor(){
    this.emps=[{"No":"1","Name":"Rachel","City":"Newyork"},
    {"No":"2","Name":"Monica","City":"LA"},
    {"No":"3","Name":"Phoeba","City":"Vegas"}
];
}
}
