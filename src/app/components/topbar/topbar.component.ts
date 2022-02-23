import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() eventChange = new EventEmitter<Event>();

  onClick(event: Event) {
    this.eventChange.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
