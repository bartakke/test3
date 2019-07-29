import { Component, OnInit } from '@angular/core';
import { StudentBookServiceService } from 'src/app/student/services/student-book-service.service';
import { BookModel } from 'src/app/admin/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-stud-book',
  templateUrl: './view-stud-book.component.html',
  styleUrls: ['./view-stud-book.component.css']
})
export class ViewStudBookComponent implements OnInit {

  AllBooks = []; 
  constructor(
   private studBookService: StudentBookServiceService,
   private route: Router

  ) { }

  ngOnInit() {
    this.studBookService.getAllBooks().subscribe(data => {
      // console.log(data);
      this.AllBooks = data;
     });
  }

  bookDetails(id){
    // console.log(id);
    this.route.navigate(['bookDetails', id]);
  }

}
