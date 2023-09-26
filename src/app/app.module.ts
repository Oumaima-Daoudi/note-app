import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MatDatepickerModule } from '@matheo/datepicker';
import { MatNativeDateModule } from '@matheo/datepicker/core';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgToastModule } from 'ng-angular-popup';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



import { AppComponent } from './app.component';
import { TodoComponent } from '../app/todo/todo.component';
import { environment } from 'src/environments/environment.development';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { EditableElementComponent } from './editable-element/editable-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DatepickerComponent,
    EditableElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    DateTimePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgToastModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
