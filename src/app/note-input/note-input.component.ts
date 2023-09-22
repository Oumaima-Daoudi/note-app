import { Component , OnInit} from '@angular/core';
import { CommonService } from '../shared/common.service'

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})
export class NoteInputComponent implements OnInit{
  note = '';
  affich = '';
  onCreateNote(event: Event){
    this.note = (<HTMLInputElement>event.target).value;
    console.log(this.note);
  }
  constructor(private shared : CommonService ){
  }

  ngOnInit(): void {
    this.shared.setNote(this.note)
  }

  onAffichNote(){
    this.affich = ''+this.note;
  }



}
