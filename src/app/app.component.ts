import { Component, OnInit, inject } from '@angular/core';
import { OrderService } from './service/order.service';
import { PeopleService } from './service/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'spa_BH';
  showFiller = false;

  private orderService = inject(OrderService);
  private peopleService = inject(PeopleService);

  ngOnInit(): void {
    this.orderService.loadFromLocalStorage();
    this.peopleService.loadBuyersFromLocalStorage();
    this.peopleService.loadCustomersFromLocalStorage();
  }

}
