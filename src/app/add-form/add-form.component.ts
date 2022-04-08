import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
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
  constructor() {}
  AddUserForm!: FormGroup;
  ngOnInit(): void {
    this.AddUserForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      imageUrl: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.AddUserForm.value);
    this.settingData.emit(this.AddUserForm.value);
  }
}
