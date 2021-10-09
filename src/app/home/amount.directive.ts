import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[amountFilter]',
})
export class AmountDirective {
  @Input()
  amount: string = '';

  constructor() {}

  // @HostListener('keydown')
  // onKeyDown() {
  //   console.log(this.amount);
  // }
}
