import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BusSeatComponent } from '../bus-seat/bus-seat.component';

@Component({
  selector: 'e-ticketing',
  templateUrl: './e-ticketing.component.html',
  styleUrls: ['./e-ticketing.component.css']
})
export class ETicketingComponent implements OnInit {
  eTicketForm: FormGroup;

  minDate = new Date();
  maxDate = '2020-12-30';

  fromSearch='';
  toSearch='';
  journeyDate='';

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  createETicketForm() {
    this.eTicketForm = this.fb.group({
      fromDist: ['', Validators.required],
      toDist: ['', Validators.required],
      journeyDate: ['']
    })
  }
  ngOnInit(): void {
    this.createETicketForm();
  }

  showSeat(data) {
    const dialogRef = this.dialog.open(BusSeatComponent, {
      width: '800px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dataSource=[];
  onSubmit() {
    this.busSchedule.filter((x)=>{
      if((this.eTicketForm.value.fromDist === x.from) || (this.eTicketForm.value.toDist === x.to) || (this.eTicketForm.value.journeyDate === x.journeyDate))
      {
        console.log(x);
        this.dataSource.push(x);
      }
    })
  }

  districtList = [
    {
      id: 1,
      name:"Bagerhat"
    },
    {
      id: 2,
      name:"Bandarban"
    },
    {
      id: 3,
      name:"Barguna"
    },
    {
      id: 4,
      name:"Barisal"
    },
    {
      id: 5,
      name:"Bhola"
    },
    {
      id: 6,
      name:"Bogra"
    },
    {
      id: 7,
      name:"Brahmanbaria"
    },
    {
      id: 8,
      name:"Chandpur"
    },
    {
      id: 9,
      name:"Chapainawabganj"
    },
    {
      id: 10,
      name:"Chittagong"
    },
    {
      id: 11,
      name:"Chuadanga"
    },
    {
      id: 12,
      name:"Comilla"
    },
    {
      id: 13,
      name:"Dhaka"
    },
    {
      id: 14,
      name:"Dinajpur"
    },
    {
      id: 15,
      name:"Faridpur"
    },
    {
      id: 16,
      name:"Feni"
    },
    {
      id: 17,
      name:"Gaibandha"
    },
    {
      id: 18,
      name:"Gazipur"
    },
    {
      id: 19,
      name:"Gopalganj"
    },
    {
      id: 20,
      name:"Habiganj"
    },
    {
      id: 21,
      name:"Jamalpur"
    },
    {
      id: 22,
      name:"Jessore"
    },
    {
      id: 23,
      name:"Jhalokati"
    },
    {
      id: 24,
      name:"Jhenaidah"
    },
    {
      id: 25,
      name:"Joypurhat"
    },
    {
      id: 26,
      name:"Khagrachhari"
    },
    {
      id: 27,
      name:"Khulna"
    },
    {
      id: 28,
      name:"Kishoreganj"
    },
    {
      id: 29,
      name:"Kurigram"
    },
    {
      id: 30,
      name:"Kushtia"
    },
    {
      id: 31,
      name:"Lakshmipur"
    },
    {
      id: 32,
      name:"Lalmonirhat"
    },
    {
      id: 33,
      name:"Madaripur"
    },
    {
      id: 34,
      name:"Magura"
    },
    {
      id: 35,
      name:"Manikganj"
    },
    {
      id: 36,
      name:"Maulvibazar"
    },
    {
      id: 37,
      name:"Meherpur"
    },
    {
      id: 38,
      name:"Munshiganj"
    },
    {
      id: 39,
      name:"Mymensingh"
    },
    {
      id: 40,
      name:"Naogaon"
    },
    {
      id: 41,
      name:"Narail"
    },
    {
      id: 42,
      name:"Narayanganj"
    },
    {
      id: 43,
      name:"Narsingdi"
    },
    {
      id: 44,
      name:"Natore"
    },
    {
      id: 45,
      name:"Nawabganj"
    },
    {
      id: 46,
      name:"Netrokona"
    },
    {
      id: 47,
      name:"Nilphamari"
    },
    {
      id: 48,
      name:"Noakhali"
    },
    {
      id: 49,
      name:"Pabna"
    },
    {
      id: 50,
      name:"Panchagarh"
    },
    {
      id: 51,
      name:"Patuakhali"
    },
    {
      id: 52,
      name:"Pirojpur"
    },
    {
      id: 53,
      name:"Rajbari"
    },
    {
      id: 54,
      name:"Rajshahi"
    },
    {
      id: 55,
      name:"Rangamati"
    },
    {
      id: 56,
      name:"Rangpur"
    },
    {
      id: 57,
      name:"Satkhira"
    },
    {
      id: 58,
      name:"Shariatpur"
    },
    {
      id: 59,
      name:"Sherpur"
    },
    {
      id: 60,
      name:"Sirajganj"
    },
    {
      id: 61,
      name:"Sunamganj"
    },
    {
      id: 62,
      name:"Sylhet"
    },
    {
      id: 63,
      name:"Tangail"
    },
    {
      id: 64,
      name:"Thakurgaon"
    }
  ]

  busSchedule = [
    {
      id: 1,
      busName: 'FalguniModhumoti Paribhaban',
      busNo: '201',
      from: 'Dhaka',
      to: 'Khulna',
      busClass: 'E-Class',
      busType: 'AC',
      startPoint: 'Gulistan',
      endPoint: 'RoyalChattar',
      departureTime: '6:15 AM',
      arrivalTime: '11:35 AM',
      totalSeat: 40,
      seatPrice: '500',
      journeyDate: '2020-12-15',
      serviceCharge: '40',
      insuranceFee: '10'
    },
    {
      id: 2,
      busName: 'FalguniModhumoti Paribhaban',
      busNo: '202',
      from: 'Dhaka',
      to: 'Khulna',
      busClass: 'E-Class',
      busType: 'Non-AC',
      startPoint: 'Gulistan',
      endPoint: 'RoyalChattar',
      departureTime: '7:15 AM',
      arrivalTime: '12:35 PM',
      totalSeat: 40,
      seatPrice: '500',
      journeyDate: '2020-12-15',
      serviceCharge: '40',
      insuranceFee: '10'
    },
    {
      id: 3,
      busName: 'FalguniModhumoti Paribhaban',
      busNo: '203',
      from: 'Dhaka',
      to: 'Khulna',
      busClass: 'E-Class',
      busType: 'Non-AC',
      startPoint: 'Gulistan',
      endPoint: 'RoyalChattar',
      departureTime: '11:15 AM',
      arrivalTime: '6:35 PM',
      totalSeat: 40,
      seatPrice: '500',
      journeyDate: '2020-12-15',
      serviceCharge: '40',
      insuranceFee: '10'
    },
    {
      id: 1,
      busName: 'Green Line',
      busNo: '730',
      from: 'Dhaka',
      to: 'Khulna',
      busClass: 'A-Class',
      busType: 'AC',
      startPoint: 'Rajarbagh',
      endPoint: '',
      departureTime: '7:45 AM',
      arrivalTime: '',
      totalSeat: 40,
      seatPrice: '1000',
      journeyDate: '2020-12-15',
      serviceCharge: '100',
      insuranceFee: '50'
    }
  ]

}
