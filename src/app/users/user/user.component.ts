import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   console.log(this.activatedRoute.snapshot.params['id'])
    this.userService.getuserById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp user', resp);
        this.user = resp;
     });
  }

  updateuser(id, user:Object) {
    console.log('user', user);
    
    this.userService.updateuser(id, user).then((resp) => {
      console.log('resp', resp);
      if(resp) {
        this.router.navigate(['users']);
      }
    });
  }

}
