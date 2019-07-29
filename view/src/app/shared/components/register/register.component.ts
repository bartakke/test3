import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private studService: StudentService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  regStudeent(stuObj){
    // console.log(stuObj);
    // this.studService.addStudent(stuObj);

    this.studService.addStudent(stuObj).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
  }

}
