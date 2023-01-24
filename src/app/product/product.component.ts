import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products:any[]=[];

  constructor(private service: ProductsService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.service.getallproducts().subscribe((Res: any) => {
      console.log(Res)
      this.products=Res;
    })
  }

  addtocart(product: any){
    console.log(product)
    delete product.id;
    this.service.addtocart(product).subscribe((res:any)=>{
     console.log(res)
    })
  }

  // getallproducts() {
  //   let resp: any = this.http.get(this.service.products);
  //   resp.subscribe((data: any) => this.products = data);
  //   resp.subscribe((data: any) => console.log(data))
  // }

}
