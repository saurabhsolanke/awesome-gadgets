import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  smartphones:any[]=[];
  constructor(private service: ProductsService, private http: HttpClient, private router: Router) { }

  ngOnInit(){
    this.service.getallsmartphone().subscribe((Res: any) => {
      console.log(Res)
      this.smartphones=Res;
    })
  }

  addtocart(smartphone: any){
    console.log(smartphone)
    delete smartphone.id;
    this.service.addtocart(smartphone).subscribe((res:any)=>{
     console.log(res)
    })
  }


}
