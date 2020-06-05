import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RequestFromRoutingModule } from './request-from-routing.module';

import { RequestFromComponent } from './request-from.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { StepDownloadComponent } from './step-download/step-download.component';
import { StepDocumentComponent } from './step-document/step-document.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { StepApplicationComponent } from './step-application/step-application.component';
import { StepContactInfoComponent } from './step-contact-info/step-contact-info.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { MatStepperModule } from '@angular/material/stepper';


// @ts-ignore
@NgModule({
  declarations: [
    RequestFromComponent,
    ErrorListComponent,
    StepDownloadComponent,
    StepDocumentComponent,
    FormStepperComponent,
    StepApplicationComponent,
    StepContactInfoComponent,
    FormWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RequestFromRoutingModule,
    //Mat
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})
export class RequestFromModule { }
