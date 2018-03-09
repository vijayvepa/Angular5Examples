import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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

  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;

  @Output()
  serverElementCreated = new EventEmitter<ServerElement>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(name: string ) {
    this.serverElementCreated.emit(
      new ServerElement(name, ServerType.Server, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(name: string ) {
    this.serverElementCreated.emit(
      new ServerElement(name, ServerType.Blueprint, this.serverContentInput.nativeElement.value));
  }

}
