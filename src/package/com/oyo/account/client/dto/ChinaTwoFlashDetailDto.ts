import java from 'js-to-java';

export interface IChinaTwoFlashDetailDto {
  chianTwoRevenueAmount?: {value: string};
  chianTwoPeriod?: string;
  chianTwoPayAmount?: {value: string};
  chinaTwoBillNo?: string;
}

export class ChinaTwoFlashDetailDto {
  constructor(params: IChinaTwoFlashDetailDto) {
    this.chianTwoRevenueAmount = params.chianTwoRevenueAmount;
    this.chianTwoPeriod = params.chianTwoPeriod;
    this.chianTwoPayAmount = params.chianTwoPayAmount;
    this.chinaTwoBillNo = params.chinaTwoBillNo;
  }

  chianTwoRevenueAmount?: {value: string};
  chianTwoPeriod?: string;
  chianTwoPayAmount?: {value: string};
  chinaTwoBillNo?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.ChinaTwoFlashDetailDto',
      $: {
        chianTwoRevenueAmount: this.chianTwoRevenueAmount
          ? java.BigDecimal(this.chianTwoRevenueAmount.value)
          : null,
        chianTwoPeriod: java.String(this.chianTwoPeriod),
        chianTwoPayAmount: this.chianTwoPayAmount
          ? java.BigDecimal(this.chianTwoPayAmount.value)
          : null,
        chinaTwoBillNo: java.String(this.chinaTwoBillNo),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
