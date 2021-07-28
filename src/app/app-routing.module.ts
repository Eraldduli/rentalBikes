import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateBikeComponent } from './activate-bike/activate-bike.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PastReservationsComponent } from './past-reservations/past-reservations.component';
import { ShowBikesComponent } from './show-bikes/show-bikes.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },{
    path:'home',component:HomeComponent
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate:[GuardService],
    children:[
      {
        path:'showbikes',component:ShowBikesComponent
      },{
        path:'pastreservations',component:PastReservationsComponent
      },{
        path:'activate',component:ActivateBikeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
