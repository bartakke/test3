import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BookModel } from '../../admin/models/book.model';
import { Observable } from 'rxjs';
  // import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentBookServiceService {

  // bookReq;
  constructor(
    private http: HttpClient
  ) { }

  getAllBooks(): Observable<BookModel[]>{
    return this.http.get<BookModel[]>('http://localhost:8888/api/library');
  }

  getBookById(id): Observable<BookModel[]>{
    return this.http.get<BookModel[]>('http://localhost:8888/api/library/' + id);
  }

  bookRequest(book){
    // console.log(book);
    // let obj ={
    //   id : bookId,
    //   token: localStorage.getItem('token')
    // }
    // let obj1 = {
    //   book : this.book,

    // }
    return this.http.get<BookModel>('http://localhost:8888/api/readReq/'+ book);
  }
}
