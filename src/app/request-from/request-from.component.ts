import { Component, OnInit } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  sectionFields
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';

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
