import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { RequestFormService, ResListType } from '../services/request-form.service';
import { filter } from 'rxjs/operators';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-step-contact-info',
  templateUrl: './step-contact-info.component.html',
  styleUrls: ['./step-contact-info.component.scss']
})
export class StepContactInfoComponent implements OnInit {
  @Input() fieldItem: any;
  _options: [] = [];

  get options(): any {
    return this._options;
  }

  public myGroup: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(private reqForm: RequestFormService) {
     this.reqForm.resList$.pipe(filter(resList => (resList !== null))).subscribe((resList: ResListType) => {
       this._options = resList.options;
     });
  }

  ngOnInit() {
    this.myGroup = this.reqForm.getFormGroup();
    // this.resList = this.reqForm.resList;
  }

}
