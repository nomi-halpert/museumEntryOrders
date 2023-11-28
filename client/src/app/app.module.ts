import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryOrderComponent } from './entry-order/entry-order.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TicketsOfTimeComponent } from './tickets-of-time/tickets-of-time.component';
import { TicketsInformaionComponent } from './tickets-informaion/tickets-informaion.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryOrderComponent,
    TicketsOfTimeComponent,
    TicketsInformaionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
