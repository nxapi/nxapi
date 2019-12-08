import java from 'js-to-java';

export interface IHotelLegalPersonDto {
  reverseIdCardPicUrl?: string;
  idCardType?: string;
  idCardTypeName?: string;
  companyName?: string;
  idCardNo?: string;
  legalEmail?: string;
  businessLicensePicUrl?: string;
  businessLicenseNo?: string;
  periodOfValidity?: string;
  type?: string;
  frontIdCardPicUrl?: string;
  legalPersonName?: string;
}

export class HotelLegalPersonDto {
  constructor(params: IHotelLegalPersonDto) {
    this.reverseIdCardPicUrl = params.reverseIdCardPicUrl;
    this.idCardType = params.idCardType;
    this.idCardTypeName = params.idCardTypeName;
    this.companyName = params.companyName;
    this.idCardNo = params.idCardNo;
    this.legalEmail = params.legalEmail;
    this.businessLicensePicUrl = params.businessLicensePicUrl;
    this.businessLicenseNo = params.businessLicenseNo;
    this.periodOfValidity = params.periodOfValidity;
    this.type = params.type;
    this.frontIdCardPicUrl = params.frontIdCardPicUrl;
    this.legalPersonName = params.legalPersonName;
  }

  reverseIdCardPicUrl?: string;
  idCardType?: string;
  idCardTypeName?: string;
  companyName?: string;
  idCardNo?: string;
  legalEmail?: string;
  businessLicensePicUrl?: string;
  businessLicenseNo?: string;
  periodOfValidity?: string;
  type?: string;
  frontIdCardPicUrl?: string;
  legalPersonName?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.HotelLegalPersonDto',
      $: {
        reverseIdCardPicUrl: java.String(this.reverseIdCardPicUrl),
        idCardType: java.String(this.idCardType),
        idCardTypeName: java.String(this.idCardTypeName),
        companyName: java.String(this.companyName),
        idCardNo: java.String(this.idCardNo),
        legalEmail: java.String(this.legalEmail),
        businessLicensePicUrl: java.String(this.businessLicensePicUrl),
        businessLicenseNo: java.String(this.businessLicenseNo),
        periodOfValidity: java.String(this.periodOfValidity),
        type: java.String(this.type),
        frontIdCardPicUrl: java.String(this.frontIdCardPicUrl),
        legalPersonName: java.String(this.legalPersonName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
