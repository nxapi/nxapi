import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface IOtaAccountQueryRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  rates?: {value: string};
  pageSize?: number;
  type?: string;
  pageNum?: number;
  queryType?: string;
  password?: string;
  phone?: string;
  name?: string;
  appKey?: string;
  id?: number;
  status?: string;
}

export class OtaAccountQueryRequest {
  constructor(params: IOtaAccountQueryRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.rates = params.rates;
    this.pageSize = params.pageSize;
    this.type = params.type;
    this.pageNum = params.pageNum;
    this.queryType = params.queryType;
    this.password = params.password;
    this.phone = params.phone;
    this.name = params.name;
    this.appKey = params.appKey;
    this.id = params.id;
    this.status = params.status;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  rates?: {value: string};
  pageSize?: number;
  type?: string;
  pageNum?: number;
  queryType?: string;
  password?: string;
  phone?: string;
  name?: string;
  appKey?: string;
  id?: number;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ota.OtaAccountQueryRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        pageSize: java.Integer(this.pageSize),
        type: java.String(this.type),
        pageNum: java.Integer(this.pageNum),
        queryType: java.String(this.queryType),
        password: java.String(this.password),
        phone: java.String(this.phone),
        name: java.String(this.name),
        appKey: java.String(this.appKey),
        id: java.Long(this.id),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
