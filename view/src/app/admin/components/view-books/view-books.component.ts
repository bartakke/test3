import { Component, OnInit } from '@angular/core';
import { AdminBookService } from '../../services/admin-book.service';
import { BookModel } from '../../models/book.model';
import { log } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})


export class ViewBooksComponent implements OnInit {
  booksdata: BookModel[] = [];
  id;
  constructor(
    private bookService: AdminBookService,
    private route: Router

  ) { }

  ngOnInit() {
    //   const Allbooks = this.bookService.getBooks();
    //   Allbooks.subscribe((booksdata) => {
    //   this.booksdata = booksdata;
    //   console.log(JSON.parse(this.booksdata));
    //   });
    this.bookService.getBooks().subscribe(
      res => { this.booksdata = res;
        // console.log(this.booksdata);
      },
      err => { console.log(err); },
      () => { 
        // console.log("reading Completed");
      }
    )
  }

  editBook(bookId){
    // this.id = _id;
    if (confirm('Are you sure want to update Book Record ?')) {
      // Save it!
    console.log(bookId);
    this.route.navigate(['/admin-home/view-book', bookId]);
  } else {
      // Do nothing!
    }
  }

  deleteBook(id){
    // console.log(id);
    if (confirm('Are you sure want to update Book Record ?')) {
      {
        this.bookService.deleteBooks(id).subscribe(
          res => { 
            // this.booksdata = res;
            console.log(res);
            this.ngOnInit();
          },
          err => { console.log(err); },
          () => { 
            // console.log("reading Completed");
          }
        )
      }
    }
  }

}

