import { AccountInitRequest } from './AccountInitRequest';
import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ILegalPersonSaveOrUpdateRequest {
  leaseTime?: Date;
  accountInitRequest?: AccountInitRequest;
  merchantCode?: string;
  creator?: string;
  licenseNo?: string;
  creditUrl?: string;
  languageType?: LanguageType;
  fireSafetyLicenseUrl?: string;
  modifier?: string;
  termOfOperation?: string;
  extras?: {[name: string]: Object};
  licensePicUrl?: string;
  type?: string;
  specialIndustryLicenseUrl?: string;
  userCode?: number;
  legalClassify?: string;
  otherCertificateUrl?: string;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  authorizationUrl?: string;
  name?: string;
  appKey?: string;
  doAction?: string;
  rentCertificateUrl?: string;
}

export class LegalPersonSaveOrUpdateRequest {
  constructor(params: ILegalPersonSaveOrUpdateRequest) {
    this.leaseTime = params.leaseTime;
    this.accountInitRequest = params.accountInitRequest;
    this.merchantCode = params.merchantCode;
    this.creator = params.creator;
    this.licenseNo = params.licenseNo;
    this.creditUrl = params.creditUrl;
    this.languageType = params.languageType;
    this.fireSafetyLicenseUrl = params.fireSafetyLicenseUrl;
    this.modifier = params.modifier;
    this.termOfOperation = params.termOfOperation;
    this.extras = params.extras;
    this.licensePicUrl = params.licensePicUrl;
    this.type = params.type;
    this.specialIndustryLicenseUrl = params.specialIndustryLicenseUrl;
    this.userCode = params.userCode;
    this.legalClassify = params.legalClassify;
    this.otherCertificateUrl = params.otherCertificateUrl;
    this.legalRepresentative = params.legalRepresentative;
    this.hygieneLicenceUrl = params.hygieneLicenceUrl;
    this.authorizationUrl = params.authorizationUrl;
    this.name = params.name;
    this.appKey = params.appKey;
    this.doAction = params.doAction;
    this.rentCertificateUrl = params.rentCertificateUrl;
  }

  leaseTime?: Date;
  accountInitRequest?: AccountInitRequest;
  merchantCode?: string;
  creator?: string;
  licenseNo?: string;
  creditUrl?: string;
  languageType?: LanguageType;
  fireSafetyLicenseUrl?: string;
  modifier?: string;
  termOfOperation?: string;
  extras?: {[name: string]: Object};
  licensePicUrl?: string;
  type?: string;
  specialIndustryLicenseUrl?: string;
  userCode?: number;
  legalClassify?: string;
  otherCertificateUrl?: string;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  authorizationUrl?: string;
  name?: string;
  appKey?: string;
  doAction?: string;
  rentCertificateUrl?: string;

  __fields2java(): any {
    let extrasMapTransfer = new Map();
    for (let mapKey in this.extras) {
      extrasMapTransfer.set(
        java.String(mapKey),
        this.extras[mapKey] && this.extras[mapKey]['__fields2java']
          ? this.extras[mapKey]['__fields2java']()
          : this.extras[mapKey],
      );
    }
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.LegalPersonSaveOrUpdateRequest',
      $: {
        leaseTime: this.leaseTime,
        accountInitRequest: this.accountInitRequest
          ? this.accountInitRequest.__fields2java()
          : null,
        merchantCode: java.String(this.merchantCode),
        creator: java.String(this.creator),
        licenseNo: java.String(this.licenseNo),
        creditUrl: java.String(this.creditUrl),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        fireSafetyLicenseUrl: java.String(this.fireSafetyLicenseUrl),
        modifier: java.String(this.modifier),
        termOfOperation: java.String(this.termOfOperation),
        extras: java.Map(extrasMapTransfer),
        licensePicUrl: java.String(this.licensePicUrl),
        type: java.String(this.type),
        specialIndustryLicenseUrl: java.String(this.specialIndustryLicenseUrl),
        userCode: java.Long(this.userCode),
        legalClassify: java.String(this.legalClassify),
        otherCertificateUrl: java.String(this.otherCertificateUrl),
        legalRepresentative: java.String(this.legalRepresentative),
        hygieneLicenceUrl: java.String(this.hygieneLicenceUrl),
        authorizationUrl: java.String(this.authorizationUrl),
        name: java.String(this.name),
        appKey: java.String(this.appKey),
        doAction: java.String(this.doAction),
        rentCertificateUrl: java.String(this.rentCertificateUrl),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
