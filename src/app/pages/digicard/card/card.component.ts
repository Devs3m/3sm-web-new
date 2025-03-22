import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardService } from './@core/card.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  contactDetailsForm: FormGroup;
  userForm!: FormGroup;
  userDetails: any;
  companyName: any;
  email: any;
  cardColor: any;
  contactSaveForm: FormGroup;
  empid: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: CardService,
    private route: ActivatedRoute
  ) {

    this.contactDetailsForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      homePhone: [''],
      workPhone: [''],
      email: [''],
      workplace: [''],
      address: [''],
    });

    this.contactSaveForm = this.formBuilder.group({
      name: [''],
      companyName: [''],
      emailId: [''],
      phoneNumber: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const { company, email, id, color } = params;
      this.companyName = company;
      this.email = email;
      this.empid = id;
      this.cardColor = color;
    });
    if (this.empid) this.getUserDataById(this.empid);
  }

  generateVCF(contact: any): string {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
N:${contact?.name};;;
FN:${contact?.name}
TEL;TYPE=HOME:${contact?.mobile}
TEL;TYPE=WORK:${contact?.work_phone}
EMAIL:${contact?.email}
ORG:${contact?.company}
ADR:;;${contact?.address};;;;
PHOTO;ENCODING=b;TYPE=JPEG:${contact?.photoBase64}
END:VCARD`;

    return vcfContent;
  }


  downloadContact() {
    const contact = this.userDetails;
    contact.photoBase64 = '';
    const vcfContent = this.generateVCF(contact);
    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const name = this.userDetails?.name;
    a.download = `${name}.vcf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  getUserData(name: string) {
    this.service.getByname(name).subscribe((res: any) => {
      if (res && res.length) {
        this.userDetails = res[0];
      } else {
        this.userDetails = {
          "id": 9,
          "name": "Bala Rathna Vignesh",
          "mobile": "6383344319",
          "email": "balarathnavigneah",
          "company": "cardinality",
          "jobtitle": "software developer",
          "title": "ecard",
          "url": "www.google.com",
          "address": "dindigul",
          "instagram": "balarathnavigneah_32",
          "whatsapp": "6383344319",
          "linkedin": "balarathnavigneah3443",
          "facebook": "bala3443",
          "youtube": "bala",
          "skype": "13323ksdk",
          "telegram": "no one",
          "googlepay": "232",
          "paytm": "string",
          "phonepe": null,
          "twitter": "bala"
        };
      }
    });
  }

  getUserDataByQueryParam(companyName: string, email: string) {
    this.service.getUserDetails(companyName, email).subscribe((res: any) => {
      if (res && res.length) {
        this.userDetails = res[0];
      }
    })
  }

  getUserDataById(id: number) {
    this.service.getUserDetailsById(id).subscribe((res: any) => {
      if (res && res.length) {
        this.userDetails = res[0];
      }
    })
  }

  saveUserDetails() {
    this.downloadContact();
    this.service.createUserDetails({ ...this.contactSaveForm.value, companyId: 2 }).subscribe((res) => {
      if (res) {
        (<any>$('#myModal')).modal('hide');
        this.contactSaveForm.reset();
      }
    });
  }

  downloadPdf() {
    window.open('../.././assets/pdf/3G Medical Disposable Products.pdf');
  }

  downloadPdf1() {
    window.open('../.././assets/pdf/3G Medical Apparel disposable.pdf');
  }

  downloadPdf2() {
    window.open('../.././assets/pdf/3G Medical Apparel Reusable.pdf');
  }

}
