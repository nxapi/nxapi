import java from 'js-to-java';

export interface IOtaAccountDto {
  password?: string;
  phone?: string;
  createTime?: string;
  rates?: {value: string};
  name?: string;
  updateTime?: string;
  id?: number;
  type?: string;
  status?: string;
}

export class OtaAccountDto {
  constructor(params: IOtaAccountDto) {
    this.password = params.password;
    this.phone = params.phone;
    this.createTime = params.createTime;
    this.rates = params.rates;
    this.name = params.name;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.type = params.type;
    this.status = params.status;
  }

  password?: string;
  phone?: string;
  createTime?: string;
  rates?: {value: string};
  name?: string;
  updateTime?: string;
  id?: number;
  type?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.OtaAccountDto',
      $: {
        password: java.String(this.password),
        phone: java.String(this.phone),
        createTime: java.String(this.createTime),
        rates: this.rates ? java.BigDecimal(this.rates.value) : null,
        name: java.String(this.name),
        updateTime: java.String(this.updateTime),
        id: java.Long(this.id),
        type: java.String(this.type),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
