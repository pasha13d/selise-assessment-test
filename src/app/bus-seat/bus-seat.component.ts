import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';

@Component({
  selector: 'bus-seat',
  templateUrl: './bus-seat.component.html',
  styleUrls: ['./bus-seat.component.css']
})
export class BusSeatComponent implements OnInit {
  
  receivedData=[];
  saveSeatInfo = [];
  btnName= "Purchase";
  public show: boolean = false;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data) { 
    this.receivedData.push(data);
  }

  ngOnInit(): void {
  }
  isActive;
  bookSeat(seatNo, data) {
    this.isActive = !this.isActive;
    this.show = !this.show;
    this.saveSeatInfo.push({price: data.seatPrice, class: data.busClass, no: seatNo});
    console.log(this.saveSeatInfo);
  }

  // openDialog
  customerInfo() {
    const dialogRef = this.dialog.open(CustomerInfoComponent, {
      width: '800px',
      data: this.saveSeatInfo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  get totalPrice() {
    let total = 0;
    for(let data of this.receivedData){
      // total += (parseFloat(data.seatPrice) + parseFloat(data.serviceCharge) + (data.insuranceFee));
      total = (parseFloat(data.seatPrice) + parseFloat(data.serviceCharge) + parseFloat(data.insuranceFee));
    }
    return total;
  }

  boardingPoint = [
    {
      id: 1,
      boardingPlace: 'Kallayanpur'
    },
    {
      id: 2,
      boardingPlace: 'Gulistan'
    },
    {
      id: 3,
      boardingPlace: 'Sayedabad'
    }
  ]

}
