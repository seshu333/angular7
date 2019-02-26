import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'baseapp';
  emp={"name":"","emailid":"","phno":"","sal":""};
  empList=[];
  editIndex=-1;

  addemployee:null;

  constructor(private http:HttpClient){

  }

  getData=function(){
    this.http.get('assets/sample.json').subscribe(data=>{
      console.log(data);
      this.empList=data;
    },err=>{
      console.log(err);
    });
  }
  ngOnInit(){
  	this.getData();
  }


  addEmp=function(){
  	this.addemployee=false;
  }
  listEmp=function(){
  	this.addemployee=true;
  }

  addEmployee=function(){
  if(this.editIndex<0){
  	this.empList.push(this.emp);
  }else{
  	this.empList[this.editIndex]=this.emp;
  }
  	
  	this.emp={"name":"","emailid":"","phno":"","sal":""};
  	this.editIndex=-1;
  	this.listEmp();
  }

  editEmployee=function(index:number){
  		this.emp=this.empList[index];
  		this.editIndex=index;
  		this.addemployee=false;
  }
  deleteEmployee=function(index:number){
  	this.empList.splice(index,1);
  }

  listEmployee=function(){
  	if(this.addemployee){
  		this.addemployee=false;
  	}else{
  		this.addemployee=true;
  	}
  }
}
