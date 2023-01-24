import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  total = 0;
  count=0;


  constructor(private service: ProductsService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.service.cartitems().subscribe((Res: any) => {
      console.log(Res)
      this.cart = Res;
      for (var i = 0; i < this.cart.length; i++) {
        // this.total=this.total+parseInt(this.cart[i]['price']);
        this.total += parseInt(this.cart[i]['price']);
        this.count=this.cart.length;
      }
    })
  }

  deletecartitems(cartitemId: any) {
    this.service.deleteCartItem(cartitemId).subscribe((response: any) => {
      this.service.cartitems().subscribe((Res: any) => {
        console.log(Res)
        this.total = 0;
        this.cart = Res;
        for (var i = 0; i < this.cart.length; i++) {
          // this.total=this.total+parseInt(this.cart[i]['price']);
          this.total += parseInt(this.cart[i]['price']);
        }
        
        this.service.cartitems().subscribe((Res: any) => {
          console.log(Res)
          this.cart = Res;
          for (var i = 0; i < this.cart.length; i++) {
            // this.total=this.total+parseInt(this.cart[i]['price']);
            this.total=0;
            this.total += parseInt(this.cart[i]['price']);
            this.count=this.cart.length;
          }
        })
      })
    })
  }
}