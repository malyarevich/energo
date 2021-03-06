import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  sectionRequest,
  sectionContacts,
  sectionAddress,
  listPdfCoords,
  IGenerationPDFCells
} from './models/form.model';
import { RequestFormService } from './services/request-form.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-from',
  templateUrl: './request-from.component.html',
  styleUrls: ['./request-from.component.scss']

})
export class RequestFromComponent implements OnInit {

  action: any
  endMessage: any

  @Input("title") pageTitle = "Title";
  base64data: string | ArrayBuffer = null;
  pipe = new DatePipe('en-US');

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
    this.http.get('assets/image/zayava.jpg', { responseType: 'blob' })
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

  getOptions(): any {
    return this.requestFormGroup.get('personalInfoOptions').value;
  }

  getInputs(): IGenerationPDFCells {
    const cellList = {};
    cellList['cellPdf1'] = this.requestFormGroup.get('contacts').get('namePib').value;
    cellList['cellPdf2'] = this.requestFormGroup.get('contacts').get('edrpouIpn').value;
    // cellList['cellPdf9'] = this.requestFormGroup.get('personalInfo').get('cellPdf10').value;
    cellList['cellPdf25'] = this.pipe.transform(Date.now(), 'dd                  MM                   yy');
    const personalInfoList = this.requestFormGroup.get('personalInfo').value;
    

    // console.log(this.requestFormGroup.get('personalInfo').value);
    // console.log(this.pipe.transform(Date.now(), 'ddMMyy'));

    return Object.assign({}, cellList, personalInfoList) as IGenerationPDFCells;
  }


  generatePdf(values: IGenerationPDFCells) {
    const options = this.getOptions();
    const content = Object.keys(values).map(key => {
      return {
        text: values[key],
        fontSize: 5.5,
        // background: 'yellow',
        maxwidth: 20,
        absolutePosition: listPdfCoords[key].length > 1 ? listPdfCoords[key][options[key]] : listPdfCoords[key][0]
      }
    });


    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      background: function (page) {
        if (page !== 2) {
          return [
            {
              image: 'zayava',
              width: 210 * 4
            }
          ];
        }
      },
      content,
      images: {
        zayava: this.base64data
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }
}