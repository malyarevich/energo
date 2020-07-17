export enum DocumentsEnem {
  onsentEcp = 'onsentEcp', // 0
  propertyRights = 'propertyRights', // 1
  situationPlan = 'situationPlan', // 2
  passport = 'passport', // 3
  teo = 'teo', // 4
  supplyСontract = 'supplyСontract', // 5
  severalOwners = 'severalOwners', // 6
  extractEd = 'extractEd', // 7
  foundingDocument = 'foundingDocument', // 8
  appointmentManager = 'appointmentManager', // 9
  extractRp = 'extractRp', // 10
  financialDetails = 'financialDetails', // 11
  situationDocument = 'situationDocument', // 12
  proxy = 'proxy', // 13
  powerTechConditions = 'powerTechConditions', // 14
  powersupplyСontract = 'powersupplyСontract', // 15
  powerExtractEd = 'powerExtractEd', // 16
  powerFoundingDocument = 'powerFoundingDocument', // 17
  powerAppointmentManager = 'powerAppointmentManager', // 18
  powerPayerPDV = 'powerPayerPDV', // 19
  powerPayerPNP = 'powerPayerPNP', // 20
  powerPayerStatus = 'powerPayerStatus', // 21
  another = 'another', // 22
  powerSituationPlan = 'powerSituationPlan' // 23
}

export enum StepRadioEnum {
  typeConnection = 'typeConnection',
  askFrom = 'askFrom',
  specialRights = 'specialRights',
  documents = 'documents'
}

export const sectionRequest = [
  {
    legend: 'Контактні дані',
    fields: [
      {
        name: 'cellPdf1',
        placeholder: 'Найменування або ПІБ фізичної особи – замовника послуги з приєднання до електричних мереж:'
      },
      {
        name: 'cellPdf2',
        placeholder: 'Код за ЄДРПОУ/реєстраційний номер облікової картки платника податків або серія та номер паспорта (для фізичних осіб, які через свої релігійні переконання відмовляються від прийняття реєстраційного номера облікової картки платника податків та повідомили про це відповідний орган державної податкової служби і мають відмітку в паспорті або слово «відмова» для паспорта, виготовленого у формі картки):'
      },
      {
        name: 'cellPdf3',
        placeholder: "Назва, місце розташування та функціональне призначення об'єкта замовника:"
      },
      {
        name: 'cellPdf4',
        placeholder: 'Мета приєднання(нове приєднання/зміна технічних параметрів):'
      },
      {
        name: 'cellPdf5',
        placeholder: 'Існуюча дозволена (приєднана) потужність відповідно до умов договору про постачання (користування) електричної енергії (електричною енергією) (вказати дату укладення та номер Договору):'
      },
      {
        name: 'cellPdf6',
        placeholder: 'Величина максимального розрахункового (прогнозованого) навантаження з урахуванням існуючої дозволеної (приєднаної) потужності, кВт. І категорія надійності електропостачання:'
      },
      {
        name: 'cellPdf7',
        placeholder: 'Ступінь напруги в точці приєднання, кВ:'
      },
      {
        name: 'cellPdf8',
        placeholder: 'Графік уведення потужностей за роками (заповнюється винятково замовниками – юридичними особами та фізичними особами-підприємцями). Рік уведення потужності:'
      },
      {
        name: 'cellPdf9',
        placeholder: 'Величина максимального розрахункового (прогнозованого) навантаження з урахуванням існуючої дозволеної (приєднаної) потужності, кВт:'
      },
      {
        name: 'cellPdf10',
        placeholder: 'Категорія надійності електропостачання:'
      },
      {
        name: 'cellPdf11',
        placeholder: "Прогнозована дата введення об'єкта замовника в експлуатацію:"
      },
      {
        name: 'cellPdf12',
        placeholder: 'Режим роботи електроустановок замовника:'
      },
      {
        name: 'cellPdf13',
        placeholder: 'Відомості щодо встановленої потужності електроопалювальних та електронагрівальних установок, кухонних електроплит тощо:'
      },
      {
        name: 'cellPdf14',
        placeholder: '1Відомості щодо встановленої потужності генеруючих установок приватних домогосподарств (тип/потужність):'
      },
      {
        name: 'cellPdf15',
        placeholder: 'Відомості щодо встановлення точки приєднання (межі балансової належності електроустановок замовника та ОСР) на території земельної ділянки замовника(ЗАПЕРЕЧУЮ/НЕ ЗАПЕРЕЧУЮ):'
      },
      {
        name: 'cellPdf16',
        placeholder: 'Інформація про бажання замовника здійснювати проєктування лінійної частини приєднання (самостійно/Оператором системи розподілу (послуга «під ключ»)):'
      },
      {
        name: 'cellPdf17',
        placeholder: 'Необхідність приєднання будівельних струмоприймачів ________ кВт.'
      },
      {
        name: 'cellPdf18',
        placeholder: 'Відомості щодо необхідності встановлення багатофункціонального приладу обліку електричної енергії (ТАК/НІ) та відомості щодо вибору постачальника послуги комерційного обліку (ОСР/інший ППККО):'
      },
      {
        name: 'cellPdf19',
        placeholder: 'Прошу надати послугу з приєднання електроустановок до електричних мереж та здійснити комплекс заходів з приєднання та первинного підключення електроустановок до електричних мереж. Оплату отриманих послуг гарантую:'
      },
      {
        name: 'cellPdf20',
        placeholder: 'Дата'
      },
      {
        name: 'cellPdf21',
        placeholder: 'Пиб'
      },
      {
        name: 'cellPdf22',
        placeholder: '22'
      },
      {
        name: 'cellPdf23',
        placeholder: '23'
      },
      {
        name: 'cellPdf24',
        placeholder: '24'
      },
      {
        name: 'cellPdf25',
        placeholder: '25'
      },
      {
        name: 'cellPdf26',
        placeholder: '26'
      }
    ]
  },
];
// sectionContacts
export const sectionContacts = [
  {
    legend: 'Контактні дані',
    fields: [
      {
        name: 'passwordCustomer',
        type: 'password',
        placeholder: 'Пароль для безпеки вашої інформації'
      },
      {
        name: 'edrpouIpn',
        placeholder: 'ЄДРПОУ / РНОКПП(ІПН)'
      },
      {
        name: 'namePib',
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
  }
];
  export const sectionAddress = [
    {
    legend: 'Адреса об’єкта',
    fields: [
      {
        name: 'branchId',
        placeholder: 'Місто / район',
        type: 'select',
        options: []
      },
      { name: 'address', placeholder: 'Адреса об’єкта' }
    ]
  }
];


export const typeConnectionChecklist = [
  {
    id: 'new',
    description: 'Які приєднуються до електричних мереж уперше'
  },
  {
    id: 'change',
    description: 'Які змінюють технічні параметри'
  },
  {
    id: 'power',
    description: 'Які приєднуються в рахунок потужності'
  }
];

export const askFromChecklist = [
  {
    id: 'phis_o_',
    description: 'Для фізичних осіб'
  },
  {
    id: 'fop_',
    description: 'Для ФОП'
  },
  {
    id: 'ur_',
    description: 'Для юридичних осіб'
  }
];

export const specialRightsChecklist = [
  {
    id: 'self_',
    value: 'self_',
    description: 'Власник'
  },
  {
    id: 'presenter_',
    value: 'presenter_',
    description: 'Довірена особа'
  }
];

export const radioApplicationList = [
  {
    title: "Для об’єктів:",
    chooseList: typeConnectionChecklist,
    step: StepRadioEnum.typeConnection
  },
  {
    title: "Звернення від:",
    chooseList: askFromChecklist,
    step: StepRadioEnum.askFrom
  },
  {
    title: "Заяву подає:",
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
  { id: 'self_ur_new', numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 22] },
  //{ id: 'self_ur_new', numberList: [0, 22] },
  { id: 'presenter_ur_new', numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 13, 22] },
  { id: 'self_phis_o_new', numberList: [0, 1, 2, 3, 4, 5, 6, 22] },
  { id: 'presenter_phis_o_new', numberList: [0, 1, 2, 3, 4, 5, 6, 13, 22] },
  { id: 'self_fop_new', numberList: [0, 1, 2, 3, 7, 10, 4, 5, 22] },
  { id: 'presenter_fop_new', numberList: [0, 1, 2, 3, 7, 10, 4, 5, 13, 22] },
  
  { id: 'self_ur_change', numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 22] },
  { id: 'presenter_ur_change', numberList: [0, 1, 2, 7, 8, 9, 10, 11, 4, 5, 13, 22] },
  { id: 'self_phis_o_change', numberList: [0, 1, 2, 3, 4, 5, 6, 22] },
  { id: 'presenter_phis_o_change', numberList: [0, 1, 2, 3, 4, 5, 6, 13, 22] },
  { id: 'self_fop_change', numberList: [0, 1, 2, 3, 7, 10, 4, 5, 22] },
  { id: 'presenter_fop_change', numberList: [0, 1, 2, 3, 7, 10, 4, 5, 13, 22] },

  
  { id: 'self_ur_power', numberList: [0, 1, 23, 7, 8, 9, 10, 11, 4, 5, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: 'presenter_ur_power', numberList: [0, 1, 23, 7, 8, 9, 10, 11, 4, 5, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: 'self_phis_o_power', numberList: [0, 1, 23, 3, 4, 5, 6, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: 'presenter_phis_o_power', numberList: [0, 1, 23, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: 'self_fop_power', numberList: [0, 1, 23, 3, 7, 10, 4, 5, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { id: 'presenter_fop_power', numberList: [0, 1, 23, 3, 7, 10, 4, 5, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },

];

export const refDocument =
  "https://zakon.rada.gov.ua/laws/file/text/76/f490366n267.doc";

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
  cellPdf1: {
    x: 147,
    y: 168
  },
  cellPdf2: {
    x: 147,
    y: 188
  },
  cellPdf3: {
    x: 147,
    y: 188
  },
  cellPdf4: {
    x: 147,
    y: 188
  }
}
