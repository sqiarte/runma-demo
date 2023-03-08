import { EventService } from './../../event.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  orgID: number;
   event: Event = new Event();

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.orgID = 0;

   }

  eventForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    raceDate: ['', Validators.required],
    openRegisDate: ['', Validators.required],
    closeRegisDate: ['', Validators.required],
    province: ['', Validators.required],
    capacity: ['', Validators.required],
  })

  ngOnInit(): void {
    //ต้อง get organizer id มาด้วย??? // ถ้ามี token น่าจะมาจาก token
    this.eventService.getOrganizerById(1).subscribe(data=>{
      console.log(data);
      console.log(data.id)
      this.orgID = data.id
    }, err => console.log(err));


    // ลอง get event
    this.eventService.getEventById(3).subscribe(data=>{
      console.log(data);
      // console.log(data.id)
      // this.orgID = data.id
    }, err => console.log(err));
  }

  onSubmitEvent() {
 
    this.eventService.createEvent(this.event).subscribe(data=>{
      // this.event = this.eventForm.value;
      // this.orgID = this.event.organizerID
      console.log(data);
    }, error => console.log(error));
   
  }



}


