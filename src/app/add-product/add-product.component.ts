import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;
  laptops:any;
  d = new Date();
  time: string = this.d.getHours() + ':' + this.d.getMinutes();
  name='';
  ram='';
  price='';
  storage='';
  processor='';
  display='';

  constructor(private service: ProductsService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.required]),
      price: new FormControl("", [Validators.required, Validators.required]),
      ram: new FormControl("", [Validators.required, Validators.required]),
      storage: new FormControl("", [Validators.required, Validators.required]),
      processor: new FormControl("", [Validators.required, Validators.required]),
      display: new FormControl("", [Validators.required, Validators.required])
    });
  }
  get f() {
    return this.form.controls;
  }
  submit(laptops:any) {
    var laptopobj = {
      'name': this.name,
      'ram': this.ram,
      'price': this.price,
      'storage': this.storage,
      'processor': this.processor,
      'display': this.display,
      'time': this.time
    }
    this.service.addtoproducts(laptopobj).subscribe((res: any) => {
      console.log(res);
      console.log('Added successfully!');
      this.service.getallproducts();
    })
  }
}