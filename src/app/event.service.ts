import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event';

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
}
