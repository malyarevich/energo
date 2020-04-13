import { Component, OnInit } from '@angular/core';

import { documentsForDownload, StepRadioEnum } from '../models/form.model';
import { RequestFormService } from '../services/request-form.service';

@Component({
  selector: 'app-step-document',
  templateUrl: './step-document.component.html',
  styleUrls: ['./step-document.component.scss']
})
export class StepDocumentComponent implements OnInit {
  get documentsForDownload$() {
    return this.reqForm.documentsForDownload$;
  }
  
  constructor(private reqForm: RequestFormService) { }

  ngOnInit(): void {
  }

  changeUserDocFiles(event: Event) {
    this.reqForm.changeUserDocFiles(event);
  }

  hasUserDocFiles(id: string) {
    return this.reqForm.hasUserDocFiles(id);
  }

}
