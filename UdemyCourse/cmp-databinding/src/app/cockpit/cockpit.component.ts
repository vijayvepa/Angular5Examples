import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerElement} from '../shared/server-element.model';
import {ServerType} from '../shared/server-type.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements=[];
  newServerName = '';
  newServerContent = '';

  @Output()
  serverElementCreated = new EventEmitter<ServerElement>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverElementCreated.emit(
      new ServerElement(this.newServerName, ServerType.Server, this.newServerContent));
  }

  onAddBlueprint() {
    this.serverElementCreated.emit(
      new ServerElement(this.newServerName, ServerType.Blueprint, this.newServerContent));
  }

}
