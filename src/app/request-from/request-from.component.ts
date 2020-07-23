import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  sectionRequest,
  sectionContacts,
  sectionAddress,
  listPdfCoords
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']

})
export class RequestFromComponent implements OnInit {

  @Input("title") pageTitle = "Title";
  base64data: string | ArrayBuffer = null;

  requestFormGroup: FormGroup;
  //  firstFormGroup: FormGroup;

  get documentsForDownload$() {
    return this.reqForm.documentsForDownload$;
  }

  //documents
  get sectionRequest(): any {
    return sectionRequest;
  }
  get personalInfo(): any {
    return this.reqForm.getFormGroup().controls['personalInfo'] as FormGroup;
  }
  //contacts
  get sectionContacts(): any {
    return sectionContacts;
  }
  get contacts(): any {
    return this.reqForm.getFormGroup().controls['contacts'] as FormGroup;
  }
  //address
  get sectionAddress(): any {
    return sectionAddress;
  }
  get location(): any {
    return this.reqForm.getFormGroup().controls['location'] as FormGroup;
  }
  //radioGroup
  get clientType(): any {
    return this.reqForm.getFormGroup().controls['clientType'] as FormGroup;
  }

  constructor(private reqForm: RequestFormService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/image/0001.jpg', { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.base64data = reader.result;
        }
        reader.readAsDataURL(res);
      });
    this.requestFormGroup = this.reqForm.getFormGroup();
  }

  isDocumentsSelected(): boolean {
    return this.reqForm.isDocumentsSelected();
  }

  send() {
    this.reqForm.sendForm();
  }


  getInputs(): any {
    return {
      cellPdf1: this.requestFormGroup.value.contacts.namePib,
      cellPdf2: this.requestFormGroup.value.contacts.edrpouIpn,
      cellPdf3: this.requestFormGroup.value.personalInfo.cellPdf3,
      cellPdf4: this.requestFormGroup.value.personalInfo.cellPdf4,
      cellPdf5: this.requestFormGroup.value.personalInfo.cellPdf5,
      cellPdf6: this.requestFormGroup.value.personalInfo.cellPdf6,
      cellPdf7: this.requestFormGroup.value.personalInfo.cellPdf7,
      cellPdf8: this.requestFormGroup.value.personalInfo.cellPdf8,
      cellPdf9: this.requestFormGroup.value.personalInfo.cellPdf9,
      cellPdf10: this.requestFormGroup.value.personalInfo.cellPdf10,
      cellPdf11: this.requestFormGroup.value.personalInfo.cellPdf11,
      cellPdf12: this.requestFormGroup.value.personalInfo.cellPdf12,
      cellPdf13: this.requestFormGroup.value.personalInfo.cellPdf13,
      cellPdf14: this.requestFormGroup.value.personalInfo.cellPdf14,
      cellPdf15: this.requestFormGroup.value.personalInfo.cellPdf15,
      cellPdf16: this.requestFormGroup.value.personalInfo.cellPdf16,
      cellPdf17: this.requestFormGroup.value.personalInfo.cellPdf17,
      cellPdf18: this.requestFormGroup.value.personalInfo.cellPdf18,
      cellPdf19: this.requestFormGroup.value.personalInfo.cellPdf19,
      cellPdf20: this.requestFormGroup.value.personalInfo.cellPdf20,
      cellPdf21: this.requestFormGroup.value.personalInfo.cellPdf21,
    };
  }


  generatePdf(values: {
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
  }) {

    const content = Object.keys(values).map(key => {
      return {
        text: values[key],
        fontSize: 5.5,
        background: 'yellow',
        maxwidth: 20,
        absolutePosition: listPdfCoords[key]
      }
    });


    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      background: function (page) {
        if (page !== 2) {
          return [
            {
              image: 'ooo1',
              width: 210 * 4
            }
          ];
        }
      },
      content,
      images: {
        ooo1: this.base64data
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }
}