import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productslist = "http://localhost:2000";

  constructor(private http: HttpClient) { }

  getallproducts() {
    let resp: any = this.http.get(this.productslist+"/laptops");
    // resp.subscribe((data: any) => this.productslist = data);
    // resp.subscribe((data: any) => console.log(data))
    return resp;
  }

  addtocart(product: any){
    let resp:any=this.http.post(this.productslist+"/cart/",product)
    return resp;
  }

  cartitems(){
    let resp: any = this.http.get(this.productslist+"/cart");
    return resp;
  }

  deleteCartItem(id:any){
    let resp:any=this.http.delete(this.productslist+"/cart/"+id);
    return resp;
  }

  cartcount(){
    let resp: any = this.http.get(this.productslist);
    return resp;
  }
}
