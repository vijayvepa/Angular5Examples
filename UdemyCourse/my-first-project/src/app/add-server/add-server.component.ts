import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  allow = false;

  constructor() {
    setTimeout( () => {this.allow = true; } , 2000);
  }

  getAllowed() {
    return this.allow ? 'allowed' : 'notallowed';
  }

  ngOnInit() {
  }

}
