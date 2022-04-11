import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrorMessage]',
})
export class ErrorMessageDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
