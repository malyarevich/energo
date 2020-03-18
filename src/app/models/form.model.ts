// import {stringify} from "querystring";
// import {element} from "protractor";
// import any = jasmine.any;

export const documentsForDownload = [
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
  },
  {
    id: 'dovirenyst',
    description: `Належним чином оформлена довіреність чи інший документ на право укладати договори особі, яка уповноважена підписувати договори (за потреби)`
  },
  {
    id: 'passport',
    description: `Паспорт`
  }
];

export const strategyForDownload = [
  { id: 'self_ur', numberList: [0, 1, 2, 3, 4, 5] },
  { id: 'presenter_ur', numberList: [0, 1, 2, 3, 6, 4, 5] },
  { id: 'self_phis_o', numberList: [0, 1, 2, 3, 7] },
  { id: 'presenter_phis_o', numberList: [0, 1, 2, 3, 6] },
  { id: 'self_fop', numberList: [0, 1, 2, 3, 6, 7, 4] },
  { id: 'presenter_fop', numberList: [0, 1, 2, 3, 6, 7, 4] }
];
// export const strategyForDownload = [
//   { id: 'self_ur', numberList: [0] },
//   { id: 'presenter_ur', numberList: [1] },
//   { id: 'self_phis_o', numberList: [2] },
//   { id: 'presenter_phis_o', numberList: [3, 6] },
//   { id: 'self_fop', numberList: [0, 7, 4] },
//   { id: 'presenter_fop', numberList: [6, 7, 4] }
// ];

export const firstChecklist = [
  {
    group: 'options1',
    id: 'Нове приєднання',
    description: 'Які приєднуються до електричних мереж уперше'
  },
  {
    group: 'options1',
    id: 'Зміна технічних параметри',
    description: 'Які змінюють технічні параметри'
  }
];

export const refDocument =
    'http://www.zoe.com.ua/wp-content/uploads/2019/05/%D0%97%D0%B0%D1%8F%D0%B2%D0%B0-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%81.doc';

export const secChecklist = [
  {
    group: 'options2',
    id: 'phis_o',
    description: 'Для фізичних осіб'
  },
  {
    group: 'options2',
    id: 'fop',
    description: 'Для ФОП'
  },
  {
    group: 'options2',
    id: 'ur',
    description: 'Для юридичних осіб'
  },
];

export const specialRights = [
  {
    id: 0,
    value: 'self_',
    description: 'Сам'
  },
  {
    id: 1,
    value: 'presenter_',
    description: 'Довир'
  }
];
//
// export const thirdChecklist = [
//   {
//     group: 'options3',
//     id: 'self_' && secChecklist.find(id =>  (id)),
//     description: 'Сам'
//   },
//   {
//     group: 'options3',
//     id: 'presenter_' && secChecklist.find(id =>  (id)),
//     description: 'Довир'
//   }
// ];

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
        placeholder:
          'Найменування юридичної особи / ПІБ фізичної особи'
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
