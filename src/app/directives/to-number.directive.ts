import { Directive, ElementRef, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Directive({
  selector: '[appToNumber]'
})

export class ToNumberDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {  }

  numberParser(valueToParser: any): number {
    const inputValue = Number(valueToParser);
    console.log(inputValue);
    return inputValue;
  }
}
