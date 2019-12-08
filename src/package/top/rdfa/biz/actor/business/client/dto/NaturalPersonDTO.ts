import java from 'js-to-java';

export interface INaturalPersonDTO {
  creatorId?: number;
  modifierId?: number;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  certificateBackPicUrl?: string;
  phone?: string;
  name?: string;
  certificateBackPicUrlId?: number;
  email?: string;
  certificateType?: string;
  certificateFrontPicUrlId?: number;
}

export class NaturalPersonDTO {
  constructor(params: INaturalPersonDTO) {
    this.creatorId = params.creatorId;
    this.modifierId = params.modifierId;
    this.certificateFrontPicUrl = params.certificateFrontPicUrl;
    this.type = params.type;
    this.certificateNo = params.certificateNo;
    this.userCode = params.userCode;
    this.certificateBackPicUrl = params.certificateBackPicUrl;
    this.phone = params.phone;
    this.name = params.name;
    this.certificateBackPicUrlId = params.certificateBackPicUrlId;
    this.email = params.email;
    this.certificateType = params.certificateType;
    this.certificateFrontPicUrlId = params.certificateFrontPicUrlId;
  }

  creatorId?: number;
  modifierId?: number;
  certificateFrontPicUrl?: string;
  type?: string;
  certificateNo?: string;
  userCode?: number;
  certificateBackPicUrl?: string;
  phone?: string;
  name?: string;
  certificateBackPicUrlId?: number;
  email?: string;
  certificateType?: string;
  certificateFrontPicUrlId?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.NaturalPersonDTO',
      $: {
        creatorId: java.Long(this.creatorId),
        modifierId: java.Long(this.modifierId),
        certificateFrontPicUrl: java.String(this.certificateFrontPicUrl),
        type: java.String(this.type),
        certificateNo: java.String(this.certificateNo),
        userCode: java.Long(this.userCode),
        certificateBackPicUrl: java.String(this.certificateBackPicUrl),
        phone: java.String(this.phone),
        name: java.String(this.name),
        certificateBackPicUrlId: java.Long(this.certificateBackPicUrlId),
        email: java.String(this.email),
        certificateType: java.String(this.certificateType),
        certificateFrontPicUrlId: java.Long(this.certificateFrontPicUrlId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
