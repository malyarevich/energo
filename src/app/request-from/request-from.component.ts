import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  sectionFields,
  firstChecklist,
  secChecklist,
  documentsForDownload,
  refDocument
} from './models/form.model';
import { FormService } from './form.service';

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
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']
})
export class RequestFromComponent implements OnInit {
  behaviorModel = {
    options1: false,
    options2: false
  };

  myGroup: FormGroup;
  emailFormControl: FormControl;

  refDocument = refDocument;

  // from model
  sectionFields = sectionFields;
  firstChecklist = firstChecklist;
  secChecklist = secChecklist;
  documentsForDownload = documentsForDownload;

  matcher = new MyErrorStateMatcher();

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.myGroup = this.formService.getFormGroup();
    this.emailFormControl = this.formService.getEmailFormControl();
  }

  getFormValueById(id: string) {
    return this.formService.getFormValueById(id);
  }
  isFormErrorsById(id: string): boolean {
    // return this.formService.isFormErrorsById(id);
    return false;
  }

  dirtOption(group: any) {
    this.behaviorModel[group] = true;
  }

  setPetitionTo(event: any) {
    // console.log('setPetitionTo', event);
    this.dirtOption(event.target.name); // name is group
    // this.petitionTo = event.target.value;
  }

  setPetitionFrom(event: any) {
    // console.log('setPetitionFrom', event);
    this.dirtOption(event.target.name); // name is group
    // this.petitionFrom = event.target.value;
  }

  isBehaviorOption(id: string): boolean {
    return this.behaviorModel[id];
  }

  changePdfFile(event: Event) {
    // console.log(event);
    this.formService.changePdfFile(event);
  }

  hasPdfFile(id: string) {
    return this.formService.hasPdfFile(id);
  }

  hasEmailError(type: string): boolean {
    return this.formService.hasEmailError(type);
  }

  send() {
    this.formService.sendForm();
  }
}
