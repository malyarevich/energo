import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { RequestFormService } from '../services/request-form.service';

import { COMMON_ERRORS } from './common-errors';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit {
  @Input() fieldId: string;
  fieldControl: AbstractControl;

  public $errorList: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public $isValid: BehaviorSubject<boolean> = new BehaviorSubject(true);

  get errorList(): string[] {
    return this.$errorList.getValue();
  }

  set errorList(value: string[]) {
    this.$errorList.next(value);
  }

  get isValid(): boolean {
    return this.$isValid.getValue();
  }

  set isValid(value: boolean) {
    this.$isValid.next(value);
  }


  constructor(private reqForm: RequestFormService) { }

  ngOnInit(): void {
    this.fieldControl = this.reqForm.getFieldControlById(this.fieldId);
    this.errorList = this.getParsedErrors();
    this.fieldControl.statusChanges.subscribe(s => {
      if (s === 'INVALID') {
        this.isValid = false;
        this.errorList = this.getParsedErrors();
      } else {
        this.isValid = true;
        this.errorList = [];
      }
    });
  }

  getParsedErrors(): string[] {
    const arrErrors: string[] = [];
    // console.log(this.fieldControl);

    if (
      this.fieldControl //true
      && (this.fieldControl.errors !== null) //true
      && (this.fieldControl.errors.required
        || this.fieldControl.errors.minlength
        || this.fieldControl.errors.maxlength
        || this.fieldControl.errors.email)
    ) {
      if (this.fieldControl.errors.required) {
        arrErrors.push(COMMON_ERRORS.required);
      }

      if (this.fieldControl.errors.minlength) {
        arrErrors.push(COMMON_ERRORS.minlength
          .replace('%actualLength%', this.fieldControl.errors.minlength.actualLength)
          .replace('%requiredLength%', this.fieldControl.errors.minlength.requiredLength)
        );
      }

      if (this.fieldControl.errors.maxlength) {
        arrErrors.push(COMMON_ERRORS.maxlength
          .replace('%actualLength%', this.fieldControl.errors.maxlength.actualLength)
          .replace('%requiredLength%', this.fieldControl.errors.maxlength.requiredLength)
        );
      }

      if (this.fieldControl.errors.email) {
        arrErrors.push(COMMON_ERRORS.email);
      }
    } else if (this.fieldControl.errors) {
      arrErrors.push(COMMON_ERRORS.pattern);
    }
    return arrErrors;
  }

  // isFieldTypeErrorById(id: string, type: string): boolean {
  //   return this.formService.isFieldTypeErrorById(id, type);
  // }

  // hasFieldErrorById(id: string): boolean {
  //   return this.formService.hasFieldErrorById(id);
  // }
}
