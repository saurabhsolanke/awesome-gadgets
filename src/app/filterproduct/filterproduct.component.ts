import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';


@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css']
})
export class FilterproductComponent implements OnInit {
  submitted = false;
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl("", [Validators.required, Validators.required]),
    //   avatar: new FormControl("", [Validators.required, Validators.required])
    // });
  }

    get f() {
      return this.form.controls;
    }
    
    submit() {
      this.submitted = true;
    }
  }