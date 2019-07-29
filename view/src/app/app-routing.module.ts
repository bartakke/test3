import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudDashboardComponent } from './student/components/stud-dashboard/stud-dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { StudSidebarComponent } from './student/components/stud-sidebar/stud-sidebar.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { TotolMembersComponent } from './admin/components/admin-dashboard/totol-members/totol-members.component';
import { ExpiredBooksComponent } from './admin/components/admin-dashboard/expired-books/expired-books.component';
import { LossedBooksComponent } from './admin/components/admin-dashboard/lossed-books/lossed-books.component';
import { ViewBooksComponent } from './admin/components/view-books/view-books.component';
import { UpdateBooksComponent } from './admin/components/update-books/update-books.component';
import { AddBooksComponent } from './admin/components/add-books/add-books.component';
import { AddBookCategoryComponent } from './admin/components/add-book-category/add-book-category.component';
import { ViewStudBookComponent } from './shared/components/view-stud-book/view-stud-book.component';
import { BookDetailsComponent } from './student/components/book-details/book-details.component';
import { AuthStudLoginGuard } from './student/guards/auth-stud-login.guard';

const routes: Routes = [
  {path : '', component: ViewStudBookComponent},
  {path : 'home', component: ViewStudBookComponent},
  {path : 'login', component: LoginComponent},
  {path : 'student-dashboard', component: StudSidebarComponent},
  {path : 'registerStud', component: RegisterComponent},
  // {path : 'bookDetails/:id', canActivate: [AuthStudLoginGuard] , component : BookDetailsComponent },
  {path : 'bookDetails/:id', component : BookDetailsComponent },
  {path : 'admin-home', component: AdminSidebarComponent,
    children : [
      { path : 'admin-dashboard', component : AdminDashboardComponent,
      children : [
        { path : 'totol-members', component : TotolMembersComponent},
        { path : 'expired-books', component : ExpiredBooksComponent},
        { path : 'lossed-books', component : LossedBooksComponent},
      ]
    },
      { path : 'add-book', component :  AddBooksComponent},
      { path : 'view-book', component :  ViewBooksComponent},
      { path : 'view-book/:id', component : UpdateBooksComponent },
      { path : 'book-category', component : AddBookCategoryComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
