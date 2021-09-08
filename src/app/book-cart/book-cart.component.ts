import { Component, OnInit, Input } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { Book } from '../Book';
import { Customer } from '../Customer';
@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
localItem;
  showCustomerForm =  false;
  showOrder = false;
  cart! : Book[];
  CustomerId!:number;
  name!: string;
  phone!:number;
  pincode!:number;
  locality!:string;
  address!:string;
  city!:string;
  landmark!:string;
  type!:RadioControlValueAccessor;
  constructor() { 
    this.localItem = localStorage.getItem("cart");
    if( this.localItem == null){
      this.cart = []
    }
    else {
      this.cart = JSON.parse(this.localItem);
    }


  }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.showOrder = !this.showOrder;
    const customer = {
      name!: this.name,
  phone!:this.phone,
  pincode!:this.pincode,
  locality!:this.locality,
  address!:this.address,
  city!:this.city,
  landmark!:this.landmark,
  type!:this.type,

    }
    console.log(customer);
  }

  PlaceOrder(){
this.showCustomerForm = !this.showCustomerForm;
  }

  
}

