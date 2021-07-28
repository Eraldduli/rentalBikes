import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowBikesComponent } from './show-bikes/show-bikes.component';
import { PastReservationsComponent } from './past-reservations/past-reservations.component';
import { ActivateBikeComponent } from './activate-bike/activate-bike.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TestInterceptor } from './test.interceptor';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    ShowBikesComponent,
    PastReservationsComponent,
    ActivateBikeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
