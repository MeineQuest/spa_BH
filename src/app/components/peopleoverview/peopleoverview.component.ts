import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PeopleService } from 'src/app/service/people.service';
import { Buyer } from 'src/app/model/buyer';
import { Customer } from 'src/app/model/customer';
import { AddPeopleComponent } from '../dialog/add-people/add-people.component';

@Component({
  selector: 'app-peopleoverview',
  templateUrl: './peopleoverview.component.html',
  styleUrls: ['./peopleoverview.component.scss']
})
export class PeopleOverviewComponent implements OnInit {

  public buyers: Buyer[] = [];
  public customers: Customer[] = [];

  private peopleService = inject(PeopleService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadPeople();
  }

  onHandleEvent(event: string) {
    switch (event) {
      case 'buyer':
        this.handleNewBuyer();
        break;
      case 'customer':
        this.handleNewCustomer();
        break;
    }
  }

  private loadPeople() {
    this.buyers = this.peopleService.getAllBuyers();
    this.customers = this.peopleService.getAllCustomer();
  }

  private handleNewBuyer() {
    const ref = this.dialog.open(AddPeopleComponent, {
      disableClose: true,
      data: { isBuyer: true, people: 'Buyer' }
    });

    ref.afterClosed().subscribe(result => {
      const buyer = { id: this.peopleService.getNewBuyersId(), name: result.name, link: result.link } as Buyer;
      this.peopleService.setNewBuyer(buyer);
      this.loadPeople();
    });
  }

  private handleNewCustomer() {
    const ref = this.dialog.open(AddPeopleComponent, {
      disableClose: true,
      data: { isBuyer: false, people: 'Customer' }
    });

    ref.afterClosed().subscribe(result => {
      const customer = { id: this.peopleService.getNewCustomersId(), name: result.name } as Customer;
      this.peopleService.setNewCustomer(customer);
      this.loadPeople();
    });
  }

}
