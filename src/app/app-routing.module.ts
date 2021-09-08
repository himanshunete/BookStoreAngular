import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookCartComponent} from 'src/app/book-cart/book-cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: 'cart', component: BookCartComponent  },
{ path: '', component:  DashboardComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
