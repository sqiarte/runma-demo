import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizer } from './organizer';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  private baseURL = "http://localhost:8080/organizer";

  constructor(private httpClient: HttpClient) { }

  getOrganizerById(id: number):Observable<Organizer>{
    console.log("this is from server ; id is "+id)
    return this.httpClient.get<Organizer>(this.baseURL+'/'+id)
  }

  updateOganizer(id: number, organizer: Organizer): Observable<Object>{
    console.log("updated organizer" + organizer)
    return this.httpClient.put(`${this.baseURL}/${id}`, organizer);
  }
}
