import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  sectionRequest,
  sectionContacts,
  sectionAddress
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']
})
export class RequestFromComponent implements OnInit {
  @Input("title") pageTitle = "Title";

  requestFormGroup: FormGroup;
//  firstFormGroup: FormGroup;

  get documentsForDownload$() {
    return this.reqForm.documentsForDownload$;
  }

  //documents
  get sectionRequest(): any {
    return sectionRequest;
  }
  get personalInfo(): any {
    return this.reqForm.getFormGroup().controls['personalInfo'] as FormGroup;
  }
  //contacts
  get sectionContacts(): any {
    return sectionContacts;
  }
  get contacts(): any {
    return this.reqForm.getFormGroup().controls['contacts'] as FormGroup;
  }
  //address
  get sectionAddress(): any {
    return sectionAddress;
  }
  get location(): any {
    return this.reqForm.getFormGroup().controls['location'] as FormGroup;
  }
  //radioGroup
  get clientType(): any {
    return this.reqForm.getFormGroup().controls['clientType'] as FormGroup;
  }

  constructor(private reqForm: RequestFormService) { }

  ngOnInit() {
    this.requestFormGroup = this.reqForm.getFormGroup();
  }

  isDocumentsSelected(): boolean {
    return this.reqForm.isDocumentsSelected();
  }

  send() {
    this.reqForm.sendForm();
  }
}
