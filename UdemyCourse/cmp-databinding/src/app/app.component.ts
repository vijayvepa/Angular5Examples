import { Component } from '@angular/core';
import {ServerElement} from './shared/server-element.model';
import {ServerType} from './shared/server-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  constructor() {
    this.serverElements.push(new ServerElement('Test', ServerType.Server, 'Just a test!'));
  }

  onServerElementAdded(server: ServerElement) {
    this.serverElements.push(server);
  }

  onBlueprintAdded() {

  }
}
