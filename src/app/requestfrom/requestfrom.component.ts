import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-requestfrom',
  templateUrl: './requestfrom.component.html',
  styleUrls: ['./requestfrom.component.scss']
})
export class RequestfromComponent implements OnInit {


  myGroup: FormGroup;
  isSubmitted = false;
  behaviorModel = {
    options1: false,
    options2: false
  };

  petitionTo = null;
  petitionFrom = null;
  pdfFiles = {};

  sectionFields = [
    {
      legend: 'Контактні дані',
      fields: [
        { name: 'firstName', placeholder: 'ЄДРПОУ / IПН' },
        {
          name: 'pibName',
          placeholder:
            'Найменування юридичної особи / ПІБ фізичної особи-замовника приєднання'
        },
        {
          name: 'addressUr',
          placeholder: 'Юридична адреса / адреса реєстрації для фізичної особи'
        },
        {
          name: 'addressPost',
          placeholder: 'Поштова адреса / адреса для листування'
        },
        {
          name: 'email',
          placeholder: 'E-mail'
        },

        { name: 'phone',
          placeholder: 'Телефон' }
      ]
    },
    {
      legend: 'Адреса об’єкта',
      fields: [
        {
          name: 'addressSelect',
          placeholder: 'Місто / район',
          type: 'select',
          options: [
            {
              id: 1,
              label: 'Дирекція з перспекивного розвитку та інвестицій'
            },
            {
              id: 2,
              label: 'Бердянський міськрайонний район'
            },
            {
              id: 3,
              label: 'Більмацький район'
            },
            {
              id: 4,
              label: 'Василівський район'
            },
            {
              id: 5,
              label: 'Веселівський район'
            },
            {
              id: 6,
              label: 'Вільнянський район'
            },
            {
              id: 7,
              label: 'Гуляйпільский район'
            },
            {
              id: 8,
              label: 'Запорізький район'
            },
            {
              id: 9,
              label: 'Кам`янсько-Дніпровський район'
            },
            {
              id: 10,
              label: 'Мелітопольский міський район'
            },
            {
              id: 11,
              label: 'Мелітопольский район'
            },
            {
              id: 12,
              label: 'Михайлівський район'
            },
            {
              id: 13,
              label: 'Новомиколаївський район'
            },
            {
              id: 14,
              label: 'Оріхівський район'
            },
            {
              id: 15,
              label: 'Пологівський район'
            },
            {
              id: 16,
              label: 'Приазовський район'
            },
            {
              id: 17,
              label: 'Приморський район'
            },
            {
              id: 18,
              label: 'Розівський район'
            },
            {
              id: 19,
              label: 'Токмацький район'
            },
            {
              id: 20,
              label: 'Чернігівський район'
            },
            {
              id: 21,
              label: 'Якимівський район'
            }
          ]
        },
        { name: 'address', placeholder: 'Address' }
      ]
    }
  ];
  firstChecklist = [
    {
      group: 'options1',
      id: 'first_join',
      description: 'Які приєднуються до електричних мереж уперше'
    },
    {
      group: 'options1',
      id: 'tech_params',
      description: 'Які змінюють технічні параметри'
    }
  ];
  secChecklist = [
    {
      group: 'options2',
      id: 'chief_uo',
      description: 'Керівника юридичної особи'
    },
    {
      group: 'options2',
      id: 'presenter_of_chief',
      description: 'Представника юридичної особи'
    },
    {
      group: 'options2',
      id: 'phis_o',
      description: 'Фізичної особи'
    },
    {
      group: 'options2',
      id: 'presenter_of_phis_o',
      description: 'Представника фізичної особи'
    },
    {
      group: 'options2',
      id: 'FOP',
      description: 'Фізичної особи-підприємця'
    }
  ];
  documentsForDownload = [
    {
      id: 'consent_ECP',
      description: `Заява про приєднання (з ЕЦП)` // ` - for multi-rows
    },
    {
      id: 'copy_situation_plan',
      description: `Копії ситуаційного плану та викопіювання з топографо-геодезичного
      плану в масштабі 1:2000 із зазначенням місця розташування
      об’єкта(об’єктів) замовника, земельної ділянки замовника або
      прогнозованої точки приєднання`
    },
    {
      id: 'building_passport',
      description: `Будівельний паспорт або містобудівних умов та обмежень з графічною
      частиною із зазначенням місця розташування , потужності та
      категорії надійності електропостачання за кожним об’єктом
      замовника (для об’єктів, які приєднуються до електричних мереж
      уперше)`
    },
    {
      id: 'pravo_vlasnosti',
      description: `Документ, який підтверджує право власності чи користування земельною
      ділянкою`
    },
    {
      id: 'EDRPOU',
      description: `Виписка , витяг, довідка із ЄДРПОУ`
    },
    {
      id: 'situation_document',
      description: `Статутний документ`
    }
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient) {}

  ngOnInit() {
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

    // вкл функцию слежения за изменениями ЗНАЧЕНИЙ в форме
    this.myGroup.statusChanges.subscribe(result => {
      console.log(result);
    });
  }

  getFormValueById(id: string) {
    return this.myGroup.value[id];
  }

  isFormErrorsById(id: string): boolean {
    return !!this.myGroup.controls[id].errors && this.isSubmitted;
  }

  dirtOption(group: any) {
    this.behaviorModel[group] = true;
  }

  setPetitionTo(event: any) {
    // console.log('setPetitionTo', event);
    this.dirtOption(event.target.name); // name is group
    this.petitionTo = event.target.value;
  }

  setPetitionFrom(event: any) {
    // console.log('setPetitionFrom', event);
    this.dirtOption(event.target.name); // name is group
    this.petitionFrom = event.target.value;
  }

  isBehaviorOption(id: string): boolean {
    return this.behaviorModel[id];
  }

  changePdfFile(event: Event) {
    // console.log(event);
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

  hasPdfFile(id: string) {
    return !!this.pdfFiles[id];
  }

  send() {
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
          },
          error => {
            console.error('error on VIDPRAVITY', error);
          }
        );
    }
  }

}
