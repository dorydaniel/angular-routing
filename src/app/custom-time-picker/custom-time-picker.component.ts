import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-time-picker',
  templateUrl: './custom-time-picker.component.html',
  styleUrls: ['./custom-time-picker.component.scss'],
})
export class CustomTimePickerComponent implements OnInit {
  selectedInput = 'input-hour';
  isOneTimeClick = true;

  constructor() {}

  ngOnInit(): void {}

  addEvent(event) {
    if (event.srcElement.id == 'input-hour') {
      this.selectedInput = 'input-hour';
    }
    if (event.srcElement.id == 'input-minute') {
      this.selectedInput = 'input-minute';
    }

    if (this.isOneTimeClick) {
      document.getElementById('input-hour').addEventListener('focus', () => {
        this.selectedInput = 'input-hour';
      });
      document.getElementById('input-minute').addEventListener('focus', () => {
        this.selectedInput = 'input-minute';
      });
      this.isOneTimeClick = false;
    }
  }

  increment() {
    (
      document.getElementById(this.selectedInput) as HTMLInputElement
    ).value += 1;
  }

  decrement() {
    (
      document.getElementById(this.selectedInput) as HTMLInputElement
    ).value += 0;
  }
}
