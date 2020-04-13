import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Capability } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
},
)
export class AppComponent implements OnInit {
  title = 'Energo';
  constructor() { }

  ngOnInit(): void {
  }
}
