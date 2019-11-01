import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  FirstPersonName: string;
  SecondPersonName: string;
  FirstPersonItems: Item[] = [];
  SecondPersonItems: Item[] = [];
  BothItems: Item[] = [];

  constructor() {
    this.firstPersonPaid = true;
    this.FirstPersonName = "Person 1";
    this.SecondPersonName = "Person 2";
  }

  AddFirstPersonItem(name, price) {
    if (price != null && price != '' && price > 0) {
      this.FirstPersonItems.push({ ItemName: name, ItemPrice: Number(price)});
      this.Calculate();
    }    
  }

  DeleteFirstPersonItem(index) {
    this.FirstPersonItems.splice(index, 1);
    this.Calculate();
  }

  AddSecondPersonItem(name, price) {
    if (price != null && price != '' && price > 0) {
      this.SecondPersonItems.push({ ItemName: name, ItemPrice: Number(price) });
      this.Calculate();
    }    
  }

  DeleteSecondPersonItem(index) {
    this.SecondPersonItems.splice(index, 1);
    this.Calculate();
  }

  AddBothPeopleItem(name, price) {
    if (price != null && price != '' && price > 0) {
      this.BothItems.push({ ItemName: name, ItemPrice: Number(price) });
      this.Calculate();
    }  
  }

  DeleteBothItem(index) {
    this.BothItems.splice(index, 1);
    this.Calculate();
  }

  FirstPersonTotal: number = 0;
  SecondPersonTotal: number = 0;
  BothTotal: number = 0;
  Calculate() {
    this.FirstPersonTotal = 0;
    this.SecondPersonTotal = 0;

    for (var i = 0; i < this.FirstPersonItems.length; i++) {
      this.FirstPersonTotal += Number(this.FirstPersonItems[i].ItemPrice);
    }

    for (var i = 0; i < this.SecondPersonItems.length; i++) {
      this.SecondPersonTotal += Number(this.SecondPersonItems[i].ItemPrice);
    }

    for (var i = 0; i < this.BothItems.length; i++) {
      this.FirstPersonTotal += Number(this.BothItems[i].ItemPrice) / 2;
      this.SecondPersonTotal += Number(this.BothItems[i].ItemPrice) / 2;
    }

    this.BothTotal = Number(this.FirstPersonTotal) + Number(this.SecondPersonTotal);
  }

  firstPersonPaid: boolean;
  FirstPersonPaid() { this.firstPersonPaid = true; }
  SecondPersonPaid() { this.firstPersonPaid = false; }
}


interface Item {
  ItemName: string;
  ItemPrice: number;
}

