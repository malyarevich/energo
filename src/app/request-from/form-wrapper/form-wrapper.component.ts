import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  pageTitle = "ПОДАННЯ ЗАЯВИ НА ПРИЄДНАННЯ В ЕЛЕКТРОННОМУ ВИГЛЯДІ";
  backgroundImage = "assets/image/zoeWriteGirl.jpg";
  @ViewChild("content") content: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
