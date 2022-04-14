import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  @Input() modalState!: { title: string; message: string };
  constructor() {}
  onClickOkay() {
    this.closeModal.emit(!this.modalState);
  }
  ngOnInit(): void {}
}
