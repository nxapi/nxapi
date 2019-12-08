import java from 'js-to-java';

export interface IPrepaidBatchQueryDTO {
  period?: string;
  crsId?: string;
}

export class PrepaidBatchQueryDTO {
  constructor(params: IPrepaidBatchQueryDTO) {
    this.period = params.period;
    this.crsId = params.crsId;
  }

  period?: string;
  crsId?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.PrepaidBatchQueryDTO',
      $: {period: java.String(this.period), crsId: java.String(this.crsId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
