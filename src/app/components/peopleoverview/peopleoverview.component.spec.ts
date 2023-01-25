import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleoverviewComponent } from './peopleoverview.component';

describe('PeopleoverviewComponent', () => {
  let component: PeopleoverviewComponent;
  let fixture: ComponentFixture<PeopleoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
