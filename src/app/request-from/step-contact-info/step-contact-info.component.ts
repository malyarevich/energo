import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { RequestFormService } from '../services/request-form.service';

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

  public myGroup: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(private reqForm: RequestFormService) { }

  ngOnInit() {
    this.myGroup = this.reqForm.getFormGroup();
  }

}
