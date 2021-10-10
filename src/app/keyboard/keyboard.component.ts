import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, AfterViewInit {
  @Input() formName: FormGroup;
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<='];
  showKeyboard = false;
  @Output() updatePasswordEvent = new EventEmitter<string>();
  password = '';

  @ViewChild('keydiv') keydiv: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let self = this;
    this.keydiv.nativeElement.addEventListener('keydown', function (event) {
      if (
        self.showKeyboard &&
        event.code === 'Enter' &&
        self.password.length > 5 &&
        self.formName.valid
      ) {
        self.showKeyboard = false;
      }
    });
  }

  openKeyboard() {
    this.numbers.reverse();
    this.keydiv.nativeElement.focus();

    if (!this.showKeyboard) {
      this.showKeyboard = true;
    }
  }

  closeKeyboard($event) {
    if (!$event.relatedTarget?.className.includes('key-input')) {
      this.showKeyboard = false;
      this.keydiv.nativeElement.blur();
    }
  }

  keynumClicked(number: string) {
    if (number === '<=') {
      this.password = this.password.substring(0, this.password.length - 1);
    } else if (this.password.length < 6) {
      this.password += number;
    }
    this.updatePasswordEvent.emit(this.password);
  }
}
