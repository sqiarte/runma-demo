import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();
  id: number;
  errorMessage: string;
  errorStatus: string;
 

  constructor(private userService: UserService, private route: ActivatedRoute,private fb: FormBuilder, private snackbar:MatSnackBar){
    console.log("this is the message from constructor" + this.user)
    this.id = 0;
    this.errorMessage = '';
    this.errorStatus = ''
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data.id)
      console.log(data)
    }, err => {
      if (err instanceof HttpErrorResponse) {
        const error = err.error;
        this.errorMessage = error.message;
        this.errorStatus = error.status;
        console.log(error)
        console.log(this.errorMessage);
        console.log(this.errorStatus);
      }
    })
  }

  onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.snackbar.open('Updated successfully', 'ok')
    }, err => {
      console.log(err);
      const error = err.error;
      this.errorMessage = error.message;
      this.snackbar.open(this.errorMessage, 'ok')
      console.log("errormessage" + this.errorMessage)
    });
  }

}
