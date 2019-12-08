import java from 'js-to-java';

export interface IVerificationAmountCountVo {
  totalVerificationAmount?: {value: string};
  totalUnVerificationAmount?: {value: string};
  totalHangingAmount?: {value: string};
}

export class VerificationAmountCountVo {
  constructor(params: IVerificationAmountCountVo) {
    this.totalVerificationAmount = params.totalVerificationAmount;
    this.totalUnVerificationAmount = params.totalUnVerificationAmount;
    this.totalHangingAmount = params.totalHangingAmount;
  }

  totalVerificationAmount?: {value: string};
  totalUnVerificationAmount?: {value: string};
  totalHangingAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.pms.response.VerificationAmountCountVo',
      $: {
        totalVerificationAmount: this.totalVerificationAmount
          ? java.BigDecimal(this.totalVerificationAmount.value)
          : null,
        totalUnVerificationAmount: this.totalUnVerificationAmount
          ? java.BigDecimal(this.totalUnVerificationAmount.value)
          : null,
        totalHangingAmount: this.totalHangingAmount
          ? java.BigDecimal(this.totalHangingAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
