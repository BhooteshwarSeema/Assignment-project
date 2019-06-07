import { Component, OnInit, Input } from '@angular/core';
import { user } from './user';
import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   usersProfile: user[] = [
    new user('seema', 1),
    new user('rahul', 2)

   ];

  constructor() {


  }
  ngOnInit() {

  }
}
