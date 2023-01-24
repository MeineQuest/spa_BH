import { Injectable } from '@angular/core';
import { Order, OrderItems } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  constructor() { }

  getAllOrders() {
    return this.orders;
  }

  getOrderByID(id: number) {
    return this.orders.filter(it => it.id === id);
  }

  getOrdersByCustomerID(customerId: number) {
    return this.orders.filter(it => it.customerId === customerId);
  }

  getOrdersByBuyerID(buyerId: number) {
    return this.orders.filter(it => it.buyerId === buyerId);
  }

  setNewOrder(order: Order) {
    this.orders.push(order);
    this.saveToLocalStorage();
    this.loadFromLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  loadFromLocalStorage() {
    const item = localStorage.getItem('orders');
    if (item === null) {
      this.orders = [];
      return;
    }
    const data: [{
      id: number,
      items: OrderItems[],
      customerId: number,
      buyerId?: number,
      paid?: boolean,
      guided?: boolean,
    }] = JSON.parse(item);

    this.orders = data;
  }

}
