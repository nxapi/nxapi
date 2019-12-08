import java from 'js-to-java';

export interface IApolloOtaAccount {
  password?: string;
  phone?: string;
  rates?: {value: string};
  name?: string;
  type?: string;
}

export class ApolloOtaAccount {
  constructor(params: IApolloOtaAccount) {
    this.password = params.password;
    this.phone = params.phone;
    this.rates = params.rates;
    this.name = params.name;
    this.type = params.type;
  }

  password?: string;
  phone?: string;
  rates?: {value: string};
  name?: string;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ApolloOtaAccount',
      $: {
        password: java.String(this.password),
        phone: java.String(this.phone),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        name: java.String(this.name),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
