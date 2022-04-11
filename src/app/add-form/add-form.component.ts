import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched {
        border: 2px solid darkred;
      }
    `,
  ],
})
export class AddFormComponent implements OnInit {
  @Output() settingData: EventEmitter<any> = new EventEmitter<any>();
  @Input() formState!: boolean;
  @Input() editUserData: any;
  @Output() formClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() modalHandler: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  AddUserForm!: FormGroup;
  ngOnInit(): void {
    this.AddUserForm = new FormGroup({
      fullname: new FormControl(
        this.editUserData ? this.editUserData.fullname : null,
        Validators.required
      ),
      email: new FormControl(
        this.editUserData ? this.editUserData.email : null,
        [Validators.required, Validators.email]
      ),
      imageUrl: new FormControl(
        this.editUserData ? this.editUserData.imageUrl : null
      ),
    });
  }
  close() {
    this.formClose.emit(!this.formState);
  }
  onSubmit() {
    console.log(this.AddUserForm.value);
    this.settingData.emit(this.AddUserForm.value);
    this.modalHandler.emit({
      title: `Contact ${this.editUserData ? 'Updated!' : 'Added!'}`,
      message: `Your Contact has been ${
        this.editUserData ? 'updated.' : 'added.'
      }`,
    });
    this.close();
  }
}
