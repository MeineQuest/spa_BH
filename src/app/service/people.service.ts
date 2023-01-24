import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Buyer } from '../model/buyer';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private customers: Customer[] = [];
  private buyers: Buyer[] = [];

  constructor() { }

  getAllCustomer() {
    return this.customers;
  }

  getCustomerById(customerId: number){
    return this.customers.filter(it => it.id === customerId);
  }

  getAllBuyers() {
    return this.buyers;
  }

  getBuyerById(buyerId: number){
    return this.buyers.filter(it => it.id === buyerId);
  }

  setNewCustomer(customer: Customer) {
    this.customers.push(customer);
    this.saveCustomersToLocalStorage();
    this.loadCustomersFromLocalStorage();
  }

  setNewBuyer(buyer: Buyer) {
    this.buyers.push(buyer);
    this.saveBuyersToLocalStorage();
    this.loadBuyersFromLocalStorage();
  }

  saveCustomersToLocalStorage() {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  saveBuyersToLocalStorage() {
    localStorage.setItem('buyers', JSON.stringify(this.buyers));
  }

  loadCustomersFromLocalStorage() {
    const item = localStorage.getItem('customers');
    if (item === null) {
      this.customers = [];
      return;
    }
    const data: [{
      id: number,
      name: string
    }] = JSON.parse(item);

    this.customers = data;
  }

  loadBuyersFromLocalStorage() {
    const item = localStorage.getItem('buyers');
    if (item === null) {
      this.buyers = [];
      return;
    }
    const data: [{
      id: number,
      name: string,
      link: string
    }] = JSON.parse(item);

    this.buyers = data;
  }
}
