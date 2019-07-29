import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private studService: StudentService
  ) { }

  ngOnInit() {
  }

  // studLogin()
  // {
  //   this.studService.getStudent().subscribe(data => {
  //     console.log(data);
      
  //   })
  // }

  studLogin(obj){
    console.log(obj);
    // this.router.navigate(['/home']);
    this.studService.loginStudent(obj).subscribe(data => {
      console.log(data.token);
      localStorage.setItem('token', data.token);
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    });
  }

}
