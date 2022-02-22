import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Output() result: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  modalResult(result: boolean) {
    if (!result) {
      this.result.emit(false)
    }
  }
}
