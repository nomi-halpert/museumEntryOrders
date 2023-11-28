import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { TicketsAvailabilityService } from '../services/ticketsAvailability.service';
import { TicketsAvailability } from '../models/ticketsAvailability';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-entry-order',
  templateUrl: './entry-order.component.html',
  styleUrls: ['./entry-order.component.css'],
})

export class EntryOrderComponent {

  constructor(private srv: TicketsAvailabilityService) { }

  entrances: TicketsAvailability[] = []
  numOfTickets: number = 1;
  display:boolean=false;

  getEntrances() {
    this.srv.getEntrances().subscribe(res => {
      this.entrances = res;
      this.display=true;
    })
  }
}
