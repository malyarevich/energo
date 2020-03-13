import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-download',
  templateUrl: './step-download.component.html',
  styleUrls: ['./step-download.component.scss']
})
export class StepDownloadComponent implements OnInit {
  @Input() refDocument: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
