import { Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class userCreateComponent implements OnInit {

  user:Object;

  constructor(
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
    this.user = {};
  }

  createuser(user:Object) {
    this.userService.adduser(user).then((resp) => {
      this.router.navigate(['/users']);
    });
  }

}
