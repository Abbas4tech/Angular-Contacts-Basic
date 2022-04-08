import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  @Input() usersList!: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
  }[];
  @Output() onDeleteUser: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  onDelete(userId: number) {
    this.onDeleteUser.emit(userId);
  }
  ngOnInit(): void {}
}
