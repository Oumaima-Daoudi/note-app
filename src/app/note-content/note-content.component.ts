import { Component, OnInit,Input , EventEmitter} from '@angular/core';
import { CommonService } from '../shared/common.service'


@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit{

  //@Input() allowCreateNote: boolean;
  //@Input() notes: string[];
  constructor( ){


  }

  ngOnInit(): void {

  }


}
