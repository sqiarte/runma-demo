import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArrayName, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();
  id: number;

  constructor(private userService: UserService, private route: ActivatedRoute,private fb: FormBuilder, private snackbar:MatSnackBar){
    console.log("this is the message from constructor" + this.user)
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data.id)
      console.log(data)
      console.log(data.email)
      console.log(data.lname)

    }, error => console.log(error));
  }

  // validateForm = this.fb.group({
  //   email: ['sample email',[Validators.required, Validators.email]],
  //   firstName: ['',[Validators.required, Validators.maxLength(10)]],
  //   password: ['',[Validators.required, Validators.minLength(6)]]
  // });

  

  onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.snackbar.open('Updated successfully', 'ok')
    }, error => console.log(error));
  }

}
