import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss']
})
export class FormStepperComponent implements OnInit {
  @Input() legend;
  @Input() stepNumber;

  constructor() { }

  ngOnInit(): void {
  }

}
