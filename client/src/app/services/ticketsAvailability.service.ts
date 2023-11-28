import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { TicketsAvailability } from '../models/ticketsAvailability';

@Injectable({
  providedIn: 'root'
})
export class TicketsAvailabilityService {

  constructor(private http: HttpClient) { }

  numOfTickets: number = 0;
  entrances: TicketsAvailability[] = []
  
  getEntrances(): Observable<TicketsAvailability[]> {
    let url: string = 'https://localhost:7099/api/Entrances';
    return (this.http.get<TicketsAvailability[]>(url)).pipe(map((res: TicketsAvailability[]) => {
      this.entrances = res;
      return res;
    }))
  }

  ticketPurchase(numOfTickets:number,index:number):Observable<TicketsAvailability[]>{
    let url: string = `https://localhost:7099/api/Entrances/${index}`;
    return (this.http.put<TicketsAvailability[]>(url,numOfTickets)).pipe(map((res: TicketsAvailability[]) => {
      this.entrances = res;
      return res;
    }))
  }
}
