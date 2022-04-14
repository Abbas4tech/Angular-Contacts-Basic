import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggingService } from '../services/Logging.service';

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
  providers: [LoggingService],
})
export class AddFormComponent implements OnInit {
  @Output() settingData: EventEmitter<{
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
  @Input() formState!: boolean;
  @Input() editUserData!: {
    fullname: string;
    email: string;
    imageUrl: string;
    id: number;
    isSelected: boolean;
  };
  @Output() formClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() modalHandler: EventEmitter<{ title: string; message: string }> =
    new EventEmitter<{ title: string; message: string }>();

  constructor(private loggingService: LoggingService) {}

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
    this.loggingService.onLoggingData(this.AddUserForm.value);
    this.AddUserForm.value.id = Math.random();
    this.AddUserForm.value.isSelected = false;
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
