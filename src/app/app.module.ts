import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { FormsModule } from '@angular/forms';
import { BookOrderComponent } from './book-order/book-order.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookItemsComponent,
    BookCartComponent,
    BookOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
