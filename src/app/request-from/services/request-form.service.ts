import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '~/environments/environment';
import { ignoredDocumentsForDownloadId, StepRadioEnum, strategyForDownload, documentsForDownload, IPetInit, defaultPetInit } from '../models/form.model';
import { map, filter } from 'rxjs/operators';
import { AuthService } from '~/app/services/auth.service';

export interface IOptionSteps {
  [StepRadioEnum.typeConnection]?: string;
  [StepRadioEnum.askFrom]?: string;
  [StepRadioEnum.specialRights]?: string;
  [StepRadioEnum.documents]?: string;
}

export type ResListType = {
  options: []
}

@Injectable({
  providedIn: 'root'
})
export class RequestFormService {

  requestFormGroup: FormGroup;
  sectionRequestFormGroup: FormGroup;
  sectioncontacts: FormGroup;
  isSubmitted = false;
  userDocFiles = {};
  resList$: BehaviorSubject<ResListType> = new BehaviorSubject<ResListType>(null); // options
  doneSteps$: BehaviorSubject<IOptionSteps> = new BehaviorSubject<IOptionSteps>({
    typeConnection: null,
    askFrom: null,
    specialRights: null,
    documents: null,
  });

  get resList(): ResListType {
    return this.resList$.getValue();
  }
  set resList(value: ResListType) {
    this.resList$.next(value);
  }

  get doneSteps(): IOptionSteps {
    return this.doneSteps$.getValue();
  }

  set doneSteps(value: IOptionSteps) {
    this.doneSteps$.next(value);
  }

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

  constructor(private http: HttpClient, private auth: AuthService) {
    // const petition = this.getApiList();
    // console.log('petition', petition);
    this.auth.token$.pipe(filter(token => (token !== null))).subscribe((token: string) => {
      this.takeResList(token);
    })
    // Инициализируем новую форм группу

    this.requestFormGroup = new FormGroup({
      // ******************************** RADIO Group ********************************
      clientType: new FormGroup({
        [StepRadioEnum.askFrom]: new FormControl(
          {
            value: null, // from who
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required // обязательное поле
          ]) // Validations
        ),
        [StepRadioEnum.typeConnection]: new FormControl(
          {
            value: null, // is by self
            disabled: false // off/on
          },
        ),
        [StepRadioEnum.specialRights]: new FormControl(
          {
            value: null, // from who
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required // обязательное поле
          ]) // Validations
        ),
      }),

      // ******************************** sectionRequest Fields ********************************
      personalInfo: new FormGroup({
        nameUrPib: new FormControl(
          {
            value: 'ПАТ "Запоріжжяобленерго"', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.minLength(3), // мин длина строки
            Validators.maxLength(100) // max length
          ]) // Validations
        ),
        registryNumber: new FormControl(
          {
            value: 'АА123456', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.minLength(3), // мин длина строки
            Validators.maxLength(100) // max length
          ]) // Validations
        ),
      }),

      // ******************************** sectionContacts Fields ********************************
      contacts: new FormGroup({
        edrpouIpn: new FormControl(
          {
            value: '123456789101', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.minLength(3), // мин длина строки
            Validators.maxLength(50) // max length
          ]) // Validations
        ),
        namePib: new FormControl(
          {
            value: 'Іванов Іван Іванович', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.minLength(3), // мин длина строки
            Validators.maxLength(150) // max length
          ]) // Validations
        ),
        addressUr: new FormControl(
          {
            value: 'вул. Каховська 3а', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.minLength(3), // мин длина строки
            Validators.maxLength(100) // max length
          ]) // Validations
        ),
        addressPost: new FormControl(
          {
            value: 'вул. Добролюбова 18', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required // обязательное поле
          ]) // Validations
        ),
  
        email: new FormControl(
          {
            value: 'ivanov@zoe.com.ua', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.email
          ]) // Validations
        ),
        phone: new FormControl(
          {
            value: '+380777696663', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required, // обязательное поле
            Validators.min(3), // мин длина строки
            Validators.maxLength(15) // max length
          ]) // Validations
        ),
      }),

      // ******************************** sectionLocation Fields ********************************
      location: new FormGroup({
        branchId: new FormControl(
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
            value: 'вул. Кияшка 7', // state
            disabled: false // off/on
          },
          Validators.compose([
            Validators.required // обязательное поле
          ]) // Validations
        ),
      }), 

      ////////////////////////////////RADIO FROUP 
    });

    // вкл функцию слежения за изменениями ЗНАЧЕНИЙ в форме
    this.requestFormGroup.statusChanges.subscribe(result => {
      // console.log(result);
    });

    this.doneSteps$
      .subscribe((data) => {
        if (this.doneSteps.specialRights && this.doneSteps.askFrom && this.doneSteps.typeConnection) {
          this.filterDocumentsForDownload(this.doneSteps.specialRights + this.doneSteps.askFrom + this.doneSteps.typeConnection);
        }
      }); // name is group
  }


  filterDocumentsForDownload(strategyId: string) {
    const documents = [];
    const { numberList } = strategyForDownload.find(elem => (strategyId === elem.id));
    numberList.forEach(id => {
      documents.push(documentsForDownload[id]);
    });
    this.documentsForDownload = documents;
    // console.log(this.documentsForDownload);
  }

  isPreviousStepDone(step: string, index: number = 0) {

    if (Object.values(StepRadioEnum)[index - 1] && (index > 0)) {
      return this.doneSteps[Object.values(StepRadioEnum)[index - 1]] !== null;
    }
    return true;
  }

  isDoneStep(stepId: string) {
    return this.doneSteps[stepId];
  }

  changeUserDocFiles(event: Event) {
    const target: any = event.target; // for compilation clear
    this.userDocFiles[target.id] = target.files[0];

    // console.log('target.files -> ', target.files[0])
    // 1) endPoint + PUT/POST 
    //  for uploading files
    //  return link_for_file
    // TODO: Implement this in FUTURE
    // const urlLoadingUserDocFiles = `${environment.urlUploadFiles}${target.id}`;
    // this.http.put(urlLoadingUserDocFiles, target.files[0]).subscribe(
    //   // success
    //   (successResponse: any) => {
    //     this.userDocFiles[target.id] = successResponse.fileName;
    //     console.log(successResponse);
    //   },
    //   // error
    //   error => {
    //     console.log('error of loading to serverSide', error);
    //   }
    // );
  }

  getFieldControlById(id: string, fg: FormGroup = null): AbstractControl {
    return fg ? fg.controls[id] : this.requestFormGroup.controls[id];
  }

  // TODO: remove
  getFormValueById(id: string) {
    return this.requestFormGroup.value[id];
  }

  hasUserDocFiles(id: string) {
    return !!this.userDocFiles[id];
  }

  getFormGroup(): FormGroup {
    return this.requestFormGroup;
  }

  // Documents
  isDocumentIgnored(id: string) {
    return !!ignoredDocumentsForDownloadId.find(elem => {
      return elem === id;
    });
  }

  isDocumentsSelected(): boolean {
    let isAllSelected = this.documentsForDownload.length > 0;
    this.documentsForDownload.forEach(documentItem => {
      if (!this.hasUserDocFiles(documentItem.id)) {
        if (!this.isDocumentIgnored(documentItem.id)) {
          isAllSelected = false;
        }
      }
    });
    return isAllSelected;
  }

  // Place where we could change, remove, add some values or even fields BEFORE send this to back-end  
  filtrationForBackend(values: any): any {
    // console.log('values: ', values);
    return values;
  }
  // Pet Init List
  getComposedDataForBackend(): any | IPetInit {
    // const dataForBackend: IPetInit = defaultPetInit;

    const dataFromFrontend = this.requestFormGroup.value;
    dataFromFrontend.documentsForDownload = {};


    
    Object.keys(this.userDocFiles).map((key) => {
      // TODO: SAVE STRING like a File 
      // dataFromFrontend.documentsForDownload[key] = this.userDocFiles[key];
      this.userDocFiles[key].arrayBuffer().then(resolve => {
        dataFromFrontend.documentsForDownload[key] = resolve;
      });
    });
    dataFromFrontend.clientType = dataFromFrontend.clientType.specialRights + dataFromFrontend.clientType.askFrom + dataFromFrontend.clientType.typeConnection;
    
    // console.log('dataFromFrontend', dataFromFrontend);
    // console.log('dataFromFrontend', JSON.stringify(dataFromFrontend));
    // console.log('documentsForDownload', this.userDocFiles);


    return dataFromFrontend;
  }

  sendForm() {
    
    const data = this.getComposedDataForBackend();

    // console.log('data this.requestFormGroup', this.requestFormGroup);
    // if (this.requestFormGroup.valid && this.petitionTo && this.petitionFrom) {
    if (this.requestFormGroup.valid) {
      // console.log('data from front', data);
      this.http
        .post(environment.urlSendForm, data)
        .subscribe(
          item => {
            console.log('success, response by server', item);
            this.isSubmitted = true;
          },
          error => {
            console.error;
          }
        );
    }
  }

  // return this.http.get(`${environment.apiFB}/?api_token=${environment.api_token}`)
  getApiList(token: string): Observable<any> {
    return this.http.get(`${environment.apiFB}?token=${token}`)
      .pipe(
        map(response => response)
      )
  }

  takeResList(inputToken: string) {
    this.http.get(`${environment.apiFB}branches?token=${inputToken}`).subscribe(
      (res: ResListType) => {
        // console.log("res", res)
        this.resList = res;
      }, console.error)
  }

}
