import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { refDocument } from '../models/form.model';

import { MyErrorStateMatcher } from '../error-list/error-list.component';


@Component({
  selector: 'app-step-download',
  templateUrl: './step-download.component.html',
  styleUrls: ['./step-download.component.scss']
})
export class StepDownloadComponent implements OnInit {
  @Input() fieldItem: any;
  @Input() fg: FormGroup;

  get refDocument(): any {
    return refDocument;
  }

  public matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
