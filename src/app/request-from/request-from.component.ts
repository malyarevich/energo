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
  refDocument,
  strategyForDownload
} from '../models/form.model';
import { FormService } from '../services/form.service';
import { element } from 'protractor';

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

  refDocument = refDocument;

  // from model
  sectionFields = sectionFields;
  firstChecklist = firstChecklist;
  secChecklist = secChecklist;
  documentsForDownload = [];

  matcher = new MyErrorStateMatcher();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.myGroup = this.formService.getFormGroup();
  }

  getFormValueById(id: string) {
    return this.formService.getFormValueById(id);
  }

  dirtOption(group: any) {
    this.behaviorModel[group] = true;
  }

  setPetitionTo(event: any) {
    // console.log('setPetitionTo', event);
    this.dirtOption(event.target.name); // name is group
    this.formService.petitionTo = event.target.value;
  }

  filterDocumentsForDownload(event: Event | any) {
    this.documentsForDownload = [];
    const { numberList } = strategyForDownload.find(element => (event.target.id === element.id))
    numberList.forEach(id => {
      this.documentsForDownload.push(documentsForDownload[id]);
    })
    console.log('setPetitionFrom', this.documentsForDownload);
  }

  setPetitionFrom(event: Event | any, option: string) {
    this.filterDocumentsForDownload(event);

    this.dirtOption(option); // name is group
    this.formService.petitionFrom = event.target.id;
  }

  isBehaviorOption(group: string): boolean {
    return this.behaviorModel[group];
  }

  changeUserDocFiles(event: Event) {
    // console.log(event);
    this.formService.changeUserDocFiles(event);
  }

  hasUserDocFiles(id: string) {
    return this.formService.hasUserDocFiles(id);
  }

  send() {
    this.formService.sendForm();
  }

  isDocumentsSelected(): boolean {
    let isAllSelected = this.documentsForDownload.length > 0 ? true : false;
    this.documentsForDownload.forEach(documentItem => {
      if (!this.hasUserDocFiles(documentItem.id)) {
        isAllSelected = false;
      }
    })
    return isAllSelected;
  }
}
