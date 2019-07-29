import { Component, OnInit } from '@angular/core';
import { AdminBookService } from '../../services/admin-book.service';

@Component({
  selector: 'app-add-book-category',
  templateUrl: './add-book-category.component.html',
  styleUrls: ['./add-book-category.component.css']
})
export class AddBookCategoryComponent implements OnInit {

  constructor(
    private bookService: AdminBookService
  ) { }

  ngOnInit() {
   
  }



  addBook(categoryName){
    console.log(categoryName);
    this.bookService.addBookCategory(categoryName).subscribe(data => {
      console.log(data);
      alert("Book is Category is Added ..!");
      (<HTMLFormElement>document.getElementById("ClearId")).reset();
    }, err => {
      console.log(err);
    });

  }
}
