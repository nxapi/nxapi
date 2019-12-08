import java from 'js-to-java';

export interface INaturalPersonEditInfoRequest {
  merchantCode?: string;
  modifierId?: number;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  certificateBackPicUrl?: string;
  serialVersionUID?: number;
  phone?: string;
  name?: string;
  appKey?: string;
  email?: string;
  certificateType?: string;
}

export class NaturalPersonEditInfoRequest {
  constructor(params: INaturalPersonEditInfoRequest) {
    this.merchantCode = params.merchantCode;
    this.modifierId = params.modifierId;
    this.certificateFrontPicUrl = params.certificateFrontPicUrl;
    this.type = params.type;
    this.certificateNo = params.certificateNo;
    this.userCode = params.userCode;
    this.certificateBackPicUrl = params.certificateBackPicUrl;
    this.serialVersionUID = params.serialVersionUID;
    this.phone = params.phone;
    this.name = params.name;
    this.appKey = params.appKey;
    this.email = params.email;
    this.certificateType = params.certificateType;
  }

  merchantCode?: string;
  modifierId?: number;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  certificateBackPicUrl?: string;
  serialVersionUID?: number;
  phone?: string;
  name?: string;
  appKey?: string;
  email?: string;
  certificateType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.NaturalPersonEditInfoRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        modifierId: java.Long(this.modifierId),
        certificateFrontPicUrl: java.String(this.certificateFrontPicUrl),
        type: java.String(this.type),
        certificateNo: java.String(this.certificateNo),
        userCode: java.Long(this.userCode),
        certificateBackPicUrl: java.String(this.certificateBackPicUrl),
        serialVersionUID: java.Long(this.serialVersionUID),
        phone: java.String(this.phone),
        name: java.String(this.name),
        appKey: java.String(this.appKey),
        email: java.String(this.email),
        certificateType: java.String(this.certificateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
