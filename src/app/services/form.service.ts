import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myGroup: FormGroup;
  // private connectionClientsUrl = 'api/ConnectionClients';

  isSubmitted = false;
  private _petitionTo = null;
  private _petitionFrom = null;
  userDocFiles = {};

  set petitionTo(value: string) {
    this._petitionTo = value;
  }

  set petitionFrom(value: string) {
    this._petitionFrom = value;
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
      )
    });

    // вкл функцию слежения за изменениями ЗНАЧЕНИЙ в форме
    this.myGroup.statusChanges.subscribe(result => {
      console.log(result);
    });
  }

  changeUserDocFiles(event: Event) {
    const target: any = event.target; // for compilation clear
    this.userDocFiles[target.id] = target.files[0];

    const urlLoadingUserDocFiles = `https://www.zoe.com.ua/loading-pdf-file/${target.id}`;
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

  sendForm() {
    const data = {
      form: this.myGroup.value, // 2 & 3 main form information
      petitionTo: this._petitionTo, // 4.1
      petitionFrom: this._petitionFrom, // 4.2
      documentsForDownload: this.userDocFiles // 4 documentsForDownload pdf_only
    };
    // console.log('data this.myGroup', this.myGroup);
    // if (this.myGroup.valid && this.petitionTo && this.petitionFrom) {
    if (this.myGroup.valid) {
      console.log('data from front', data);
      this.http
        .post('https://www.google.com/', data)
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
