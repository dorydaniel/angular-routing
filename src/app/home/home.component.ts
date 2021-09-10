import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  amount = '2500|5000000';
  currency = 'USD|LBP';

  constructor() {}

  ngOnInit() {}
}
