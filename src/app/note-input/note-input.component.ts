import { Component } from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})
export class NoteInputComponent {
  note = '';
  affich = '';
  notes = [''];

  onCreateNote(event: Event){
    this.note = (<HTMLInputElement>event.target).value;
  }

  onAffichNote(){
    this.notes.push(this.note);
    this.affich = ''+this.note;
  }
}
