import java from 'js-to-java';

export interface IServiceDetailsDto {
  amount?: string;
  payAmount?: {value: string};
  transNum?: string;
  details?: string;
  id?: string;
  title?: string;
  pushSign?: boolean;
}

export class ServiceDetailsDto {
  constructor(params: IServiceDetailsDto) {
    this.amount = params.amount;
    this.payAmount = params.payAmount;
    this.transNum = params.transNum;
    this.details = params.details;
    this.id = params.id;
    this.title = params.title;
    this.pushSign = params.pushSign;
  }

  amount?: string;
  payAmount?: {value: string};
  transNum?: string;
  details?: string;
  id?: string;
  title?: string;
  pushSign?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.ServiceDetailsDto',
      $: {
        amount: java.String(this.amount),
        payAmount: this.payAmount
          ? java.BigDecimal(this.payAmount.value)
          : null,
        transNum: java.String(this.transNum),
        details: java.String(this.details),
        id: java.String(this.id),
        title: java.String(this.title),
        pushSign: java.Boolean(this.pushSign),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
