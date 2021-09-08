import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookCartComponent} from 'src/app/book-cart/book-cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BookOrderComponent} from './book-order/book-order.component';

const routes: Routes = [ { path: 'cart', component: BookCartComponent  },
{ path: '', component:  DashboardComponent  },
{ path: 'order', component: BookOrderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
