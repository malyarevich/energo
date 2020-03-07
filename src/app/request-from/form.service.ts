import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myGroup: FormGroup;
  emailFormControl: FormControl;

  isSubmitted = false;
  petitionTo = null;
  petitionFrom = null;
  pdfFiles = {};

  constructor(private http: HttpClient) { 
    
    // Инициализируем новую форм группу
    this.myGroup = new FormGroup({
      firstName: new FormControl(
        {
          value: '', // state
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
          value: '', // state
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
          value: '', // state
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
          value: '', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      ),

      email: new FormControl(
        {
          value: '', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required, // обязательное поле
          Validators.email
        ]) // Validations
      ),
      phone: new FormControl(
        {
          value: '', // state
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
          value: '', // state
          disabled: false // off/on
        },
        Validators.compose([
          Validators.required // обязательное поле
        ]) // Validations
      )
    });

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    // вкл функцию слежения за изменениями ЗНАЧЕНИЙ в форме
    this.myGroup.statusChanges.subscribe(result => {
      console.log(result);
    });
  }

  changePdfFile(event: Event) {
    const target: any = event.target; // for compilation clear
    this.pdfFiles[target.id] = target.files[0];

    // const urlLoadingPdfFile = `https://www.poe.pl.ua/loading-pdf-file/${target.id}`;
    // this.http.put(urlLoadingPdfFile, target.files[0]).subscribe(
    //   // success
    //   (successResponse: any) => {
    //     this.pdfFiles[target.id] = successResponse.fileName;
    //     console.log(successResponse);
    //   },
    //   // error
    //   error => {
    //     console.log('error of loading to serverSide', error);
    //   }
    // );
  }

  hasEmailError(type: string): boolean {
    return this.emailFormControl.hasError(type);
  }

  isFormErrorsById(id: string): boolean {
    return !!this.myGroup.controls[id].errors && this.isSubmitted;
  }
  
  getFormValueById(id: string) {
    return this.myGroup.value[id];
  }
  
  hasPdfFile(id: string) {
    return !!this.pdfFiles[id];
  }

  getFormGroup(): FormGroup {
    return this.myGroup;
  }

  getEmailFormControl(): FormControl {
    return this.emailFormControl;
  }

  sendForm() {
    const data = {
      form: this.myGroup.value, // 1 & 2 main form information
      petitionTo: this.petitionTo, // 3.1
      petitionFrom: this.petitionFrom, // 3.2
      documentsForDownload: this.pdfFiles // 4 documentsForDownload pdf_only
    };
    // console.log('data from front', data);
    // console.log('data this.myGroup', this.myGroup);
    if (this.myGroup.valid && this.petitionTo && this.petitionFrom) {
      this.http
        .post('https://jsonplaceholder.typicode.com/posts', data)
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
