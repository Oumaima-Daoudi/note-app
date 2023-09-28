import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css',
  ]
})
export class TodoComponent implements OnInit {
  todos: any[]=[];
  isEditMode = false;
  editedTaskId: string ='';
  editedTaskContent: string = '';
  deleteItem = false;
  selectedTime: string = '';


  /* currentDate = formatDate(new Date(),'HH:mm','en_US'); */
  currentDate = new Date();
  currentHours = this.currentDate.getHours();
  currentMinutes = this.currentDate.getMinutes();
  currentTime = `${this.currentHours}:${this.currentMinutes < 10 ? '0' : ''}${this.currentMinutes}`;

  constructor(private commonService: CommonService, private toast: NgToastService) {

  }


  ngOnInit(): void {
     this.commonService.firestoreCollection.valueChanges({idField: 'id'}).subscribe(item=>{
       this.todos = item.sort((a:any, b:any) =>
       { return a.isDone - b.isDone});
       console.log(this.todos);
       setInterval(() => {
        this.todos.forEach((todo: any) => {
          const deadline = new Date(todo.deadline);
          console.log("deadline");

          console.log(deadline);
          console.log("currentDate");
          console.log(this.currentDate);

          // Check if the deadline is earlier than the current time
          if (deadline.getTime() < this.currentDate.getTime()) {
            setTimeout(() => {
              this.commonService.deleteTodo(todo.id); // Delete the item
            }, 3000);
            this.toast.warning({detail:"Ouups",summary:'Task failed',duration:3000, position:'topCenter'});
          }
        });
      }, 60000); // Check every minute
    });

}

editTask(taskId: string) {
  // Find the task by ID and enter edit mode
  const task = this.todos.find((t) => t.id === taskId);
  if (task) {
    this.isEditMode = true;
    this.editedTaskId = taskId;
    this.editedTaskContent = task.note;
  }
}
updateTaskContent(newContent: string) {
  // Update task content in Firestore and exit edit mode
  if (this.editedTaskId) {
    this.commonService.updateTodoContent(this.editedTaskId, newContent);
    this.isEditMode = false;
    /* this.editedTaskId = null;  */
    this.editedTaskContent = '';
  }

}
cancelEditTask() {
  // Exit edit mode without saving changes
  this.isEditMode = false;
  this.editedTaskContent = '';
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


}
