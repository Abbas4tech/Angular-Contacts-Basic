import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  constructor() {}
  AddUserForm!: FormGroup;
  ngOnInit(): void {
    this.AddUserForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    console.log(this.AddUserForm.value);
  }
}
