import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  allow = false;
  creating = false;
  newServerName = '';

  constructor() {
    setTimeout( () => {this.allow = true; } , 2000);
  }

  getAllowed() {
    return this.allow ? 'allowed' : 'notallowed';
  }

  getStatus() {
    return this.creating ? '...' : '+';
  }

  showInput() {
    return this.creating ? 'visible' : 'invisible';
  }

  onCreating() {
    this.creating = !this.creating;
  }

  onUpdateServerName(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.newServerName = target.value;
  }

  ngOnInit() {
  }

}
