import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/shared/services/student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStudLoginGuard implements CanActivate {
  constructor(
    private studService: StudentService,
    private router: Router
  ){}

  canActivate(): boolean {

    if (this.studService.loggedIn())
    {
      // console.log('true');
      return true;
    } else {
      // console.log('false');
      this.router.navigate(['login']);
      return false;
    }

  }
}
