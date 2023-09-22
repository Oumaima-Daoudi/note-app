import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteContentComponent } from './note-content/note-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteInputComponent,
    NoteContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
