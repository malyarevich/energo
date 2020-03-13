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
  }
];

export const strategyForDownload = [
  { id: 'Керівника', numberList: [0, 1] },
  { id: 'presenter_of_chief', numberList: [2, 3] },
  { id: 'phis_o', numberList: [2, 1] },
  { id: 'presenter_of_phis_o', numberList: [2, 3, 4] },
  { id: 'FOP', numberList: [0, 1, 2, 3] }
]

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

export const refDocument = 'http://www.zoe.com.ua/wp-content/uploads/2019/05/%D0%97%D0%B0%D1%8F%D0%B2%D0%B0-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%81.doc';

export const secChecklist = [
  {
    group: 'options2',
    id: 'Керівника',
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
      { name: 'address', placeholder: 'Адреса об’єкта' }
    ]
  }
];
