import { Component, OnInit } from '@angular/core';
import { AdminBookService } from '../../services/admin-book.service';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { BookModel } from '../../models/book.model';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  length:number = 0;
  bookCategory = [];
  userForm: FormGroup;
  selected2;
  selectedFile: File = null;
  url;
  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  constructor(
    private bookService: AdminBookService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      bookName: [''],
      authorName: [''],
      pubName: [''],
      pubYear: [''],
      description: [''],
      noOfBook: [''],
      price: [''],
      category: [''],
      bookCover:['']
    });


    this.bookService.getBookCategory().subscribe(data => {
      // console.log(data);
      this.bookCategory = data;
      // console.log(this.bookCategory);
    }, err => {
      console.log(err);
    });
  }

  // addBook(book,selected2, form : NgForm){
    // console.log(book);
    // console.log(selected2);
    // let obj1 ={
    //   bookName : book.bookName,
    //   authorName : book.authorName,
    //   pubName : book.pubName,
    //   pubYear : book.pubYear ,
    //   description : book.description,
    //   noOfBook : book.noOfBook,
    //   price : book.price,
    //   category: selected2,
    //   bookCover: book.bookCover,
    // }

    // console.log(obj1);

   
    // let obj = {
    //   bookId: 4,
    //   bookName : book.bookName,
    //   authorName : book.authorName,
    //   pubName : book.pubName,
    //   pubYear : book.pubYear ,
    //   description : book.description,
    //   noOfBook : book.noOfBook,
    //   price : book.price,
    // }
    
    // console.log(obj);
    // this.bookService.addAdminBook(obj1).subscribe(data => {
    //   console.log(data);
    //   alert("Book is Inserted ..!");
    //   (<HTMLFormElement>document.getElementById("Login")).reset();
    //   clear.resetForm();
    // }, err => {
    //   console.log(err);
    // });
  // }

  // addBook(){

  //   const fb = new FormData();

  // }

  // upload(event){
  //   console.log(event.target);
  // }

  onFileSelect( event)
  {
    console.log(event);
    
    this.selectedFile = <File>event.target.files[0];

    console.log(this.selectedFile);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.path;
    // console.log(this.url);

      }
    // if (event.target.files && event.target.files[0]) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.userForm.get('file').setValue(event.target.files[0]);
    //   };
    //   reader.readAsDataURL(event.target.files[0]);
    // }
    }
  }

  uploadFile(book: BookModel)
  {
    // book.bookCover = this.selectedFile;
    console.log(this.userForm.value);
    let fd = new FormData();
    fd.append('bookCover', this.selectedFile, this.selectedFile.name);
    fd.append('bookCover', this.userForm.get('bookCover').value);
    fd.append('bookName' , this.userForm.get('bookName').value);
    fd.append('category' , this.userForm.get('category').value);
    fd.append('authorName' , this.userForm.get('authorName').value);
    fd.append('pubName' , this.userForm.get('pubName').value);
    fd.append('pubYear' , this.userForm.get('pubYear').value);
    fd.append('description' , this.userForm.get('description').value);
    fd.append('noOfBook' , this.userForm.get('noOfBook').value);
    fd.append('price' , this.userForm.get('price').value);

    // this.fb.control 
    //   @param fd 
    let test = fd
    console.log(test);
    this.bookService.addAdminBook(fd)
     .subscribe(res => { 
      console.log(res);
    },err => {
      console.log(err);
    });
  }
 
}
