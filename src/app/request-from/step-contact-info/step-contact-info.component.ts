import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MyErrorStateMatcher } from '../error-list/error-list.component';


@Component({
  selector: 'app-step-contact-info',
  templateUrl: './step-contact-info.component.html',
  styleUrls: ['./step-contact-info.component.scss']
})
export class StepContactInfoComponent implements OnInit {
  @Input() fieldItem: any;
  @Input() fg: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
