import { Component, Input, OnInit } from '@angular/core';
import { TicketsAvailabilityService } from '../services/ticketsAvailability.service';
import { TicketsAvailability } from '../models/ticketsAvailability';
import { TicketsOfTimeComponent } from '../tickets-of-time/tickets-of-time.component';
@Component({
  selector: 'app-tickets-informaion',
  templateUrl: './tickets-informaion.component.html',
  styleUrls: ['./tickets-informaion.component.css']
})
export class TicketsInformaionComponent implements OnInit{
  constructor( private srv:TicketsAvailabilityService) { }
  ngOnInit(): void {
    this.timesDivision();
  }
  @Input()
  numOfTickets:number=0;
  @Input()
  entrances:TicketsAvailability[]=[];
  currentDate = new Date();
  time: string = "morning";
  morningEntrances: TicketsAvailability[] = [];
  noonEntrances: TicketsAvailability[] = [];
  eveningEntrances: TicketsAvailability[] = [];
  totalTickets:number=0;

  entrancesChanged(event:TicketsAvailability[]){
    this.entrances=event;
    this.totalTickets-=this.numOfTickets;
    this.timesDivision();
  }

  timesDivision(){
    var morningIndex = this.entrances.findIndex(i => i.startTime==='12:00')
    this.morningEntrances = this.entrances.slice(0, morningIndex);
    var moonEntrances = this.entrances.findIndex(i => i.startTime==='15:00')
    this.noonEntrances = this.entrances.slice(morningIndex,moonEntrances);
    this.eveningEntrances = this.entrances.slice(moonEntrances);
    //רק בפעם הראשונה יש צורך לעבור על כל המערך ולמנות את מספר הכרטיסים...
    this.totalTickets==0 &&
    this.entrances.map(i=>{
      this.totalTickets+=i.availablePlaces;
    })
  }

}
