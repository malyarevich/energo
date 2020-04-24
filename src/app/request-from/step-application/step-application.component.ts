import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { RequestFormService } from '../services/request-form.service';
import {
  radioApplicationList
} from '../models/form.model';

@Component({
  selector: 'app-step-application',
  templateUrl: './step-application.component.html',
  styleUrls: ['./step-application.component.scss']
})
export class StepApplicationComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  public myGroup: FormGroup;

  get radioApplicationList() {
    return radioApplicationList;
  }

  constructor(private reqForm: RequestFormService) { }

  ngOnInit(): void {
    this.myGroup = this.reqForm.getFormGroup();
  }

  isPreviousStepDone(step: string, index: number): boolean {
    if (index > 0) {
      return this.reqForm.isPreviousStepDone(step, index);
    }
    return true;
  }

  isDoneStep(step: string): boolean {
    return this.reqForm.isDoneStep(step);
  }

  doneStep(step: string, value: string) {
    this.reqForm.doneSteps = { ...this.reqForm.doneSteps, [step]: value };
  }

  setChoose(id: string, step: string) {
    this.doneStep(step, id);
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
