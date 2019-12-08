import java from 'js-to-java';

export interface IMerchantDto {
  code?: string;
  name?: string;
}

export class MerchantDto {
  constructor(params: IMerchantDto) {
    this.code = params.code;
    this.name = params.name;
  }

  code?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.MerchantDto',
      $: {code: java.String(this.code), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
