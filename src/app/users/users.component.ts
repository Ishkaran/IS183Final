import { Component, OnInit } from '@angular/core';
import { userService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class usersComponent implements OnInit {

  users:Array<Object>;

  constructor(
    private userService: userService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getusers();
    console.log('users', this.users);
  }

  getusers() {
     this.userService.getusers().then((resp) => {
      this.users = resp;
     });  
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['user-create']);
  }

  deleteuser(id:string) {
    console.log(`deleting user with id of : ${id}`);
    this.userService.deleteuser(id).then((resp) => {
      if(resp) {
        this.users = this.users.filter((user) => {
          return user['id'] != id;
        });
      }
    });
  }

}
