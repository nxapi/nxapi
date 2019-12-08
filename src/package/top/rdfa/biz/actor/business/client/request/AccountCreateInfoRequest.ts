import java from 'js-to-java';

export interface IAccountCreateInfoRequest {
  password?: string;
  rates?: {value: string};
  name?: string;
  id?: number;
  type?: string;
}

export class AccountCreateInfoRequest {
  constructor(params: IAccountCreateInfoRequest) {
    this.password = params.password;
    this.rates = params.rates;
    this.name = params.name;
    this.id = params.id;
    this.type = params.type;
  }

  password?: string;
  rates?: {value: string};
  name?: string;
  id?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountCreateInfoRequest',
      $: {
        password: java.String(this.password),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        name: java.String(this.name),
        id: java.Long(this.id),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
