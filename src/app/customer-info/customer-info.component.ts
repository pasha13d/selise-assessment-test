import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerForm: FormGroup;
  ticketData = [];
  bookinfo = [];
  customer: any = {};
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.ticketData.push(data);
  }

  ngOnInit(): void {
    this.createCustomer();
  }

  createCustomer() {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      gender: ['', Validators.required]
    })
  }

  onSubmit() {
    this.bookinfo.push({name: this.customerForm.value.name, 
                            email: this.customerForm.value.email, 
                            gender: this.customerForm.value.gender})
    // for(let d of this.ticketData) {
    //   this.bookinfo.push({name: this.customerForm.value.name, 
    //                       email: this.customerForm.value.email, 
    //                       gender: this.customerForm.value.gender,
    //                       seatNo: d.no,
    //                       price: d.price,
    //                       class: d.class})
    // }
    this.customer = Object.assign(this.customer, this.bookinfo);
    localStorage.setItem('Customers', JSON.stringify(this.customer));
    console.log(this.ticketData);
    console.log(this.bookinfo);
  }

  gender = [
    {
      id:1,
      type: 'Male'
    },
    {
      id: 2,
      type: 'Female'
    }
  ]

}
