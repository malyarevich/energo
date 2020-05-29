import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { RequestFormService, ResListType } from '../services/request-form.service';
import { filter } from 'rxjs/operators';
import { refDocument } from '../models/form.model';

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
  selector: 'app-step-download',
  templateUrl: './step-download.component.html',
  styleUrls: ['./step-download.component.scss']
})
export class StepDownloadComponent implements OnInit {

  get refDocument(): string {
    return refDocument;
  }

  get options(): any {
    return this._options;
  }

  @Input() fieldItem: any;
  _options: [] = [];


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
