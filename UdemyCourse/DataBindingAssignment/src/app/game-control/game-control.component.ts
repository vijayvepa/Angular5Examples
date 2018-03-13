import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  gameEvent = new EventEmitter<number>();

  currentValue = 0;
  interval: NodeJS.Timer;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval =  setInterval(() => {
      this.currentValue++;
      this.gameEvent.emit(this.currentValue);
      }, 1000 );
  }

  onStop(){
    if (this.interval === undefined) {
      return;
    }

    clearInterval(this.interval);
  }

}
