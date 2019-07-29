import { Component, OnInit, Input, Output } from '@angular/core';
import { StudentBookServiceService } from '../../services/student-book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminBookService } from 'src/app/admin/services/admin-book.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  baseUrl = 'localhost:8888';
  bookId;
  @Input() bookData;
  constructor(
    private studBookService: StudentBookServiceService ,
    private route: ActivatedRoute , 
    private bookService: AdminBookService,
    private routes: Router,
    private _bottomSheet: MatBottomSheet,
    private studService : StudentService
  ) { }

  // @Output() StudRequestComponent;
  ngOnInit() {
    // this.studBookService.getAllBooks().subscribe(data => {
    //       console.log(data);
    //      });
    this.route.paramMap.subscribe(param => {
      this.bookId = param.get("id");
      this.studBookService.getBookById(this.bookId).subscribe(data => {
        this.bookData = data;
        console.log(this.bookData);
        })
    });
  }

  readRequest(book){
    // console.log(id); 
    // this._bottomSheet.open(StudRequestComponent);
    if (this.studService.loggedIn())
    {
      // console.log('true');
      // return true;
      this.studBookService.bookRequest(book).subscribe(data =>{
        console.log(data);
      })
    } else {
      // console.log('false');
      this.routes.navigate(['login']);
      return false;
    }

  }
}





