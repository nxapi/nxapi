import java from 'js-to-java';

export interface ILegalPersonDTO {
  fireSafetyLicenseUrlId?: number;
  licenseNo?: string;
  creditUrl?: string;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  creatorId?: number;
  modifierId?: number;
  extras?: string;
  licensePicUrl?: string;
  type?: string;
  licensePicUrlId?: number;
  userCode?: number;
  otherCertificateUrl?: string;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  hygieneLicenceUrlId?: number;
  rentCertificateUrl?: string;
  leaseTime?: Date;
  otherCertificateUrlId?: Array<number>;
  certificatePicUrlIdList?: Array<number>;
  rentCertificateUrlId?: number;
  certificatePicUrlList?: Array<string>;
  specialIndustryLicenseUrl?: string;
  specialIndustryLicenseUrlId?: number;
  certificateNo?: string;
  authorizationUrlId?: number;
  authorizationUrl?: string;
  name?: string;
  legalEmail?: string;
  certificateType?: string;
}

export class LegalPersonDTO {
  constructor(params: ILegalPersonDTO) {
    this.fireSafetyLicenseUrlId = params.fireSafetyLicenseUrlId;
    this.licenseNo = params.licenseNo;
    this.creditUrl = params.creditUrl;
    this.fireSafetyLicenseUrl = params.fireSafetyLicenseUrl;
    this.certificatePicUrls = params.certificatePicUrls;
    this.termOfOperation = params.termOfOperation;
    this.creatorId = params.creatorId;
    this.modifierId = params.modifierId;
    this.extras = params.extras;
    this.licensePicUrl = params.licensePicUrl;
    this.type = params.type;
    this.licensePicUrlId = params.licensePicUrlId;
    this.userCode = params.userCode;
    this.otherCertificateUrl = params.otherCertificateUrl;
    this.legalRepresentative = params.legalRepresentative;
    this.hygieneLicenceUrl = params.hygieneLicenceUrl;
    this.hygieneLicenceUrlId = params.hygieneLicenceUrlId;
    this.rentCertificateUrl = params.rentCertificateUrl;
    this.leaseTime = params.leaseTime;
    this.otherCertificateUrlId = params.otherCertificateUrlId;
    this.certificatePicUrlIdList = params.certificatePicUrlIdList;
    this.rentCertificateUrlId = params.rentCertificateUrlId;
    this.certificatePicUrlList = params.certificatePicUrlList;
    this.specialIndustryLicenseUrl = params.specialIndustryLicenseUrl;
    this.specialIndustryLicenseUrlId = params.specialIndustryLicenseUrlId;
    this.certificateNo = params.certificateNo;
    this.authorizationUrlId = params.authorizationUrlId;
    this.authorizationUrl = params.authorizationUrl;
    this.name = params.name;
    this.legalEmail = params.legalEmail;
    this.certificateType = params.certificateType;
  }

  fireSafetyLicenseUrlId?: number;
  licenseNo?: string;
  creditUrl?: string;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  creatorId?: number;
  modifierId?: number;
  extras?: string;
  licensePicUrl?: string;
  type?: string;
  licensePicUrlId?: number;
  userCode?: number;
  otherCertificateUrl?: string;
  legalRepresentative?: string;
  hygieneLicenceUrl?: string;
  hygieneLicenceUrlId?: number;
  rentCertificateUrl?: string;
  leaseTime?: Date;
  otherCertificateUrlId?: Array<number>;
  certificatePicUrlIdList?: Array<number>;
  rentCertificateUrlId?: number;
  certificatePicUrlList?: Array<string>;
  specialIndustryLicenseUrl?: string;
  specialIndustryLicenseUrlId?: number;
  certificateNo?: string;
  authorizationUrlId?: number;
  authorizationUrl?: string;
  name?: string;
  legalEmail?: string;
  certificateType?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.LegalPersonDTO',
      $: {
        fireSafetyLicenseUrlId: java.Long(this.fireSafetyLicenseUrlId),
        licenseNo: java.String(this.licenseNo),
        creditUrl: java.String(this.creditUrl),
        fireSafetyLicenseUrl: java.String(this.fireSafetyLicenseUrl),
        certificatePicUrls: java.String(this.certificatePicUrls),
        termOfOperation: java.String(this.termOfOperation),
        creatorId: java.Long(this.creatorId),
        modifierId: java.Long(this.modifierId),
        extras: java.String(this.extras),
        licensePicUrl: java.String(this.licensePicUrl),
        type: java.String(this.type),
        licensePicUrlId: java.Long(this.licensePicUrlId),
        userCode: java.Long(this.userCode),
        otherCertificateUrl: java.String(this.otherCertificateUrl),
        legalRepresentative: java.String(this.legalRepresentative),
        hygieneLicenceUrl: java.String(this.hygieneLicenceUrl),
        hygieneLicenceUrlId: java.Long(this.hygieneLicenceUrlId),
        rentCertificateUrl: java.String(this.rentCertificateUrl),
        leaseTime: this.leaseTime,
        otherCertificateUrlId: this.otherCertificateUrlId
          ? java.List(
              (this.otherCertificateUrlId || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        certificatePicUrlIdList: this.certificatePicUrlIdList
          ? java.List(
              (this.certificatePicUrlIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        rentCertificateUrlId: java.Long(this.rentCertificateUrlId),
        certificatePicUrlList: this.certificatePicUrlList
          ? java.List(
              (this.certificatePicUrlList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        specialIndustryLicenseUrl: java.String(this.specialIndustryLicenseUrl),
        specialIndustryLicenseUrlId: java.Long(
          this.specialIndustryLicenseUrlId,
        ),
        certificateNo: java.String(this.certificateNo),
        authorizationUrlId: java.Long(this.authorizationUrlId),
        authorizationUrl: java.String(this.authorizationUrl),
        name: java.String(this.name),
        legalEmail: java.String(this.legalEmail),
        certificateType: java.String(this.certificateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
