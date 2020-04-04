import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myGroup: FormGroup;
  // private connectionClientsUrl = 'api/ConnectionClients';

  isSubmitted = false;
  private _petitionTo = null;
  private _petitionFrom$: BehaviorSubject<string> = new BehaviorSubject(null);
  private _prefixPetitionFrom$: BehaviorSubject<string> = new BehaviorSubject(null);
  private _finalPetitionFrom$: BehaviorSubject<string> = new BehaviorSubject(null);
  userDocFiles = {};

  set petitionTo(value: string) {
    this._petitionTo = value;
  }

  get petitionFrom(): string {
    return this._petitionFrom$.getValue();
  }

  set petitionFrom(value: string) {
    this._petitionFrom$.next(value);
  }

  get finalPetitionFrom$(): Observable<string> {
    return this._finalPetitionFrom$.asObservable();
  }

  get finalPetitionFrom(): string {
    return this._finalPetitionFrom$.getValue();
  }

  set finalPetitionFrom(value: string) {
    this._finalPetitionFrom$.next(value);
  }

  set prefixPetitionFrom(value: string) {
    this._prefixPetitionFrom$.next(value);
  }

  get prefixPetitionFrom(): string {
    return this._prefixPetitionFrom$.getValue();
  }

  constructor(private http: HttpClient) {
    // Инициализируем новую форм группу
    this.myGroup = new FormGroup({
      firstName: new FormControl(
        {
          value: '1111', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.minLength(3), // мин длина строки
          Validators.maxLength(7) // max length
        ]) // Validations
      ),
      pibName: new FormControl(
        {
          value: '1111', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.minLength(3), // мин длина строки
          Validators.maxLength(7) // max length
        ]) // Validations
      ),
      addressUr: new FormControl(
        {
          value: '1111', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.minLength(3), // мин длина строки
          Validators.maxLength(7) // max length
        ]) // Validations
      ),
      addressPost: new FormControl(
        {
          value: '1', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      ),

      email: new FormControl(
        {
          value: 'qwe@er', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.email
        ]) // Validations
      ),
      phone: new FormControl(
        {
          value: '2222', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.min(3), // мин длина строки
          Validators.maxLength(12) // max length
        ]) // Validations
      ),
      addressSelect: new FormControl(
        {
          value: null, // state
          disabled: false // off/on
        },
          Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      ),
      address: new FormControl(
        {
          value: '1', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      ),
      options2: new FormControl(
        {
          value: null, // from who
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      ),
      specialRights: new FormControl(
        {
          value: 0, // from who
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      )
    });

    // вкл функцию слежения за изменениями ЗНАЧЕНИЙ в форме
    this.myGroup.statusChanges.subscribe(result => {
      console.log(result);
    });

    this._petitionFrom$.subscribe(data => {
      this.finalPetitionFrom = this.prefixPetitionFrom + data;
    });

    this._prefixPetitionFrom$.subscribe(data => {
      this.finalPetitionFrom = data + this.petitionFrom;
    });
  }

  changeUserDocFiles(event: Event) {
    const target: any = event.target; // for compilation clear
    this.userDocFiles[target.id] = target.files[0];

    console.log('target.files -> ', target.files[0])
    // 1) endPoint + PUT/POST 
    //  for uploading files
    //  return link_for_file
    const urlLoadingUserDocFiles = `${environment.urlUploadFiles}${target.id}`;
    this.http.put(urlLoadingUserDocFiles, target.files[0]).subscribe(
      // success
      (successResponse: any) => {
        this.userDocFiles[target.id] = successResponse.fileName;
        console.log(successResponse);
      },
      // error
      error => {
        console.log('error of loading to serverSide', error);
      }
    );
  }

  getFieldControlById(id: string): AbstractControl {
    return this.myGroup.controls[id];
  }

  getFormValueById(id: string) {
    return this.myGroup.value[id];
  }

  hasUserDocFiles(id: string) {
    return !!this.userDocFiles[id];
  }

  getFormGroup(): FormGroup {
    return this.myGroup;
  }

  filtrationForBackend(values: any): any {
    console.log('values: ', values);
    return values;
  }

  sendForm() {
    const data = {
      form: this.filtrationForBackend(this.myGroup.value), // 2 & 3 main form information
      petitionTo: this.petitionTo, // 4.1 For objects
      petitionFrom: this.petitionFrom, // 4.2 From smb
      documentsForDownload: this.userDocFiles // 4 documentsForDownload pdf_only
    };

    // console.log('data this.myGroup', this.myGroup);
    // if (this.myGroup.valid && this.petitionTo && this.petitionFrom) {
    if (this.myGroup.valid) {
      console.log('data from front', data);
      this.http
        .post(environment.urlSendForm, data)
        .subscribe(
          item => {
            console.log('success, response by server', item);
            this.isSubmitted = true;
          },
          error => {
            console.error('error on VIDPRAVITY', error);
          }
        );
    }
  }
}
