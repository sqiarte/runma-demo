import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { OrganizerEditComponent } from './components/organizer-edit/organizer-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {path: "edit-user/:id", component: UserEditComponent},
  {path: "edit-organizer", component: OrganizerEditComponent},
  {path: "create-event", component: CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
