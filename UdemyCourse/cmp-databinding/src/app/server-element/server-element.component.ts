import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {ServerElement} from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {


  @Input()
  element: ServerElement;


  @ContentChild('customParagraph')
  customParagraph: ElementRef;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('Do something with customParagraph');
    console.log(this.customParagraph);
  }
}
