import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { RequestFormService, ResListType } from '../services/request-form.service';

import { MyErrorStateMatcher } from '../error-list/error-list.component';

@Component({
  selector: 'app-step-address-info',
  templateUrl: './step-address-info.component.html',
  styleUrls: ['./step-address-info.component.scss']
})
export class StepAddressInfoComponent implements OnInit {
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
