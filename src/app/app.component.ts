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
