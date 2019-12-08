import java from 'js-to-java';

export interface IAdjustReserveFundRpcRequest {
  preAmount?: {value: string};
  amount?: {value: string};
  operationType?: number;
  remark?: string;
  hotelId?: number;
  operatorId?: number;
  operatorName?: string;
}

export class AdjustReserveFundRpcRequest {
  constructor(params: IAdjustReserveFundRpcRequest) {
    this.preAmount = params.preAmount;
    this.amount = params.amount;
    this.operationType = params.operationType;
    this.remark = params.remark;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
  }

  preAmount?: {value: string};
  amount?: {value: string};
  operationType?: number;
  remark?: string;
  hotelId?: number;
  operatorId?: number;
  operatorName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.AdjustReserveFundRpcRequest',
      $: {
        preAmount: this.preAmount
          ? java.BigDecimal(this.preAmount.value)
          : null,
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        operationType: java.Integer(this.operationType),
        remark: java.String(this.remark),
        hotelId: java.Long(this.hotelId),
        operatorId: java.Long(this.operatorId),
        operatorName: java.String(this.operatorName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
