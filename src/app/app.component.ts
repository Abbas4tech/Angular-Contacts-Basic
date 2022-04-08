import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Contacts';
  formIsOpen = false;
  users: any = [
    {
      fullname: 'Dummy User',
      email: 'Dummyuser@test.com',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: Math.random(),
    },
  ];
  renderUsers(addedUserObj: any) {
    console.log(addedUserObj);
    this.users.push(addedUserObj);
    console.log(this.users);
  }
  deleteUser(userToBeDelete: number) {
    this.users = this.users.filter((user: any) => user.id !== userToBeDelete);
  }
  onClickHeaderAddButton(formOpenState: boolean) {
    this.formIsOpen = formOpenState;
  }
  onClickCancelOnForm(formCloseState: boolean) {
    this.formIsOpen = formCloseState;
  }
  ngOnInit(): void {}
}
