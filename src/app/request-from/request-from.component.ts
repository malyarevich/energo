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
      nameUrPib: this.requestFormGroup.value.personalInfo.nameUrPib,
      registryNumber: this.requestFormGroup.value.personalInfo.registryNumber
    };
  }


  generatePdf(values: {
    nameUrPib: string;
    registryNumber: string;
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