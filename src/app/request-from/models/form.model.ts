import { Input } from '@angular/core';

export enum DocumentsEnem {
  onsentEcp = `onsentEcp`, // 0
  propertyRights = `propertyRights`, // 1
  situationPlan = `situationPlan`, // 2
  passport = `passport`, // 3
  teo = `teo`, // 4
  supplyСontract = `supplyСontract`, // 5
  severalOwners = `severalOwners`, // 6
  extractEd = `extractEd`, // 7
  foundingDocument = `foundingDocument`, // 8
  appointmentManager = `appointmentManager`, // 9
  extractRp = `extractRp`, // 10
  financialDetails = `financialDetails`, // 11
  situationDocument = `situationDocument`, // 12
  proxy = `proxy`, // 13
  powerTechConditions = `powerTechConditions`, // 14
  powersupplyСontract = `powersupplyСontract`, // 15
  powerExtractEd = `powerExtractEd`, // 16
  powerFoundingDocument = `powerFoundingDocument`, // 17
  powerAppointmentManager = `powerAppointmentManager`, // 18
  powerPayerPDV = `powerPayerPDV`, // 19
  powerPayerPNP = `powerPayerPNP`, // 20
  powerPayerStatus = `powerPayerStatus`, // 21
  another = `another`, // 22
  powerSituationPlan = `powerSituationPlan` // 23
}

export enum StepRadioEnum {
  typeConnection = `typeConnection`,
  askFrom = `askFrom`,
  specialRights = `specialRights`,
  documents = `documents`
}

export const sectionRequest = [
  {
    legend: `Контактні дані`,
    fields: [
      // {
      //   name: `cellPdf3`,
      //   type:`input`, 
      //   placeholder: `Назва, місце розташування та функціональне призначення об'єкта замовника:`
      // },
      {
        name: `cellPdf3`,
        sublegend: `Назва, місце розташування та функціональне призначення об'єкта замовника:`,
        type: `input`
      },
      {
        name: `cellPdf4`,
        sublegend: `Мета приєднання(нове приєднання/зміна технічних параметрів):`,
        type: `select`,
        placeholder: `Нове приєднання/зміна технічних параметрів`,
        options: [
          {
            "id": `Нове приєднання`,
            "label": `Нове приєднання`
          },
          {
            "id": `Зміна технічних параметрів`,
            "label": `Зміна технічних параметрів`
          }
        ]
      },
      {
        name: `cellPdf5`,
        sublegend: `Існуюча дозволена (приєднана) потужність відповідно до умов договору про постачання (користування) електричної енергії (електричною енергією) (вказати дату укладення та номер Договору):`,
        type: `input`,
      },
      // {
      //   name: `cellPdf6`,
      //   sublegend: `Величина максимального розрахункового (прогнозованого) навантаження з урахуванням існуючої дозволеної (приєднаної) потужності, кВт. І категорія надійності електропостачання: `,
      //   type: `inputAndSelect`,
      //   placeholder: `Категорія`,
      //   subplaceholder: `Значення`, //
      //   options: [
      //     {
      //       "id": 0,
      //       "label": `I`
      //     },
      //     {
      //       "id": 1,
      //       "label": `II`
      //     },
      //     {
      //       "id": 2,
      //       "label": `III`
      //     }
      //   ]
      // },

      {
        name: `cellPdf6`,
        sublegend: `Величина максимального розрахункового (прогнозованого) навантаження з урахуванням існуючої дозволеної (приєднаної) потужності, кВт. І категорія надійності електропостачання: `,
        type: `justSublegend`
      },
      {
        name: `cellPdf61`,
        type: `justInput`,
        placeholder: `Категорія I`
      },
      {
        name: `cellPdf62`,
        type: `justInput`,
        placeholder: `Категорія II`
      },
      {
        name: `cellPdf63`,
        type: `justInput`,
        placeholder: `Категорія III`
      },

      {
        name: `cellPdf7`,
        type: `input`,
        sublegend: `Ступінь напруги в точці приєднання, кВ:`
      },
      {
        name: `cellPdf8`,
        sublegend: `Графік уведення потужностей за роками`,
        type: `justSublegend`
      },
      {
        name: `sublegendCellPdf81`,
        sublegend: `Перша дата та навантаження`,
        type: `justSublegendCenter`
      },
      {
        name: `cellPdf811`,
        type: `justInput`,
        placeholder: `Рік уведення потужності:`
      },
      {
        name: `cellPdf812`,
        type: `justInput`,
        placeholder: `Величина максимального розрахункового навантаження, кВт`
      },
      {
        name: `cellPdf813`,
        type: `justInput`,
        placeholder: `Категорія I`
      },
      {
        name: `cellPdf814`,
        type: `justInput`,
        placeholder: `Категорія II`
      },
      {
        name: `cellPdf815`,
        type: `justInput`,
        placeholder: `Категорія III`
      },      
      {
        name: `sublegendCellPdf82`,
        sublegend: `Друга дата та навантаження`,
        type: `justSublegendCenter`
      },
      
      {
        name: `cellPdf821`,
        type: `justInput`,
        placeholder: `Рік уведення потужності:`
      },
      {
        name: `cellPdf822`,
        type: `justInput`,
        placeholder: `Величина максимального розрахункового навантаження, кВт`
      },
      {
        name: `cellPdf823`,
        type: `justInput`,
        placeholder: `Категорія I`
      },
      {
        name: `cellPdf824`,
        type: `justInput`,
        placeholder: `Категорія II`
      },
      {
        name: `cellPdf825`,
        type: `justInput`,
        placeholder: `Категорія III`
      }, 
      {
        name: `sublegendCellPdf83`,
        sublegend: `Третя дата та навантаження`,
        type: `justSublegendCenter`
      },
      
      {
        name: `cellPdf831`,
        type: `justInput`,
        placeholder: `Рік уведення потужності:`
      },
      {
        name: `cellPdf832`,
        type: `justInput`,
        placeholder: `Величина максимального розрахункового навантаження, кВт`
      },
      {
        name: `cellPdf833`,
        type: `justInput`,
        placeholder: `Категорія I`
      },
      {
        name: `cellPdf834`,
        type: `justInput`,
        placeholder: `Категорія II`
      },
      {
        name: `cellPdf835`,
        type: `justInput`,
        placeholder: `Категорія III`
      }, 



      
      // {
      //   name: `cellPdf10`,
      //   sublegend: `Категорія надійності електропостачання: `,
      //   type: `inputAndSelect`,
      //   placeholder: `Категорія`,
      //   subplaceholder: `Значення`, //
      //   options: [
      //     {
      //       "id": 0,
      //       "label": `I`
      //     },
      //     {
      //       "id": 1,
      //       "label": `II`
      //     },
      //     {
      //       "id": 2,
      //       "label": `III`
      //     }
      //   ]
      // },
      {
        name: `cellPdf11`,
        type: `input`,
        sublegend: `Прогнозована дата введення об'єкта замовника в експлуатацію:`
      },
      {
        name: `cellPdf12`,
        type: `input`,
        sublegend: `Режим роботи електроустановок замовника:`
      },
      {
        name: `cellPdf13`,
        type: `input`,
        sublegend: `Відомості щодо встановленої потужності електроопалювальних та електронагрівальних установок, кухонних електроплит тощо:`
      },
      {
        name: `cellPdf14`,
        type: `input`,
        sublegend: `Відомості щодо встановленої потужності генеруючих установок приватних домогосподарств (тип/потужність):`
      },
      {
        name: `cellPdf15`,
        type: `select`,
        sublegend: `Відомості щодо встановлення точки приєднання (межі балансової належності електроустановок замовника та ОСР) на території земельної ділянки замовника:`,
        placeholder: `ЗАПЕРЕЧУЮ/НЕ ЗАПЕРЕЧУЮ`,
        options: [
          {
            "id": `ЗАПЕРЕЧУЮ`,
            "label": `ЗАПЕРЕЧУЮ`
          },
          {
            "id": `НЕ ЗАПЕРЕЧУЮ`,
            "label": `НЕ ЗАПЕРЕЧУЮ`
          }
        ]
      },
      {
        name: `cellPdf16`,
        type: `select`,
        sublegend: `Інформація про бажання замовника здійснювати проєктування лінійної частини приєднання (самостійно/Оператором системи розподілу (послуга «під ключ»)):`,
        placeholder: `Самостійно/Послуга «під ключ»`,
        options: [
          {
            "id": `Самостійно`,
            "label": `Самостійно`
          },
          {
            "id": `Послуга «під ключ»`,
            "label": `Послуга «під ключ»`
          }
        ]
      },
      {
        name: `cellPdf17`,
        type: `input`,
        sublegend: `Необхідність приєднання будівельних струмоприймачів (кВт/Ні).`
      },
      {
        name: `cellPdf18`,
        type: `select`,
        sublegend: `Живлення будівельних струмоприймачів передбачити від електроустановок зовнішнього електрозабезпечення об'єкта забудови після реалізації проєкту зовнішнього електропостачання об'єкта забудови.`,
        placeholder: `ТАК/НІ`,
        options: [
          {
            "id": `ТАК`,
            "label": `ТАК`
          },
          {
            "id": `НІ`,
            "label": `НІ`
          }
        ]
      },
      {
        name: `cellPdf19`,
        sublegend: `Про результати розгляду цієї заяви прошу інформувати мене (оберіть один із запропонованих варіантів)`,
        type: `inputAndSelect`,
        placeholder: `Тип інформування`,
        subplaceholder: `Значення`,
        options: [
          {
            "id": 0,
            "label": `За місцем подання заяви`
          },
          {
            "id": 1,
            "label": `Електронною поштою`
          },
          {
            "id": 2,
            "label": `Факсом`
          },
          {
            "id": 3,
            "label": `Поштою`
          },
          {
            "id": 4,
            "label": `Телефоном`
          },
          {
            "id": 5,
            "label": `Інше`
          }
        ]
      },
      {
        name: `cellPdf20`,
        type: `select`,
        sublegend: `Необхідність відкриття особистого кабінету замовника на вебсайті ОСР`,
        placeholder: `ТАК/НІ`,
        options: [
          {
            "id": `ТАК`,
            "label": `ТАК`
          },
          {
            "id": `НІ`,
            "label": `НІ`
          }
        ]
      },
      {
        name: `cellPdf21`,
        sublegend: `Адреса для листування:`,
        type: `input`,
      },
      {
        name: `cellPdf22`,
        sublegend: `Інше`,
        type: `input`,
      },
      {
        name: `cellPdf23`,
        sublegend: `Відомості щодо необхідності встановлення багатофункціонального приладу обліку електричної енергії (ТАК/НІ) та відомості щодо вибору постачальника послуги комерційного обліку (ОСР/інший ППККО):`,
        type: `input`,
      },
      {
        name: `cellPdf26`,
        type: `input`,
        sublegend: `ПІБ (заявника)`
      }
    ]
  },
];
// sectionContacts
export const sectionContacts = [
  {
    legend: `Контактні дані`,
    fields: [
      {
        name: `passwordCustomer`,
        type: `password`,
        placeholder: `Пароль для безпеки вашої інформації`
      },
      {
        name: `edrpouIpn`,
        placeholder: `ЄДРПОУ / РНОКПП(ІПН)`
      },
      {
        name: `namePib`,
        placeholder: `Найменування юридичної особи / ПІБ фізичної особи`
      },
      {
        name: `addressUr`,
        placeholder: `Юридична адреса / адреса реєстрації для фізичної особи`
      },
      {
        name: `addressPost`,
        placeholder: `Поштова адреса / адреса для листування`
      },
      {
        name: `email`,
        type: `email`,
        placeholder: `E-mail`
      },
      {
        name: `phone`,
        placeholder: `Телефон`
      }
    ]
  }
];
export const sectionAddress = [
  {
    legend: `Адреса об'єкта`,
    fields: [
      {
        name: `branchId`,
        placeholder: `Місто / район`,
        type: `select`,
        options: []
      },
      { name: `address`, placeholder: `Адреса об'єкта`, type: `input` },
    ]
  }
];


export const typeConnectionChecklist = [
  {
    id: `new`,
    description: `Приєднуються до електричних мереж уперше`
  },
  {
    id: `change`,
    description: `Які змінюють технічні параметри`
  },
  {
    id: `power`,
    description: `Які приєднуються в рахунок потужності`
  }
];

export const askFromChecklist = [
  {
    id: `phis_o_`,
    description: `Для фізичних осіб`
  },
  {
    id: `fop_`,
    description: `Для ФОП`
  },
  {
    id: `ur_`,
    description: `Для юридичних осіб`
  }
];

export const specialRightsChecklist = [
  {
    id: `self_`,
    value: `self_`,
    description: `Власник`
  },
  {
    id: `presenter_`,
    value: `presenter_`,
    description: `Довірена особа`
  }
];

export const radioApplicationList = [
  {
    title: `Для об'єктів:`,
    chooseList: typeConnectionChecklist,
    step: StepRadioEnum.typeConnection
  },
  {
    title: `Звернення від:`,
    chooseList: askFromChecklist,
    step: StepRadioEnum.askFrom
  },
  {
    title: `Заяву подає:`,
    chooseList: specialRightsChecklist,
    step: StepRadioEnum.specialRights
  }
];

export const documentsForDownload = [
  {
    id: DocumentsEnem.onsentEcp,
    description: `Заява про приєднання (з ЕЦП)` // ` - for multi-rows
  },
  {
    id: DocumentsEnem.propertyRights,
    description: `Копія документа, що підтверджує право власності чи користування цим об'єктом, або копія витягу з Державного реєстру речових прав на нерухоме майно, або, за відсутності об'єкта, копія документа, що підтверджує право власності чи користування земельною ділянкою, або копія витягу з Державного реєстру речових прав на нерухоме майно. У разі відсутності кадастрового номера у свідоцтві про право власності на земельну ділянку – викопіювання з топографо-геодезичного плану або плану забудови території із зазначенням місця розташування земельної ділянки`
  },
  {
    id: DocumentsEnem.situationPlan,
    description: `Копія ситуаційного плану та копія викопіювання з топографо-геодезичного плану в масштабі 1:2000 (1:1000, 1:500 або 1:200) із зазначенням місця розташування об'єкта (об'єктів) замовника, земельної ділянки замовника або прогнозної точки приєднання (для об'єктів, що приєднуються до електричних мереж уперше)`
  },
  {
    id: DocumentsEnem.passport,
    description: `Копії 1, 2, 3, 11 сторінок паспорта та довідки про присвоєння ідентифікаційного коду`
  },
  {
    id: DocumentsEnem.teo,
    description: `ТЕО (за наявності)`
  },
  {
    id: DocumentsEnem.supplyСontract,
    description: `Копія Договору про постачання електричної енергії власника мереж (перша та остання сторінка договору, додатки щодо дозволеної потужності, категорії з надійності, однолінійна схема, та акт про розмежування балансової належності) (за наявності)`
  },
  {
    id: DocumentsEnem.severalOwners,
    description: `У разі наявності декілька співвласників: виділення в натурі частини нерухомого майна, або нотаріально-завірена копія дозволу від інших співвласників на право заключити Договір про приєднання всього будинку`
  },
  {
    id: DocumentsEnem.extractEd,
    description: `Копія  витягу з Єдиного державного реєстру юридичних осіб та фізичних осіб-підприємців та громадських формувань`
  },
  {
    id: DocumentsEnem.foundingDocument,
    description: `Копії установчих документів (статут, положення тощо)`
  },
  {
    id: DocumentsEnem.appointmentManager,
    description: `Копія наказу про призначення керівника`
  },
  {
    id: DocumentsEnem.extractRp,
    description: `Копія витягу з Реєстру платників єдиного податку або копію свідоцтва платника податку на додану вартість (далі – ПДВ)`
  },
  {
    id: DocumentsEnem.financialDetails,
    description: `Довідка про фінансові реквізити та статус платника податку`
  },
  {
    id: DocumentsEnem.situationDocument,
    description: `Статутний документ`
  },
  {
    id: DocumentsEnem.proxy,
    description: `Довіреність на особу, яка буде передавати/получати документи, представляти інтереси основного замовника та/або підписувати договір про приєднання`
  },
  // for power
  {
    id: DocumentsEnem.powerTechConditions,
    description: `Технічні умови або лист – згода власника мереж`
  },
  {
    id: DocumentsEnem.powersupplyСontract,
    description: `Копія Договору про постачання електричної енергії власника мереж (перша та остання сторінка договору, додатки щодо дозволеної потужності, категорії з надійності, однолінійна схема, та акт про розмежування балансової належності)`
  },
  {
    id: DocumentsEnem.powerExtractEd,
    description: `Копія  витягу з Єдиного державного реєстру юридичних осіб власника мереж`
  },
  {
    id: DocumentsEnem.powerFoundingDocument,
    description: `Копії установчих документів (статут, положення тощо) власника мереж`
  },
  {
    id: DocumentsEnem.powerAppointmentManager,
    description: `Копія наказу про призначення керівника власника мереж`
  },
  {
    id: DocumentsEnem.powerPayerPDV,
    description: `Копія свідоцтва про реєстрацію платника ПДВ власника мереж (за потреби)`
  },
  {
    id: DocumentsEnem.powerPayerPNP,
    description: `Копія свідоцтва платника податку на прибуток власника мереж (за потреби)`
  },
  {
    id: DocumentsEnem.powerPayerStatus,
    description: ` Довідку про банківські реквізити та статус платника податку власника мереж`
  },

  {
    id: DocumentsEnem.another,
    description: `Інші`
  },
  {
    id: DocumentsEnem.powerSituationPlan,
    description: `Копія ситуаційного плану та копія викопіювання з топографо-геодезичного плану в масштабі 1:2000 (1:1000, 1:500 або 1:200) із зазначенням місця розташування об'єкта (об'єктів) замовника, земельної ділянки замовника або прогнозної точки приєднання (для об'єктів, що приєднуються до електричних мереж уперше)`
  },
];

export const ignoredDocumentsForDownloadId = [
  DocumentsEnem.teo,
  DocumentsEnem.supplyСontract,
  DocumentsEnem.severalOwners,
  DocumentsEnem.powerPayerPDV,
  DocumentsEnem.powerPayerPNP,
  DocumentsEnem.another,
  DocumentsEnem.powerSituationPlan
];

export const customerTypeToConnect = [
  { id: `self_ur_new`, numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 22] },
  //{ id: `self_ur_new`, numberList: [0, 22] },
  { id: `presenter_ur_new`, numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 13, 22] },
  { id: `self_phis_o_new`, numberList: [0, 1, 2, 3, 4, 5, 6, 22] },
  { id: `presenter_phis_o_new`, numberList: [0, 1, 2, 3, 4, 5, 6, 13, 22] },
  { id: `self_fop_new`, numberList: [0, 1, 2, 3, 7, 10, 4, 5, 22] },
  { id: `presenter_fop_new`, numberList: [0, 1, 2, 3, 7, 10, 4, 5, 13, 22] },

  { id: `self_ur_change`, numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 22] },
  { id: `presenter_ur_change`, numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 13, 22] },
  { id: `self_phis_o_change`, numberList: [0, 1, 2, 3, 4, 5, 6, 22] },
  { id: `presenter_phis_o_change`, numberList: [0, 1, 2, 3, 4, 5, 6, 13, 22] },
  { id: `self_fop_change`, numberList: [0, 1, 2, 3, 7, 10, 4, 5, 22] },
  { id: `presenter_fop_change`, numberList: [0, 1, 2, 3, 7, 10, 4, 5, 13, 22] },


  { id: `self_ur_power`, numberList: [0, 1, 23, 7, 8, 9, 10, 11, 4, 5, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: `presenter_ur_power`, numberList: [0, 1, 23, 7, 8, 9, 10, 11, 4, 5, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: `self_phis_o_power`, numberList: [0, 1, 23, 3, 4, 5, 6, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: `presenter_phis_o_power`, numberList: [0, 1, 23, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: `self_fop_power`, numberList: [0, 1, 23, 3, 7, 10, 4, 5, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: `presenter_fop_power`, numberList: [0, 1, 23, 3, 7, 10, 4, 5, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },

];

export const refDocument =
  `https://zakon.rada.gov.ua/laws/file/text/76/f490366n267.doc`;

export interface IPetInit {
  "EDRPOU"?: string;
  "Password"?: string;
  "NamePib"?: string;
  "addressUr"?: string;
  "AddressPost"?: string;
  "Email"?: string;
  "Phone"?: string;
  "Status"?: any;
  "CustomerTypeToConnect"?: any;
  "BranchId"?: any;
  "Address"?: string,

  // documents
  'onsentEcp'?: string;
  'propertyRights'?: string;
  'situationPlan'?: string;
  'passport'?: string;
  'teo'?: string;
  'supplyСontract'?: string;
  'severalOwners'?: string;
  'extractEd'?: string;
  'foundingDocument'?: string;
  'appointmentManager'?: string;
  'extractRp'?: string;
  'financialDetails'?: string;
  'situationDocument'?: string;
  'proxy'?: string;
  'powerTechConditions'?: string;
  'powersupplyСontract'?: string;
  'powerExtractEd'?: string;
  'powerFoundingDocument'?: string;
  'powerAppointmentManager'?: string;
  'powerPayerPDV'?: string;
  'powerPayerPNP'?: string;
  'powerPayerStatus'?: string;
  'another'?: string;
  'powerSituationPlan'?: string;
  "dovirenyst"?: string;
}

export const defaultPetInit: IPetInit = {
  "EDRPOU": '',
  "Password": '',
  "NamePib": '',
  "addressUr": '',
  "AddressPost": '',
  "Email": '',
  "Phone": '',
  "Status": null,
  "CustomerTypeToConnect": '',
  "BranchId": '',
  "Address": '',
  // documents
  'onsentEcp': '',
  'propertyRights': null,
  'situationPlan': null,
  'passport': null,
  'teo': null,
  'supplyСontract': null,
  'severalOwners': null,
  'extractEd': null,
  'foundingDocument': null,
  'appointmentManager': null,
  'extractRp': null,
  'financialDetails': null,
  'situationDocument': null,
  'proxy': null,
  'powerTechConditions': null,
  'powersupplyСontract': null,
  'powerExtractEd': null,
  'powerFoundingDocument': null,
  'powerAppointmentManager': null,
  'powerPayerPDV': null,
  'powerPayerPNP': null,
  'powerPayerStatus': null,
  'another': null,
  'powerSituationPlan': null,
  "dovirenyst": null,
}

export const listPdfCoords = {
  cellPdf1: [{
    x: 147,
    y: 168
  }],
  cellPdf2: [{
    x: 240,
    y: 168
  }],
  cellPdf3: [{
    x: 705,
    y: 168
  }],
  cellPdf4: [{
    x: 147,
    y: 203
  }],
  cellPdf5: [{
    x: 240,
    y: 203
  }],
  // cellPdf6: [
  //   {
  //     x: 474, // 474 || 552 || 628
  //     y: 220
  //   },
  //   {
  //     x: 552, // 474 || 552 || 628
  //     y: 220
  //   },
  //   {
  //     x: 628, // 474 || 552 || 628
  //     y: 220
  //   }
  // ],
  cellPdf61: [{
    x: 474,
    y: 220
  }],
  cellPdf62: [{
    x: 552,
    y: 220
  }],
  cellPdf63: [{
    x: 628,
    y: 220
  }],

  cellPdf7: [{
    x: 705,
    y: 203
  }],

  // cellPdf10: [{
  //   x: 474, // 474 || 552 || 628
  //   y: 269
  // },
  // {
  //   x: 552, // 474 || 552 || 628
  //   y: 269
  // },
  // {
  //   x: 628, // 474 || 552 || 628
  //   y: 269
  // }],
  
  cellPdf811: [{
    x: 54,
    y: 269 // 269 || 277 || 284
  }],
  cellPdf812: [{
    x: 240,
    y: 269
  }],
  cellPdf813: [{
    x: 474, 
    y: 269
  }],
  cellPdf814: [{
    x: 552, 
    y: 269
  }],
  cellPdf815: [{
    x: 628,
    y: 269
  }],

  cellPdf821: [{
    x: 54,
    y: 277 // 269 || 277 || 284
  }],
  cellPdf822: [{
    x: 240,
    y: 277
  }],
  cellPdf823: [{
    x: 474, 
    y: 277
  }],
  cellPdf824: [{
    x: 552, 
    y: 277
  }],
  cellPdf825: [{
    x: 628,
    y: 277
  }],
    
  cellPdf831: [{
    x: 54,
    y: 284 // 269 || 277 || 284
  }],
  cellPdf832: [{
    x: 240,
    y: 284
  }],
  cellPdf833: [{
    x: 474, 
    y: 284
  }],
  cellPdf834: [{
    x: 552, 
    y: 284
  }],
  cellPdf835: [{
    x: 628,
    y: 284
  }],

  cellPdf11: [{
    x: 705,
    y: 262
  }],
  cellPdf12: [{
    x: 54,
    y: 313
  }],
  cellPdf13: [{
    x: 240,
    y: 313
  }],
  cellPdf14: [{
    x: 398,
    y: 313
  }],
  cellPdf15: [{
    x: 552,
    y: 313
  }],
  cellPdf16: [{
    x: 54,
    y: 344
  }],
  cellPdf17: [{
    x: 372,
    y: 348
  }],
  cellPdf18: [{
    x: 392,
    y: 360
  }],
  cellPdf19: [
    {
      x: 316,
      y: 372
    },
    {
      x: 368,
      y: 378
    },
    {
      x: 351,
      y: 384
    },
    {
      x: 360,
      y: 389.5
    },
    {
      x: 367,
      y: 395
    },
    {
      x: 296,
      y: 401
    }],
  cellPdf20: [{
    x: 412,
    y: 407
  }],
  cellPdf21: [{
    x: 306,
    y: 412
  }],
  cellPdf22: [{
    x: 264,
    y: 418
  }],
  cellPdf23: [{
    x: 552,
    y: 344
  }],
  cellPdf24: [{
    x: 662,
    y: 431
  }],
  cellPdf25: [{
    x: 75,
    y: 536.5
  }],
  cellPdf26: [{
    x: 608,
    y: 532
  }]
}

export interface IGenerationPDFCells {
  cellPdf1: string;
  cellPdf2: string;
  cellPdf3: string;
  cellPdf4: string;
  cellPdf5: string;
  cellPdf6: string;
  cellPdf7: string;
  cellPdf8: string;
  cellPdf9: string;
  cellPdf10: string;
  cellPdf11: string;
  cellPdf12: string;
  cellPdf13: string;
  cellPdf14: string;
  cellPdf15: string;
  cellPdf16: string;
  cellPdf17: string;
  cellPdf18: string;
  cellPdf19: string;
  cellPdf20: string;
  cellPdf21: string;
  cellPdf22: string;
  cellPdf23: string;
  cellPdf24: string;
  cellPdf25: string;
  cellPdf26: string;

}