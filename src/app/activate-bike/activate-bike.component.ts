import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { TestService } from '../test.service';

@Component({
  selector: 'app-activate-bike',
  templateUrl: './activate-bike.component.html',
  styleUrls: ['./activate-bike.component.scss']
})
export class ActivateBikeComponent implements OnInit {
  displayedColumns: string[] = ['_id','username','type', 'rented', 'activate'];
  displayedColumns1: string[] = ['type'];
  dataSource: Array<any> = [];
  pageSlice: Array<any> = [];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private test : TestService) { }

  ngOnInit(): void {
    
    this.test.reservedBikes().subscribe(posts => {
      if(posts.message){
        alert(posts.message)
      }else{

        this.dataSource = posts

  
        console.log(this.dataSource)
  
        this.pageSlice = this.dataSource.slice(0, 3)
      }
    })
    // this.test.reservedBikes().subscribe(posts => {
    //   this.dataSource = posts
    //   this.pageSlice = this.dataSource.slice(0, 3)
    // })
  }

  
  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.dataSource.length)
      endIndex = this.dataSource.length;
    this.pageSlice = this.dataSource.slice(startIndex, endIndex)

  }
  add(id:any,types:any){
this.test.activateBikes({"id":id,"type":types}).subscribe( posts => {
  if(posts.message){
    alert(posts.message)
  }
})
window.location.reload()
  }
}
