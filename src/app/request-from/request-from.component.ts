import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  sectionRequest,
  sectionContacts,
  sectionAddressObject
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']
})
export class RequestFromComponent implements OnInit {
  @Input("title") pageTitle = "Title";

  myGroup: FormGroup;
//  firstFormGroup: FormGroup;

  get documentsForDownload$() {
    return this.reqForm.documentsForDownload$;
  }

  get sectionRequest(): any {
    return sectionRequest;
  }
  get sectionContacts(): any {
    return sectionContacts;
  }
  get sectionAddressObject(): any {
    return sectionAddressObject;
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
