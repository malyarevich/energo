import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  pageTitle = "ПОДАННЯ ЗАЯВИ НА ПРИЄДНАННЯ В ЕЛЕКТРОННОМУ ВИГЛЯДІ";
  @ViewChild("content") content: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
