import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  heading = "";

  @Input()
  peoples: Person[] = [];

  @Input()
  people = "";

  @Input()
  case = "";

  displayedColumns: string[] = ['name'];

  @Output()
  outEvent = new EventEmitter()

  onClickNew(){
    this.outEvent.emit(this.case)
  }
}
