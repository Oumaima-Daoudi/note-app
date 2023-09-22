import { Component } from '@angular/core';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent {
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
