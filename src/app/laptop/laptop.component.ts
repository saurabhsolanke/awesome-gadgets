import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
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

}
