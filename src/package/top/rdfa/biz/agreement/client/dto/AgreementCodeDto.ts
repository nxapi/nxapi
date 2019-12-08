import java from 'js-to-java';

export interface IAgreementCodeDto {
  code?: string;
  version?: string;
}

export class AgreementCodeDto {
  constructor(params: IAgreementCodeDto) {
    this.code = params.code;
    this.version = params.version;
  }

  code?: string;
  version?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.AgreementCodeDto',
      $: {code: java.String(this.code), version: java.String(this.version)},
    };
  }
}

//generate by interpret-cli dubbo2.js
