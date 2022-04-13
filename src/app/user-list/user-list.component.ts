import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/Logging.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [LoggingService],
})
export class UserListComponent implements OnInit {
  SelectAll!: boolean;
  numberOfUserSelected: number = 0;
  usersCopy!: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  }[]; //It was neccessory to create a hard copy of users Array , since facing some major issues and bugs because of refrence behavior of objects in javascript

  @Input() usersList!: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  }[];
  @Output() onDeleteUser: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMultipleDeleteUsers: EventEmitter<
    {
      fullname: string;
      email: string;
      imageUrl: string;
      id: number;
      isSelected: boolean;
    }[]
  > = new EventEmitter<
    {
      fullname: string;
      email: string;
      imageUrl: string;
      id: number;
      isSelected: boolean;
    }[]
  >();
  @Output() onEditUser: EventEmitter<{
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  }> = new EventEmitter<{
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  }>();

  constructor(private loggingService: LoggingService) {}

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

    this.usersCopy = [...this.usersList];
    this.usersCopy = this.usersCopy.map((user: any) => {
      if (user.id === id) {
        user.isSelected = isChecked;
        user.isSelected
          ? this.numberOfUserSelected++
          : this.numberOfUserSelected--;
        this.SelectAll = false;

        return user;
      }

      if (id === -1) {
        user.isSelected = this.SelectAll;
        this.numberOfUserSelected++;
        return user;
      }
      return user;
    });
    this.loggingService.onLoggingData(this.usersCopy);
  }

  onMultipleDelete() {
    this.usersCopy = this.usersCopy.filter((user: any) => !user.isSelected);
    this.numberOfUserSelected = 0;
    this.SelectAll = false;
    this.usersCopy.forEach((user: any) => user.isSelected === false);
    this.onMultipleDeleteUsers.emit(this.usersCopy);
  }

  ngOnInit(): void {}
}
