import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = ['server1',  'server2'];

  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.servers.push('newServer');
  }
}
