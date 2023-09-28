import { Component , Input, Output, EventEmitter, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editable-element',
  templateUrl: './editable-element.component.html',
  styleUrls: ['./editable-element.component.css']
})
export class EditableElementComponent {
  @Input() taskContent: string = '';
  @Input() taskId: string= '';
  @Output() onSave = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();


  editedContent: string = this.taskContent;

  constructor() {

  }

  saveChanges() {
   // Emit the edited content to the parent component (TodoComponent)
    this.onSave.emit(this.editedContent);
  }

  cancelEdit(){
    // Notify the parent component (TodoComponent) to cancel editing
    this.onCancel.emit();
  }


}
