import java from 'js-to-java';

export interface IOwnerPayVO {
  qrCode?: string;
  sdkKey?: string;
  cashierUrl?: string;
  transactionSn?: string;
}

export class OwnerPayVO {
  constructor(params: IOwnerPayVO) {
    this.qrCode = params.qrCode;
    this.sdkKey = params.sdkKey;
    this.cashierUrl = params.cashierUrl;
    this.transactionSn = params.transactionSn;
  }

  qrCode?: string;
  sdkKey?: string;
  cashierUrl?: string;
  transactionSn?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.vo.OwnerPayVO',
      $: {
        qrCode: java.String(this.qrCode),
        sdkKey: java.String(this.sdkKey),
        cashierUrl: java.String(this.cashierUrl),
        transactionSn: java.String(this.transactionSn),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
