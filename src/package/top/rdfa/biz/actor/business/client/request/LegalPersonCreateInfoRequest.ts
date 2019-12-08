import java from 'js-to-java';

export interface ILegalPersonCreateInfoRequest {
  licenseNo?: string;
  creditUrl?: string;
  threeInOne?: number;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  creatorId?: number;
  licensePicUrl?: string;
  bankName?: string;
  type?: string;
  enterpriseProperty?: string;
  userCode?: number;
  otherCertificateUrl?: string;
  serialVersionUID?: number;
  legalRepresentative?: string;
  registeredAddress?: string;
  hygieneLicenceUrl?: string;
  creditCode?: string;
  financialAddress?: string;
  rentCertificateUrl?: string;
  bankNumber?: string;
  bankAccount?: string;
  leaseTime?: Date;
  companyWebsites?: string;
  taxpayer?: string;
  businessScope?: string;
  certificatePicUrlList?: Array<string>;
  specialIndustryLicenseUrl?: string;
  certificateNo?: string;
  enterpriseCategory?: string;
  registeredFund?: string;
  authorizationUrl?: string;
  organizationCode?: string;
  name?: string;
  legalEmail?: string;
  financialPhone?: string;
  usedName?: string;
  certificateType?: string;
}

export class LegalPersonCreateInfoRequest {
  constructor(params: ILegalPersonCreateInfoRequest) {
    this.licenseNo = params.licenseNo;
    this.creditUrl = params.creditUrl;
    this.threeInOne = params.threeInOne;
    this.fireSafetyLicenseUrl = params.fireSafetyLicenseUrl;
    this.certificatePicUrls = params.certificatePicUrls;
    this.termOfOperation = params.termOfOperation;
    this.creatorId = params.creatorId;
    this.licensePicUrl = params.licensePicUrl;
    this.bankName = params.bankName;
    this.type = params.type;
    this.enterpriseProperty = params.enterpriseProperty;
    this.userCode = params.userCode;
    this.otherCertificateUrl = params.otherCertificateUrl;
    this.serialVersionUID = params.serialVersionUID;
    this.legalRepresentative = params.legalRepresentative;
    this.registeredAddress = params.registeredAddress;
    this.hygieneLicenceUrl = params.hygieneLicenceUrl;
    this.creditCode = params.creditCode;
    this.financialAddress = params.financialAddress;
    this.rentCertificateUrl = params.rentCertificateUrl;
    this.bankNumber = params.bankNumber;
    this.bankAccount = params.bankAccount;
    this.leaseTime = params.leaseTime;
    this.companyWebsites = params.companyWebsites;
    this.taxpayer = params.taxpayer;
    this.businessScope = params.businessScope;
    this.certificatePicUrlList = params.certificatePicUrlList;
    this.specialIndustryLicenseUrl = params.specialIndustryLicenseUrl;
    this.certificateNo = params.certificateNo;
    this.enterpriseCategory = params.enterpriseCategory;
    this.registeredFund = params.registeredFund;
    this.authorizationUrl = params.authorizationUrl;
    this.organizationCode = params.organizationCode;
    this.name = params.name;
    this.legalEmail = params.legalEmail;
    this.financialPhone = params.financialPhone;
    this.usedName = params.usedName;
    this.certificateType = params.certificateType;
  }

  licenseNo?: string;
  creditUrl?: string;
  threeInOne?: number;
  fireSafetyLicenseUrl?: string;
  certificatePicUrls?: string;
  termOfOperation?: string;
  creatorId?: number;
  licensePicUrl?: string;
  bankName?: string;
  type?: string;
  enterpriseProperty?: string;
  userCode?: number;
  otherCertificateUrl?: string;
  serialVersionUID?: number;
  legalRepresentative?: string;
  registeredAddress?: string;
  hygieneLicenceUrl?: string;
  creditCode?: string;
  financialAddress?: string;
  rentCertificateUrl?: string;
  bankNumber?: string;
  bankAccount?: string;
  leaseTime?: Date;
  companyWebsites?: string;
  taxpayer?: string;
  businessScope?: string;
  certificatePicUrlList?: Array<string>;
  specialIndustryLicenseUrl?: string;
  certificateNo?: string;
  enterpriseCategory?: string;
  registeredFund?: string;
  authorizationUrl?: string;
  organizationCode?: string;
  name?: string;
  legalEmail?: string;
  financialPhone?: string;
  usedName?: string;
  certificateType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.LegalPersonCreateInfoRequest',
      $: {
        licenseNo: java.String(this.licenseNo),
        creditUrl: java.String(this.creditUrl),
        threeInOne: java.Integer(this.threeInOne),
        fireSafetyLicenseUrl: java.String(this.fireSafetyLicenseUrl),
        certificatePicUrls: java.String(this.certificatePicUrls),
        termOfOperation: java.String(this.termOfOperation),
        creatorId: java.Long(this.creatorId),
        licensePicUrl: java.String(this.licensePicUrl),
        bankName: java.String(this.bankName),
        type: java.String(this.type),
        enterpriseProperty: java.String(this.enterpriseProperty),
        userCode: java.Long(this.userCode),
        otherCertificateUrl: java.String(this.otherCertificateUrl),
        serialVersionUID: java.Long(this.serialVersionUID),
        legalRepresentative: java.String(this.legalRepresentative),
        registeredAddress: java.String(this.registeredAddress),
        hygieneLicenceUrl: java.String(this.hygieneLicenceUrl),
        creditCode: java.String(this.creditCode),
        financialAddress: java.String(this.financialAddress),
        rentCertificateUrl: java.String(this.rentCertificateUrl),
        bankNumber: java.String(this.bankNumber),
        bankAccount: java.String(this.bankAccount),
        leaseTime: this.leaseTime,
        companyWebsites: java.String(this.companyWebsites),
        taxpayer: java.String(this.taxpayer),
        businessScope: java.String(this.businessScope),
        certificatePicUrlList: this.certificatePicUrlList
          ? java.List(
              (this.certificatePicUrlList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        specialIndustryLicenseUrl: java.String(this.specialIndustryLicenseUrl),
        certificateNo: java.String(this.certificateNo),
        enterpriseCategory: java.String(this.enterpriseCategory),
        registeredFund: java.String(this.registeredFund),
        authorizationUrl: java.String(this.authorizationUrl),
        organizationCode: java.String(this.organizationCode),
        name: java.String(this.name),
        legalEmail: java.String(this.legalEmail),
        financialPhone: java.String(this.financialPhone),
        usedName: java.String(this.usedName),
        certificateType: java.String(this.certificateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
