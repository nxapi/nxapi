import java from 'js-to-java';

export interface ILegalPersonEditInfoRequest {
  leaseTime?: Date;
  licenseNo?: string;
  merchantCode?: string;
  creditUrl?: string;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  modifierId?: number;
  licensePicUrl?: string;
  certificatePicUrlList?: Array<string>;
  type?: string;
  specialIndustryLicenseUrl?: string;
  certificateNo?: string;
  userCode?: number;
  otherCertificateUrl?: string;
  serialVersionUID?: number;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  authorizationUrl?: string;
  name?: string;
  legalEmail?: string;
  appKey?: string;
  rentCertificateUrl?: string;
  certificateType?: string;
}

export class LegalPersonEditInfoRequest {
  constructor(params: ILegalPersonEditInfoRequest) {
    this.leaseTime = params.leaseTime;
    this.licenseNo = params.licenseNo;
    this.merchantCode = params.merchantCode;
    this.creditUrl = params.creditUrl;
    this.fireSafetyLicenseUrl = params.fireSafetyLicenseUrl;
    this.certificatePicUrls = params.certificatePicUrls;
    this.termOfOperation = params.termOfOperation;
    this.modifierId = params.modifierId;
    this.licensePicUrl = params.licensePicUrl;
    this.certificatePicUrlList = params.certificatePicUrlList;
    this.type = params.type;
    this.specialIndustryLicenseUrl = params.specialIndustryLicenseUrl;
    this.certificateNo = params.certificateNo;
    this.userCode = params.userCode;
    this.otherCertificateUrl = params.otherCertificateUrl;
    this.serialVersionUID = params.serialVersionUID;
    this.legalRepresentative = params.legalRepresentative;
    this.hygieneLicenceUrl = params.hygieneLicenceUrl;
    this.authorizationUrl = params.authorizationUrl;
    this.name = params.name;
    this.legalEmail = params.legalEmail;
    this.appKey = params.appKey;
    this.rentCertificateUrl = params.rentCertificateUrl;
    this.certificateType = params.certificateType;
  }

  leaseTime?: Date;
  licenseNo?: string;
  merchantCode?: string;
  creditUrl?: string;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  modifierId?: number;
  licensePicUrl?: string;
  certificatePicUrlList?: Array<string>;
  type?: string;
  specialIndustryLicenseUrl?: string;
  certificateNo?: string;
  userCode?: number;
  otherCertificateUrl?: string;
  serialVersionUID?: number;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  authorizationUrl?: string;
  name?: string;
  legalEmail?: string;
  appKey?: string;
  rentCertificateUrl?: string;
  certificateType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.LegalPersonEditInfoRequest',
      $: {
        leaseTime: this.leaseTime,
        licenseNo: java.String(this.licenseNo),
        merchantCode: java.String(this.merchantCode),
        creditUrl: java.String(this.creditUrl),
        fireSafetyLicenseUrl: java.String(this.fireSafetyLicenseUrl),
        certificatePicUrls: java.String(this.certificatePicUrls),
        termOfOperation: java.String(this.termOfOperation),
        modifierId: java.Long(this.modifierId),
        licensePicUrl: java.String(this.licensePicUrl),
        certificatePicUrlList: this.certificatePicUrlList
          ? java.List(
              (this.certificatePicUrlList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        type: java.String(this.type),
        specialIndustryLicenseUrl: java.String(this.specialIndustryLicenseUrl),
        certificateNo: java.String(this.certificateNo),
        userCode: java.Long(this.userCode),
        otherCertificateUrl: java.String(this.otherCertificateUrl),
        serialVersionUID: java.Long(this.serialVersionUID),
        legalRepresentative: java.String(this.legalRepresentative),
        hygieneLicenceUrl: java.String(this.hygieneLicenceUrl),
        authorizationUrl: java.String(this.authorizationUrl),
        name: java.String(this.name),
        legalEmail: java.String(this.legalEmail),
        appKey: java.String(this.appKey),
        rentCertificateUrl: java.String(this.rentCertificateUrl),
        certificateType: java.String(this.certificateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
