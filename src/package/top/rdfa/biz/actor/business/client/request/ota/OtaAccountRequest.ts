import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface IOtaAccountRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  rates?: {value: string};
  creatorId?: number;
  modifierId?: number;
  type?: string;
  password?: string;
  isDeleted?: string;
  phone?: string;
  name?: string;
  action?: string;
  appKey?: string;
  id?: number;
  status?: string;
}

export class OtaAccountRequest {
  constructor(params: IOtaAccountRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.rates = params.rates;
    this.creatorId = params.creatorId;
    this.modifierId = params.modifierId;
    this.type = params.type;
    this.password = params.password;
    this.isDeleted = params.isDeleted;
    this.phone = params.phone;
    this.name = params.name;
    this.action = params.action;
    this.appKey = params.appKey;
    this.id = params.id;
    this.status = params.status;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  rates?: {value: string};
  creatorId?: number;
  modifierId?: number;
  type?: string;
  password?: string;
  isDeleted?: string;
  phone?: string;
  name?: string;
  action?: string;
  appKey?: string;
  id?: number;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ota.OtaAccountRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        creatorId: java.Long(this.creatorId),
        modifierId: java.Long(this.modifierId),
        type: java.String(this.type),
        password: java.String(this.password),
        isDeleted: java.String(this.isDeleted),
        phone: java.String(this.phone),
        name: java.String(this.name),
        action: java.String(this.action),
        appKey: java.String(this.appKey),
        id: java.Long(this.id),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
