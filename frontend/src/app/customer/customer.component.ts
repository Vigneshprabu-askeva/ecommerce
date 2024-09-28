import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  allcustomers : any = [];
  constructor(private _route: ActivatedRoute,private api: ApiService) { }

  ngOnInit(): void {
      // returns string so convert it to number
      this.api.getAllCustomers().subscribe((customers) => {
        this.allcustomers = customers;
        console.log(this.allcustomers);
      });
   
  }

}
