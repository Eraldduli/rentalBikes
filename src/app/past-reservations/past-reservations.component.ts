import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { TestService } from '../test.service';

@Component({
  selector: 'app-past-reservations',
  templateUrl: './past-reservations.component.html',
  styleUrls: ['./past-reservations.component.scss']
})
export class PastReservationsComponent implements OnInit {
  Returned = "Returned";
  Active = "Active";
  dataSource: Array<any>=[];
  pageSlice: Array<any>=[];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.test.pastReservations().subscribe(post => {
      if(post.message){
        alert(post.message)
      }else{

        this.dataSource = post;
        this.pageSlice = this.dataSource.slice(0,3)
      }
    });
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.dataSource.length)
      endIndex = this.dataSource.length;
    this.pageSlice = this.dataSource.slice(startIndex, endIndex)

  }

}
