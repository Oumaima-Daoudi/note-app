import { Component ,  ChangeDetectionStrategy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@matheo/datepicker';
import { DateAdapter, DateUnit } from '@matheo/datepicker/core';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements OnInit{
  currentDate:any = new Date();
     currentHours = this.currentDate.getHours();
     currentMinutes = this.currentDate.getMinutes();



  constructor() {


  }
  ngOnInit(): void {
    console.log(this.currentDate);
    console.log(this.currentHours);
     console.log(this.currentMinutes);
  }



}
