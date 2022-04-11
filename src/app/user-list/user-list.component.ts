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
    isSelected: boolean;
  }[];
  @Output() onDeleteUser: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMultipleDeleteUsers: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditUser: EventEmitter<any> = new EventEmitter<any>();
  // isChecked!: boolean;
  // itemsToBeDeleted: any = [];
  usersCopy!: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  }[];
  SelectAll!: boolean;
  constructor() {}
  onDelete(userId: number) {
    this.onDeleteUser.emit(userId);
  }
  onEdit(userObj: any) {
    this.onEditUser.emit(userObj);
  }
  onSelectContact($event: any) {
    const id = +$event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked);
    this.usersCopy = this.usersList;
    this.usersCopy = this.usersCopy.map((user: any) => {
      if (user.id === id) {
        user.isSelected = isChecked;
        this.SelectAll = false;
        return user;
      }
      if (id === -1) {
        user.isSelected = this.SelectAll;
        return user;
      }
      return user;
    });
    console.log(this.usersList);
  }
  onMultipleDelete() {
    this.usersList = this.usersList.filter((user: any) => !user.isSelected);
  }
  // checkValue(value: any) {
  //   console.log(value);
  //   if (this.itemsToBeDeleted.includes(value) || !this.isChecked) {
  //     return;
  //   }
  //   if (value) this.itemsToBeDeleted.push(value);
  //   if (!value) this.itemsToBeDeleted.filter((item: any) => item !== value);
  //   console.log(this.itemsToBeDeleted);
  // }
  ngOnInit(): void {}
}
