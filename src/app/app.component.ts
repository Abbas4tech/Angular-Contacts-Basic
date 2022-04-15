import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Contacts';
  formIsOpen: boolean = false;
  modalMesasge!: { title: string; message: string };
  modalIsOpen: boolean = false;
  editUserData!: any;
  users: any = [
    {
      fullname: 'Dummy User - 1',
      email: 'Dummyuser@test.com',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: Math.random(),
      isSelected: false,
      phone: 7977166580,
      status: 'Active',
    },
    {
      fullname: 'New User',
      email: 'user@dummy.com',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: Math.random(),
      isSelected: false,
      phone: 7977166580,
      status: 'Inactive',
    },
    {
      fullname: 'Old User',
      email: 'Olduser@test.com',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: Math.random(),
      isSelected: false,
      phone: 7977166580,
      status: 'Inactive',
    },
  ];

  renderUsers(addedUserObj: any) {
    console.log(addedUserObj);
    if (this.editUserData) {
      console.log(this.users.indexOf(this.editUserData));
      this.users.splice(this.users.indexOf(this.editUserData), 1, addedUserObj);
      this.editUserData = null;
    } else {
      this.users.push(addedUserObj);
      console.log(this.users);
    }
  }

  deleteUser(userToBeDeleted: number) {
    console.log(userToBeDeleted);
    this.users = this.users.filter((user: any) => user.id !== userToBeDeleted);
    console.log(this.users);
    this.modalMesasge = {
      title: 'Deleted!',
      message: 'Your Contact has been delete!',
    };
  }

  editUser(userData: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
    phone: number;
    status: string;
  }) {
    this.editUserData = userData;
    this.formIsOpen = true;
    console.log(this.editUserData);
  }

  formHandler(currentFormState: boolean) {
    this.formIsOpen = currentFormState;
    if (this.editUserData) this.editUserData = null;
  }

  sendModalDetail(modalDetails: { title: string; message: string }) {
    this.modalMesasge = modalDetails;
  }

  onCloseModal(modalCloseState: any) {
    this.modalMesasge = modalCloseState;
  }

  afterMultipleDeletes(
    usersCopy: {
      fullname: string;
      email: string;
      imageUrl: string;
      id: number;
      isSelected: boolean;
      phone: number;
      status: string;
    }[]
  ) {
    this.users = usersCopy;
    this.modalMesasge = {
      title: 'Deleted!',
      message: 'Deleted Selected contacts!',
    };
  }

  ngOnInit(): void {}
}
