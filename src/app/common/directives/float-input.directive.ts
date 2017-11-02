import {AfterContentInit, Directive, ElementRef, ViewChild} from '@angular/core';

@Directive({
  selector: '[appFloatInput]'
})
export class FloatInputDirective implements AfterContentInit{

  private _label: Element;
  private _input: Element;

  constructor(
      private elementRef: ElementRef
  ) { }

  public ngAfterContentInit() {
    this._input = this.elementRef.nativeElement.querySelector('input');
    this._label = this.elementRef.nativeElement.querySelector('label');
    (this._input['value'] == '') ? this._label.classList.remove('active') : this._label.classList.add('active');

    this._input.addEventListener('focus', this.inputFocus.bind(this));
    this._input.addEventListener('blur', this.inputBlur.bind(this));
  }

  public inputFocus(evt) {
    this._label.classList.add('active');
    this._label.classList.add('highlight');
  }

  public inputBlur(evt) {
      this._label.classList.remove('highlight');
      if (this._input['value'] == '') this._label.classList.remove('active');
  }

}
