import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  id = 10;
  status = 'online';

  constructor() {
    this.status = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getColor(){
    return this.status === 'offline' ? 'orange' : 'cornflowerblue';
  }

  getServerStatus() {
    return 'status:' + this.status;
  }
}
