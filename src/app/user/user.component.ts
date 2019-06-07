import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   id: string;
   name: string;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
// tslint:disable-next-line: no-string-literal
   this.id = this.route.snapshot.params['id'];
// tslint:disable-next-line: no-string-literal
   this.route.params.subscribe(
     (params: Params) => {
// tslint:disable-next-line: no-string-literal
      this.name = params['name'];
     }
   );
   console.log(this.id + ' and ' + this.name);
}
}
