import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = ''

  @Output() clicked: EventEmitter<boolean> = new EventEmitter()

  onUserClicked(): void {
    this.clicked.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
