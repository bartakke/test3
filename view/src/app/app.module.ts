import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthStudLoginGuard } from '../app/student/guards/auth-stud-login.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StudDashComponent } from './student/components/stud-dash/stud-dash.component';
import { BookDetailsComponent } from './student/components/book-details/book-details.component';
import { ViewStudBookComponent } from './shared/components/view-stud-book/view-stud-book.component';
import {MatInputModule} from '@angular/material/input';
import { StudDashboardComponent } from './student/components/stud-dashboard/stud-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StudSidebarComponent } from './student/components/stud-sidebar/stud-sidebar.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import {TokenInterceptorService } from './student/services/token-interceptor.service';

import {
     MatGridListModule,
     MatCardModule,
     MatMenuModule,
     MatIconModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatTabsModule,
     MatTableModule,
     MatBottomSheetModule,
     MatFormFieldModule ,
     MatSelectModule,  } from '@angular/material';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { TotolMembersComponent } from './admin/components/admin-dashboard/totol-members/totol-members.component';
import { ExpiredBooksComponent } from './admin/components/admin-dashboard/expired-books/expired-books.component';
import { LossedBooksComponent } from './admin/components/admin-dashboard/lossed-books/lossed-books.component';
import { AddBooksComponent } from './admin/components/add-books/add-books.component';
import { ViewBooksComponent } from './admin/components/view-books/view-books.component';
import { UpdateBooksComponent } from './admin/components/update-books/update-books.component';
import { AddBookCategoryComponent } from './admin/components/add-book-category/add-book-category.component';
import { StudRequestComponent } from './student/components/stud-request/stud-request.component';
import { InterceptorTestComponent } from './student/components/interceptor-test/interceptor-test.component';

@NgModule({
  entryComponents: [
    // BookDetailsComponent,
    StudRequestComponent
  ],
  declarations: [
    AppComponent,
    // CommonModule,
    BookDetailsComponent,
    ViewStudBookComponent,
    StudDashboardComponent,
    StudSidebarComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    LoginComponent,
    RegisterComponent,
    TotolMembersComponent,
    ExpiredBooksComponent,
    LossedBooksComponent,
    AddBooksComponent,
    ViewBooksComponent,
    UpdateBooksComponent,
    AddBookCategoryComponent,
    StudRequestComponent,
    InterceptorTestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatSelectModule 
  ],
  providers: [
    AuthStudLoginGuard,
    {
        provide : HTTP_INTERCEPTORS,
        useClass : TokenInterceptorService,
        multi : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
