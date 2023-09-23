import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-app';
  allowCreateNote = false;

  note = '';
  notes: string[] = [];

  onAffichNote() {
    this.allowCreateNote = true;
    this.notes.push(this.note);
    this.note = '';
  }

  
   onCreateNote(event: Event){
    this.note = (<HTMLInputElement>event.target).value;
    console.log(this.note);
  }

}
