export enum DocumentsEnem {
  consent_ecp = 'consent_ECP',
  copy_situation_plan = 'copy_situation_plan',
  building_passport = 'building_passport',
  pravo_vlasnosti = 'pravo_vlasnosti',
  edrpou = 'EDRPOU',
  situation_document = 'situation_document',
  dovirenyst = 'dovirenyst',
  passport = 'passport'
}

export enum StepRadioEnum {
  forObjects = 'forObjects',
  askFrom = 'askFrom',
  specialRights = 'specialRights',
  documents = 'documents',
}

export const sectionFields = [
  {
    legend: 'Контактні дані',
    fields: [
      {
        name: 'firstName',
        placeholder: 'ЄДРПОУ / IПН'
      },
      {
        name: 'pibName',
        placeholder: 'Найменування юридичної особи / ПІБ фізичної особи'
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
        type: 'email',
        placeholder: 'E-mail'
      },

      {
        name: 'phone',
        placeholder: 'Телефон'
      }
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
            label: 'Бердянський міськрайонний район'
          },
          {
            id: 2,
            label: 'Більмацький район'
          },
          {
            id: 3,
            label: 'Василівський район'
          },
          {
            id: 4,
            label: 'Веселівський район'
          },
          {
            id: 5,
            label: 'Вільнянський район'
          },
          {
            id: 6,
            label: 'Гуляйпільский район'
          },
          {
            id: 7,
            label: 'Запорізький район'
          },
          {
            id: 8,
            label: 'Кам`янсько-Дніпровський район'
          },
          {
            id: 9,
            label: 'Мелітопольский міський район'
          },
          {
            id: 10,
            label: 'Мелітопольский район'
          },
          {
            id: 11,
            label: 'Михайлівський район'
          },
          {
            id: 12,
            label: 'Новомиколаївський район'
          },
          {
            id: 13,
            label: 'Оріхівський район'
          },
          {
            id: 14,
            label: 'Пологівський район'
          },
          {
            id: 15,
            label: 'Приазовський район'
          },
          {
            id: 16,
            label: 'Приморський район'
          },
          {
            id: 17,
            label: 'Розівський район'
          },
          {
            id: 18,
            label: 'Токмацький район'
          },
          {
            id: 19,
            label: 'Чернігівський район'
          },
          {
            id: 20,
            label: 'Якимівський район'
          }
        ]
      },
      { name: 'address', placeholder: 'Адреса об’єкта' }
    ]
  }
];


export const firstChecklist = [
  {
    id: 'Нове приєднання',
    description: 'Які приєднуються до електричних мереж уперше'
  },
  {
    id: 'Зміна технічних параметри',
    description: 'Які змінюють технічні параметри'
  }
];

export const secChecklist = [
  {
    id: 'phis_o',
    description: 'Для фізичних осіб'
  },
  {
    id: 'fop',
    description: 'Для ФОП'
  },
  {
    id: 'ur',
    description: 'Для юридичних осіб'
  }
];

export const specialRights = [
  {
    id: 'self_',
    value: 'self_',
    description: 'Сам'
  },
  {
    id: 'presenter_',
    value: 'presenter_',
    description: 'Довир'
  }
];

export const radioApplicationList = [
  {
    title: "Для об’єктів:",
    chooseList: firstChecklist,
    step: StepRadioEnum.forObjects
  },
  {
    title: "Звернення від:",
    chooseList: secChecklist,
    step: StepRadioEnum.askFrom
  },
  {
    title: "Довірена особа:",
    chooseList: specialRights,
    step: StepRadioEnum.specialRights
  }
];

export const documentsForDownload = [
  {
    id: DocumentsEnem.consent_ecp,
    description: `Заява про приєднання (з ЕЦП)` // ` - for multi-rows
  },
  {
    id: DocumentsEnem.copy_situation_plan,
    description: `Копії ситуаційного плану та викопіювання з топографо-геодезичного
    плану в масштабі 1:2000 із зазначенням місця розташування
    об’єкта(об’єктів) замовника, земельної ділянки замовника або
    прогнозованої точки приєднання`
  },
  {
    id: DocumentsEnem.building_passport,
    description: `Будівельний паспорт або містобудівних умов та обмежень з графічною
    частиною із зазначенням місця розташування , потужності та
    категорії надійності електропостачання за кожним об’єктом
    замовника (для об’єктів, які приєднуються до електричних мереж
    уперше)`
  },
  {
    id: DocumentsEnem.pravo_vlasnosti,
    description: `Документ, який підтверджує право власності чи користування земельною
    ділянкою`
  },
  {
    id: DocumentsEnem.edrpou,
    description: `Виписка , витяг, довідка із ЄДРПОУ`
  },
  {
    id: DocumentsEnem.situation_document,
    description: `Статутний документ`
  },
  {
    id: DocumentsEnem.dovirenyst,
    description: `Належним чином оформлена довіреність чи інший документ на право укладати договори особі, яка уповноважена підписувати договори (за потреби)`
  },
  {
    id: DocumentsEnem.passport,
    description: `Паспорт`
  }
];

export const ignoredDocumentsForDownloadId = [DocumentsEnem.edrpou];

export const strategyForDownload = [
  // { id: 'self_ur', numberList: [0, 1, 2, 3, 4, 5] },
  { id: 'self_ur', numberList: [0] },
  { id: 'presenter_ur', numberList: [0, 1, 2, 3, 6, 4, 5] },
  { id: 'self_phis_o', numberList: [0, 1, 2, 3, 7] },
  { id: 'presenter_phis_o', numberList: [0, 1, 2, 3, 6] },
  { id: 'self_fop', numberList: [0, 1, 2, 3, 6, 7, 4] },
  { id: 'presenter_fop', numberList: [0, 1, 2, 3, 6, 7, 4] }
];

export const refDocument =
  'http://www.zoe.com.ua/wp-content/uploads/2019/05/%D0%97%D0%B0%D1%8F%D0%B2%D0%B0-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%81.doc';

