import { Component, OnInit, Input } from '@angular/core';
import { refDocument } from '../models/form.model';

@Component({
  selector: 'app-step-download',
  templateUrl: './step-download.component.html',
  styleUrls: ['./step-download.component.scss']
})
export class StepDownloadComponent implements OnInit {

  get refDocument(): string {
    return refDocument;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
