import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cart!: Book[];
  books!: Book[];
  constructor() {
    this.books = [{
      BookId:1,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    },
    {
      BookId:2,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    },
    {
      BookId:3,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    },
    {
      BookId:4,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    },
    {
      BookId:5,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    },
    {
      BookId:6,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    }
    ,
    {
      BookId:7,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    }
    ,
    {
      BookId:8,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    }
    ,
    {
      BookId:9,
      image:"assets/images/overstory.png",
      title!:"Hello World",
      author!:"Jim King",
      price!:700,
      ratings!:4.5,
      people!:20,
      originalprice!:1000
    }]

    this.cart = [];



  
   
   }

  ngOnInit(): void {
  }

  AddBook(book:Book){
    console.log(book);
this.cart.push(book);
localStorage.setItem("cart",JSON.stringify(this.cart));
  }

}
