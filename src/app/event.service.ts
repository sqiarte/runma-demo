import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event';
import { Organizer } from './organizer';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = "http://localhost:8080/event/";

  constructor(private httpClient: HttpClient) { }

  createEvent(event: Event): Observable<Object>{
    console.log("Created event" + event)
    return this.httpClient.post(`${this.baseURL}/`, event);
  }

  //ลอง get เอา id มาก่อนนนน
  getOrganizerById(id: number):Observable<Organizer>{
    console.log("this is from server ; organizer id is "+id)
    return this.httpClient.get<Organizer>("http://localhost:8080/organizer/"+id)
  }

  getEventById(id: number):Observable<Event>{
    console.log("this is from server ; event id is "+id)
    return this.httpClient.get<Event>("http://localhost:8080/event/"+id)
  }
}
