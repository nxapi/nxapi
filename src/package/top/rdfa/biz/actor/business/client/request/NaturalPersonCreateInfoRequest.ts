import java from 'js-to-java';

export interface INaturalPersonCreateInfoRequest {
  serialVersionUID?: number;
  phone?: string;
  name?: string;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  email?: string;
  certificateBackPicUrl?: string;
  certificateType?: string;
}

export class NaturalPersonCreateInfoRequest {
  constructor(params: INaturalPersonCreateInfoRequest) {
    this.serialVersionUID = params.serialVersionUID;
    this.phone = params.phone;
    this.name = params.name;
    this.certificateFrontPicUrl = params.certificateFrontPicUrl;
    this.type = params.type;
    this.certificateNo = params.certificateNo;
    this.userCode = params.userCode;
    this.email = params.email;
    this.certificateBackPicUrl = params.certificateBackPicUrl;
    this.certificateType = params.certificateType;
  }

  serialVersionUID?: number;
  phone?: string;
  name?: string;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  email?: string;
  certificateBackPicUrl?: string;
  certificateType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.NaturalPersonCreateInfoRequest',
      $: {
        serialVersionUID: java.Long(this.serialVersionUID),
        phone: java.String(this.phone),
        name: java.String(this.name),
        certificateFrontPicUrl: java.String(this.certificateFrontPicUrl),
        type: java.String(this.type),
        certificateNo: java.String(this.certificateNo),
        userCode: java.Long(this.userCode),
        email: java.String(this.email),
        certificateBackPicUrl: java.String(this.certificateBackPicUrl),
        certificateType: java.String(this.certificateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
