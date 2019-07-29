import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }


  addStudent(stuObj) {
    // console.log(stuObj);
    return this.http.post('http://localhost:8888/api/student/create', stuObj);
  }

  loginStudent(Obj) {
    // console.log(Obj);
    return this.http.post('http://localhost:8888/api/student/auth', Obj);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getStudent()
  {
    return this.http.get('http://localhost:8888/api/student/');


}
}