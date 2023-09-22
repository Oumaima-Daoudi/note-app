import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service'


@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit{
  notes: string[] = [];
  constructor(private shared : CommonService ){

  }

  ngOnInit(): void {
    this.notes.push(this.shared.getNote());
  }

}
