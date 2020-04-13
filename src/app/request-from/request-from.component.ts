import { Component, OnDestroy, OnInit } from '@angular/core';
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
  specialRights,
  documentsForDownload,
  ignoredDocumentsForDownloadId,
  refDocument,
  strategyForDownload
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';
import { element } from 'protractor';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']
})
export class RequestFromComponent implements OnInit {

  myGroup: FormGroup;

  get documentsForDownload$() {
    return this.reqForm.documentsForDownload$;
  }

  get sectionFields(): any {
    return sectionFields;
  }

  constructor(private reqForm: RequestFormService) { }

  ngOnInit() {
    this.myGroup = this.reqForm.getFormGroup();
  }

  isDocumentsSelected(): boolean {
    return this.reqForm.isDocumentsSelected();
  }

  send() {
    this.reqForm.sendForm();
  }
}
