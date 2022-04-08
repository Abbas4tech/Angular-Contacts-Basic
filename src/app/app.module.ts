import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AddFormComponent } from './add-form/add-form.component';
import { CardComponent } from './UI/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { ModalComponent } from './UI/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    CardComponent,
    UserListComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
