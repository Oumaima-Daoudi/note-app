import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css',
  ]
})
export class TodoComponent implements OnInit {
  todos: any[]=[];


  constructor(private commonService: CommonService) {

  }
  ngOnInit(): void {
     this.commonService.firestoreCollection.valueChanges({idField: 'id'}).subscribe(item=>{
       this.todos = item.sort((a:any, b:any) =>
       { return a.isDone - b.isDone});

     })
  }


  onClick(noteInput: HTMLInputElement){
    if (noteInput.value) {
      this.commonService.addTodo(noteInput.value);
      noteInput.value="";
    }
  }

  onStatusChange(id:string, newStatus:boolean){
    this.commonService.updateTodoStatus(id,newStatus)
  }

  onDelete(id: string){
    this.commonService.deleteTodo(id)
  }

}
