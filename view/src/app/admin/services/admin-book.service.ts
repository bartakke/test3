  import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../models/book.model';
import { BookCategory } from '../models/bookCategory.Model';

const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': undefined })
}

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {


   Book = JSON.parse(localStorage.getItem('bookDB'));
  constructor(
    private http: HttpClient
  ) { }

  addAdminBook(fd) {   
    // console.log(book,fd)
    return this.http.post('http://localhost:8888/api/library/create', fd );
    // console.log(book);
  }

  addBookCategory(category) {
    console.log(category);
     
    return this.http.post('http://localhost:8888/api/bookCategory/name', category);
    // console.log(book);
  }

  getBookCategory(): Observable<BookCategory[]>
  {
    return this.http.get<BookCategory[]>('http://localhost:8888/api/bookCategory');
    // console.log(test);
  }

  getBooks(): Observable<BookModel[]>
  {
    return this.http.get<BookModel[]>('http://localhost:8888/api/library');
    // console.log(test);
  }

  deleteBooks(bookId): Observable<BookModel[]>
  {
    return this.http.delete<BookModel[]>('http://localhost:8888/api/library/' + bookId);
    // console.log(test);
  }

  updateBooks(bookId,book): Observable<BookModel[]>
  {
    return this.http.put<BookModel[]>('http://localhost:8888/api/library/'+ bookId , book);
    // console.log(test);
  }

  bookCount(bookId): Observable<BookModel[]>
  {
    return this.http.get<BookModel[]>('http://localhost:8888/api/library/' + bookId) ;
    // console.log(test);
  }

  getBookById(bookId): Observable<BookModel[]>
  {
    return this.http.get<BookModel[]>('http://localhost:8888/api/library/' + bookId);
    // console.log(test);
  }
}


