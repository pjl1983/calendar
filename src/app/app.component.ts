import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date: any = new Date();
  currentMonth: number[] = [];
  currentMonthNumber: number = null;
  year: number;
  firstDay: Date;
  lastDay: Date;
  lastDayNumber: number = undefined;
  selectedDate: Date = this.date;
  selectedMonth: number;
  selectedYear: number;
  monthName: string;
  monthStartOffset: number;
  monthEndOffset: number;
  active: boolean = true;
  numericDay: number = this.date.getDate();
  day: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  month: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor() {
  }

  selectDate(i) {
    this.selectedDate = new Date(this.firstDay.setDate(i));
    this.numericDay = i;
    this.checkMonthView();
  }

  checkMonthView() {
    this.active = this.selectedMonth !== this.selectedDate.getMonth() || this.selectedYear !== this.selectedDate.getFullYear() ? false : true;
  }

  updateView(x) {
    this.currentMonth = [];
    this.currentMonthNumber = this.currentMonthNumber + x;
    this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth() + this.currentMonthNumber, 1);
    this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1 + this.currentMonthNumber, 0);
    this.selectedMonth = this.firstDay.getMonth();
    this.selectedYear = this.firstDay.getFullYear();
    this.lastDayNumber = this.lastDay.getDate();
    this.monthName = this.month[this.firstDay.getMonth()];
    this.year = this.firstDay.getFullYear();
    this.monthStartOffset = this.firstDay.getDay();
    this.monthEndOffset = this.lastDay.getDay();
    this.checkMonthView();

    for (let i = 1; i <= this.monthStartOffset; i++) {
      this.currentMonth.push(null);
    }
    for (let i = 1; i <= this.lastDayNumber; i++) {
      this.currentMonth.push(i);
    }
    for (let i = this.monthEndOffset; i < 6; i++) {
      this.currentMonth.push(null);
    }
  }

  ngOnInit() {
    this.updateView(0);
  }
}

