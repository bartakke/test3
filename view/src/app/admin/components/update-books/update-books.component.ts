import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminBookService } from '../../services/admin-book.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  bookId;
  bookData;
  bookCategory = [];
  selected2;
  oldBooks= [];
  constructor(
    private route: ActivatedRoute , 
    private bookService: AdminBookService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.bookId =  param.get("id");
      this.bookData = this.bookService.getBookById(this.bookId)
        .subscribe(data => {
          //  console.log(data);
          this.oldBooks = data;
          }, err => {
            console.log(err);
        });
    });

    this.bookService.getBookCategory().subscribe(data => {
      // console.log(data);
      this.bookCategory = data;
      console.log(this.bookCategory);
    }, err => {
      console.log(err);
    });
  }

  updateBook(updateBook){
    console.log(updateBook);
    this.bookService.updateBooks(this.bookId,updateBook)
    .subscribe(data => {
       console.log(data);
       alert("Book is Update ..!");
       this.routes.navigate(['/admin-home/view-book']);
      // this.oldBooks = data;
      }, err => {
        console.log(err);
    });
  }

}
