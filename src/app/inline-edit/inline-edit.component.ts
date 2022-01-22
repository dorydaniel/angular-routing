import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent implements OnInit {
  @ViewChild('defaultInput') defaultInput: ElementRef<HTMLInputElement>;

  @ViewChild('countryCodeInput') countryCodeInput: ElementRef<HTMLInputElement>;
  @ViewChild('areaCodeInput') areaCodeInput: ElementRef<HTMLInputElement>;
  @ViewChild('numberCodeInput') numberCodeInput: ElementRef<HTMLInputElement>;

  @Input() initialValue: string = '';
  @Input() isPhone: boolean = false;

  @Output() doneEditing = new EventEmitter<string>();

  isEdit = false;

  constructor() {}

  ngOnInit(): void {}

  editClick() {
    this.isEdit = true;
  }

  canelEdit() {
    this.isEdit = false;
  }

  doneEdit() {
    this.isEdit = false;
    if (this.isPhone) {
      this.initialValue =
        this.countryCodeInput.nativeElement.value +
        '-' +
        this.areaCodeInput.nativeElement.value +
        '-' +
        this.numberCodeInput.nativeElement.value;
    } else {
      this.initialValue = this.defaultInput.nativeElement.value;
    }
    this.doneEditing.emit(this.initialValue);
  }
}
