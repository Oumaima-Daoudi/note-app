import { Component ,  ChangeDetectionStrategy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@matheo/datepicker';
import { DateAdapter, DateUnit } from '@matheo/datepicker/core';
import { CommonService } from '../shared/common.service';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements OnInit{
  currentDate = new Date();
  currentHours = this.currentDate.getHours();
  currentMinutes = this.currentDate.getMinutes();


  currentTime = `${this.currentHours}:${this.currentMinutes < 10 ? '0' : ''}${this.currentMinutes}`;

  constructor(private commonService: CommonService) {


  }
  ngOnInit(): void {


  }
  /* onClick(noteInput: HTMLInputElement , deadlineInput: HTMLInputElement){
    if (noteInput.value) {
      let deadline: Date | null = null;
      if (noteInput.value && deadlineInput) {
        const time = deadlineInput.value;

         const timeParts = time.split(':');
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const deadline = new Date();
        deadline.setHours(hours+2);
        deadline.setMinutes(minutes);

         // in the database DATE IS NORMAL

        }
        this.commonService.addTodo(noteInput.value, deadline);

        noteInput.value="";
        deadlineInput.value = "";
    }
  } */
  onClick(noteInput: HTMLInputElement, deadlineInput: HTMLInputElement) {
    if (noteInput.value) {
      const time = deadlineInput.value;
      console.log(time);
      const timeParts = time.split(':');
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);
      const deadline = new Date();
      deadline.setHours(hours + 2);
      deadline.setMinutes(minutes);
      console.log("hada deadline");

      console.log(deadline.getTime());

      console.log("hada lcurrent date");
      
      console.log(this.currentDate.getTime());

      console.log("the normal date");
      // in the database DATE IS NORMAL

      this.commonService.addTodo(noteInput.value, deadline);

      noteInput.value = "";
      deadlineInput.value = "";
    }
  }



}
