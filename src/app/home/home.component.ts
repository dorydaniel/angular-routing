import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// const screenshot = require('screenshot-desktop');
// const fs = require('fs');
// const nodemailer = require('nodemailer');

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  amount = '2500|5000000';
  currency = 'USD|LBP';

  testAmount = '';

  imageUrl = '';

  acceptedImagType = 'image/png,image/jpg,image/jpeg';

  isTimePicker = false;

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

  takeScreenshot() {
    // screenshot({ format: 'png', filename: 'shot.png' })
    //   .then((img) => {
    //     // img: Buffer filled with jpg goodness
    //     // ...
    //     this.imageUrl = img;
    //   })
    //   .catch((err) => {
    //     // ...
    //   });
    // screenshot()
    //   .then((img) => {
    //     fs.writeFile('out.jpg', img, function (err) {
    //       if (err) {
    //         throw err;
    //       }
    //       this.imageUrl = img;
    //       console.log('written to out.jpg');
    //     });
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });
  }

  inputChange(e) {
    let file = e.target.files[0];
    if (file) {
      console.log(file.size);
      if (this.acceptedImagType.split(',').includes(file.type)) {
        if (file.size < 220000) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            if (reader.result) {
              // slice --> data:image/jpeg;base64, <--
              console.log('RESULT', reader.result.slice(10 + file.type.length));
            } else {
              console.log('Failed');
            }
          };
          reader.onerror = () => {
            console.log('Failed');
          };
        } else {
          console.log('File is too large');
        }
      } else {
        console.log('File is not (png, jpg, jpeg)');
      }
    } else {
      console.log('No File selected');
    }
  }

  showTimePicker() {
    this.isTimePicker = !this.isTimePicker;
  }
}
