import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const ConnectionClients = [
      {
        id: 1,
        firstName: '00130926',
        pibName: 'ПАТ "ЗАПОРІЖЖЯОБЛЕНЕРГО"',
        addressUr : '69035, Україна, м. Запоріжжя, вул. Сталеварів 14',
        addressPost: '69035, Україна, м. Запоріжжя, вул. Сталеварів 14',
        email: 'zoe@zoe.com.ua',
        phone: '0-800-504-502',
        addressSelect: 'м. Запоріжжя',
        address: '69035, Україна, м. Запоріжжя, вул. Сталеварів 14',
      }
    ];
    return (ConnectionClients);
  }
}
