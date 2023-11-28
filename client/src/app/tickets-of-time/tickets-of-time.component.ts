import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketsAvailabilityService } from '../services/ticketsAvailability.service';
import { TicketsAvailability } from '../models/ticketsAvailability';

@Component({
  selector: 'app-tickets-of-time',
  templateUrl: './tickets-of-time.component.html',
  styleUrls: ['./tickets-of-time.component.css']
})
export class TicketsOfTimeComponent {
  constructor(private srv: TicketsAvailabilityService) { }
  @Input()
  timeData: TicketsAvailability = new TicketsAvailability();
  @Input()
  numOfTickets: number = 0;
  @Input()
  entrances:TicketsAvailability[]=[];
  @Output()
  entrancesChanged:EventEmitter<TicketsAvailability[]>=new EventEmitter<TicketsAvailability[]>();

  ticketsPurchase() {
    let index=this.entrances.findIndex(item=>item==this.timeData)
    index!==-1 && this.srv.ticketPurchase(this.numOfTickets,index).subscribe(res => {
      this.entrances = res;
      this.entrancesChanged.emit(res);
    })
    this.numOfTickets ?
    alert(`ההזמנה ל- ${this.numOfTickets}   אנשים לשעה ${this.timeData.startTime} נקלטה בהצלחה.`)
    :
    alert('לא הכנסתם כמות כרטיסים')
  }
}



