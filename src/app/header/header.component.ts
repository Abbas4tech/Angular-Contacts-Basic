import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() heading!: string;
  @Input() formState!: boolean;
  @Output() formOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
  open() {
    this.formOpen.emit(!this.formState);
  }

  ngOnInit(): void {}
}
