import { Component, OnInit } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {

  displayDetails = false;
  secretAccessLogs = [];

  constructor() { }

  ngOnInit() {
  }

  accessPassword() {
    this.displayDetails = !this.displayDetails;

    if (this.displayDetails) {

      const logDetails = {
        accessTime: new Date().toTimeString(),
        index: this.secretAccessLogs.length + 1
      };
      this.secretAccessLogs.push(logDetails);
    }

  }

  getColor(index) {
    return index >= 5 ? 'cornflowerblue' : 'transparent';
  }
}
