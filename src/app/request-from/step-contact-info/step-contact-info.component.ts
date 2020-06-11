import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RequestFormService, ResListType } from '../services/request-form.service';
import { filter } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../error-list/error-list.component';


@Component({
  selector: 'app-step-contact-info',
  templateUrl: './step-contact-info.component.html',
  styleUrls: ['./step-contact-info.component.scss']
})
export class StepContactInfoComponent implements OnInit {
  @Input() fieldItem: any;
  @Input() fg: FormGroup;
  _options: [] = [];

  get options(): any {
    return this._options;
  }
  public matcher = new MyErrorStateMatcher();

  constructor(private reqForm: RequestFormService) {
     this.reqForm.resList$.pipe(filter(resList => (resList !== null))).subscribe((resList: ResListType) => {
       this._options = resList.options;
     });
  }

  ngOnInit() {
    // this.resList = this.reqForm.resList;
  }

}
