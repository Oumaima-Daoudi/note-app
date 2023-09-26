import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { NgToastService } from 'ng-angular-popup';
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css',
  ]
})
export class TodoComponent implements OnInit {
  todos: any[]=[];
  deleteItem = false;
  showComponent = false;
  selectedTime: string = '';
  /* currentDate = formatDate(new Date(),'HH:mm','en_US'); */
  currentDate = new Date();
  currentHours = this.currentDate.getHours();
  currentMinutes = this.currentDate.getMinutes();


  /* currentTime = `${this.currentHours}:${this.currentMinutes < 10 ? '0' : ''}${this.currentMinutes}`; */




  constructor(private commonService: CommonService, private toast: NgToastService) {

  }
  ngOnInit(): void {
     this.commonService.firestoreCollection.valueChanges({idField: 'id'}).subscribe(item=>{
       console.log(this.todos);
       console.log( this.currentDate);
       this.todos = item.sort((a:any, b:any) =>
       { return a.isDone - b.isDone});
       this.todos.forEach((todo: any) => {
        const deadline = new Date(todo.deadline); // Convert deadline to a Date object

        // Check if the deadline is earlier than the current time
        if (deadline.getTime() < this.currentDate.getTime()) {
          setTimeout(() => {
            this.commonService.deleteTodo(todo.id); // Delete the item
          }, 3000);
          this.toast.warning({detail:"Ouups",summary:'Task failed',duration:3000, position:'topCenter'});
        }

     })

  })
}


  onClick(noteInput: HTMLInputElement , deadlineInput: HTMLInputElement){
    if (noteInput.value) {
      const time = deadlineInput.value;
      console.log(time);
       const timeParts = time.split(':');
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);
      const deadline = new Date();
      deadline.setHours(hours+2);
      deadline.setMinutes(minutes);
      console.log("hada deadline");
      console.log(typeof deadline);
      console.log(deadline.getTime());

      console.log("hada lcurrent date");
      console.log(typeof this.currentDate);
      console.log(this.currentDate.getTime());


      console.log("the normal date");
       // in the database DATE IS NORMAL


      this.commonService.addTodo(noteInput.value, deadline);

      noteInput.value="";
      deadlineInput.value = "";
    }
  }


  onStatusChange(id:string, newStatus:boolean){
    this.commonService.updateTodoStatus(id,newStatus)
  }


  onDeleteItem(id:string, status:boolean){
    if(status){
      setTimeout(()=>{this.commonService.deleteTodo(id)
      },3000);
      this.toast.success({detail:"Congrats",summary:'Task done successfully',duration:3000, position:'topCenter'});
    }

  }

  onDelete(id: string){
    this.commonService.deleteTodo(id)
  }

  toggleComponent(){
    this.showComponent = !this.showComponent;
  }
  updateTodoItemchange(newNote: string, id: string) {
    this.commonService.updateTodoItem(id,newNote)
  }


}
