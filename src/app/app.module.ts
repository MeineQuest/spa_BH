import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PeopleOverviewComponent } from './components/peopleoverview/peopleoverview.component';
import { ListComponent } from './components/peopleoverview/list/list.component';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { AddPeopleComponent } from './components/dialog/add-people/add-people.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    PeopleOverviewComponent,
    ListComponent,
    AddPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
