import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>
  {
    // console.log("i am in clone");
    const token = localStorage.getItem('token');
    if ( token) {
    const tokenized = req.clone({
      headers:req.headers.set("Authorization", token)
      //  {"Authorization": token}
    // console.log("i am in in clone")
    });
    return next.handle(tokenized);
  } else {

  } return next.handle(req);
    // console.log(next.handle(tokenized));
  }
}
