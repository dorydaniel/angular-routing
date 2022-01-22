import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AmountDirective } from './home/amount.directive';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { CustomTimePickerComponent } from './custom-time-picker/custom-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AmountDirective,
    KeyboardComponent,
    InlineEditComponent,
    TimePickerComponent,
    CustomTimePickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
