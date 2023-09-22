import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  note: string = '';

  constructor() { }

  setNote(data: string){
    this.note = data;
  }

  getNote(){
    return this.note;
  }
}
