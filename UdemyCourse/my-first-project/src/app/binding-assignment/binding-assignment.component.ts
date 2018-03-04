import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.css']
})
export class BindingAssignmentComponent implements OnInit {

  username = 'Username';

  constructor() { }

  ngOnInit() {
  }

  allowReset() {
    return this.username !== '';
  }

  reset(){
    this.username = '';
  }
}
