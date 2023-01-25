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

  private idCustomersCount = 0;
  private idBuyersCount = 0;

  constructor() { }

  public getNewCustomersId() {
    this.idCustomersCount++;
    return this.idCustomersCount;
  }

  public getNewBuyersId() {
    this.idBuyersCount++;
    return this.idBuyersCount;
  }

  getAllCustomer() {
    return this.customers;
  }

  getCustomerById(customerId: number) {
    return this.customers.filter(it => it.id === customerId);
  }

  getAllBuyers() {
    return this.buyers;
  }

  getBuyerById(buyerId: number) {
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

  saveCustomersIdCountToLocalStorage() {
    localStorage.setItem('customersIdCount', JSON.stringify(this.idCustomersCount));
  }

  loadCustomersIdCountToLocalStorage() {
    const item = localStorage.getItem('customersIdCount');
    if (item === null) {
      this.customers = [];
      this.idCustomersCount = 0;
      return;
    }
    const data: number = JSON.parse(item);
    this.idCustomersCount = data;
  }

  saveBuyersIdCountToLocalStorage() {
    localStorage.setItem('buyersIdCount', JSON.stringify(this.idBuyersCount));
  }

  loadBuyersIdCountToLocalStorage() {
    const item = localStorage.getItem('buyersIdCount');
    if (item === null) {
      this.buyers = [];
      this.idBuyersCount = 0;
      return;
    }
    const data: number = JSON.parse(item);
    this.idBuyersCount = data;
  }
}
