import java from 'js-to-java';

export interface IAccountInfoDTO {
  password?: string;
  rates?: {value: string};
  name?: string;
  auditStatus?: number;
  id?: number;
  type?: string;
}

export class AccountInfoDTO {
  constructor(params: IAccountInfoDTO) {
    this.password = params.password;
    this.rates = params.rates;
    this.name = params.name;
    this.auditStatus = params.auditStatus;
    this.id = params.id;
    this.type = params.type;
  }

  password?: string;
  rates?: {value: string};
  name?: string;
  auditStatus?: number;
  id?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.AccountInfoDTO',
      $: {
        password: java.String(this.password),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        name: java.String(this.name),
        auditStatus: java.Integer(this.auditStatus),
        id: java.Long(this.id),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
