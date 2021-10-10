import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  amount = '2500|5000000';
  currency = 'USD|LBP';

  testAmount = '';

  @ViewChild('logForm') logForm: ElementRef<HTMLFormElement>;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    let self = this;
    this.logForm.nativeElement.addEventListener('keydown', function (event) {
      // to catch the "Enter" keydown anywhere in the form,
      // including in the virtual keyboard
      if (event.code === 'Enter' && self.loginForm.valid) {
        // prevent the form from submitting twice
        event.preventDefault();
        self.formSubmit();
      }
    });
  }

  updatePassword($event: string) {
    this.loginForm.get('password').setValue($event);
  }

  formSubmit() {
    // we check if form is pending before submitting it,
    // because we have an event listener on keydown "Enter",
    // so that way we can't spam "Enter"
    if (!this.loginForm.pending) {
      console.log(this.loginForm.value);
    }
  }
}
