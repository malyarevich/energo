import {Component, OnDestroy, OnInit} from '@angular/core';
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
  refDocument,
  strategyForDownload
} from '../models/form.model';
import { FormService } from '../services/form.service';
import { element } from 'protractor';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Observable} from "rxjs";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']
})
export class RequestFromComponent implements OnInit, OnDestroy {
  behaviorModel = {
    options1: false,
    options2: false,
    specialRights: false,
    downloadDocumentsStep: false,
  };

  myGroup: FormGroup;
  destroy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);
  private _documentsForDownload$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  get documentsForDownload$(): Observable<any> {
    return this._documentsForDownload$.asObservable();
  }

  get documentsForDownload(): any {
    return this._documentsForDownload$.getValue();
  }

  set documentsForDownload(list: any) {
    this._documentsForDownload$.next(list);
  }

  refDocument = refDocument;

  // from model
  sectionFields = sectionFields;
  firstChecklist = firstChecklist;
  secChecklist = secChecklist;
  specialRights = specialRights;

  matcher = new MyErrorStateMatcher();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.myGroup = this.formService.getFormGroup();
  }

  getFormValueById(id: string) {
    return this.formService.getFormValueById(id);
  }

  dirtOption(group: any) {
    this.behaviorModel[group] = true;
  }

  setPetitionTo(event: any) {
    // console.log('setPetitionTo', event);
    this.dirtOption(event.target.name); // name is group
    this.formService.petitionTo = event.target.value;
  }

  filterDocumentsForDownload(strategyId: string) {
    const documents = [];
    const { numberList } = strategyForDownload.find(elem => (strategyId === elem.id));
    console.log(numberList);
    numberList.forEach(id => {
      documents.push(documentsForDownload[id]);
    });
    this.documentsForDownload = documents;
    console.log(this.documentsForDownload);
  }

  setPetitionFrom(event: Event | any, option: string) {
    this.dirtOption(option); // name is group
    this.formService.petitionFrom = event.target.id;
  }

  clarificationPetitionFrom(event: Event | any) {
    console.log(event.target.value);
    this.formService.prefixPetitionFrom = event.target.id;
    this.formService.finalPetitionFrom$
      // .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log('data', data);
        this.filterDocumentsForDownload(this.formService.finalPetitionFrom);
      });
    this.dirtOption('downloadDocumentsStep'); // name is group
  }

  isBehaviorOption(group: string): boolean {
    return this.behaviorModel[group];
  }

  changeUserDocFiles(event: Event) {
    // console.log(event);
    this.formService.changeUserDocFiles(event);
  }

  hasUserDocFiles(id: string) {
    return this.formService.hasUserDocFiles(id);
  }

  send() {
    this.formService.sendForm();
  }

  isDocumentsSelected(): boolean {
    let isAllSelected = this.documentsForDownload.length > 0;
    this.documentsForDownload.forEach(documentItem => {
      if (!this.hasUserDocFiles(documentItem.id)) {
        isAllSelected = false;
      }
    });
    return isAllSelected;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
