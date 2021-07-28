import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.scss']
})
export class ShowBikesComponent implements OnInit {


  bool = false;
  clickedRows = new Array<any>();
  // reported = 'reported';
  // opened = 'opened';
  // progress = 'in progress';
  // // solved = 'solved';
  selected1 = "";
  selected2 = "";
  // selected3 = "";
  // selected4 = "";
  typeControl = new FormControl();
  power_Control = new FormControl();
  // typeControl = new FormControl();
  // developerControl = new FormControl();
  displayedColumns: string[] = ['TypesofBike', 'Power', 'Stock', 'add'];
  columns1: string[] = ['type',"number"];
  dataSource: Array<any> = [];
  pageSlice: Array<any> = [];
  form!: any;
  row1 = new Array<any>();


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private test: TestService, private router: Router) {

  }
  ngOnInit(): void {


    this.test.getBikes().subscribe(posts => {

      this.dataSource = posts
      this.pageSlice = this.dataSource.slice(0, 3)
    })
    this.typeControl.valueChanges.subscribe(value => this.test.filterByType(value).subscribe(post => {
      this.dataSource = post
      this.pageSlice = this.dataSource.slice(0, 3)
      ;
  this.selected2 = "";
  
  
    }
    ))
    this.power_Control.valueChanges.subscribe(value => this.test.filterByPower(value).subscribe(post => {
      

      this.dataSource = post
      this.pageSlice = this.dataSource.slice(0, 3)
      this.selected1 = ""
    }
    ))
    // this.typeControl.valueChanges.subscribe(value => this.auth.filterIssueByType(value).subscribe(post => {
    //   this.dataSource = post
    //   this.pageSlice = this.dataSource.slice(0, 5)
    // }
    // ))
    // this.developerControl.valueChanges.subscribe(value => this.auth.filterIssueByDeveloper(value).subscribe(post => {
    //   this.dataSource = post
    //   this.pageSlice = this.dataSource.slice(0, 5)
    // }
    // ))
  }


  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.dataSource.length)
      endIndex = this.dataSource.length;
    this.pageSlice = this.dataSource.slice(startIndex, endIndex)

  }

  remove(type:any){
    console.log(this.row1)
    console.log(this.clickedRows)
    let index = this.row1.indexOf(type);
    delete this.row1[index];
    
    var b = new Array<any>();
   
        for (let entry of this.clickedRows) {
          b.push(entry.type)
        }
      
    let index1 = b.indexOf(type);
    let a =this.clickedRows[index1].number ;
      this.clickedRows[index1].number= a-1;
       a =this.clickedRows[index1].number ;
      if(a===0){
         
         this.clickedRows.splice(index1,1);
      }
    
  }
  reserve(){
    this.test.reserveBikes(this.row1).subscribe(post =>{
      if(post.message){

        alert(post.message);
      }
    } )
    window.location.reload();
  }
  add(row: any,stock:any) {


    this.row1.push(row);
    var counter =0;
    for (let entry of this.row1) {
      if(entry === row){
        counter ++;
      }
    }
    if(counter > stock){
      alert("you can't rent more "+row +" bikes. They are out of Stock");
      this.row1.pop();
    }else{

      var b = new Array<any>();
      if (this.clickedRows.length !== 0) {
        // for(let i=0;i<this.clickedRows.length;i++){
          for (let entry of this.clickedRows) {
            b.push(entry.type)
          }
          
        let index = b.indexOf(row);
        console.log(index)
        if (index === -1) {
          this.clickedRows.push({ type: row, number: 1 })
          
        } else {
          // this.clickedRows.find((element,index) => {
          //   if(element.type===row.type){
  
          var a = this.clickedRows[index].number;
  
          this.clickedRows[index].number = a + 1;
        }
  
        // this.bool =false;
        //this.clickedRows.push({type:row.type,number:row.number +a})
  
  
      }
      else {
        this.clickedRows.push({ type: row, number: 1 })
        
      }

    }



  }
  //   //this.bool =false;
  //  // var a = this.clickedRows[i].number;

  //   //this.clickedRows[i].number = a+1;
  //   //this.clickedRows.push({type:row.type,number:row.number +a})


  // }else {

  //  // break;
  // }
  // }
  // }else{
  //   this.clickedRows.push({type:row.type,number:1})

  // }
}
  //   arrayElements.forEach((element,index)=>{
  //     if(element==2) delete arrayElements[index];
  //  });


    // this.clickedRows.add(row)

  // this.form = new FormGroup({

  //   status: new FormControl(row.status, [Validators.required]),
  //   issue: new FormControl(row.issue, [Validators.required]),
  //   type: new FormControl(row.type, [Validators.required]),
  //   developer: new FormControl(row.developer, [Validators.required]),


  // }, [Validators.required]);



