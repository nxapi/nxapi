import java from 'js-to-java';

export interface IRevenueRoomNightsFeeDetailDTO {
  feeAmount?: {value: string};
  roomNo?: string;
  bizDate?: string;
  operateTime?: Date;
  remark?: string;
  payTypeDesc?: string;
  status?: string;
}

export class RevenueRoomNightsFeeDetailDTO {
  constructor(params: IRevenueRoomNightsFeeDetailDTO) {
    this.feeAmount = params.feeAmount;
    this.roomNo = params.roomNo;
    this.bizDate = params.bizDate;
    this.operateTime = params.operateTime;
    this.remark = params.remark;
    this.payTypeDesc = params.payTypeDesc;
    this.status = params.status;
  }

  feeAmount?: {value: string};
  roomNo?: string;
  bizDate?: string;
  operateTime?: Date;
  remark?: string;
  payTypeDesc?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RevenueRoomNightsFeeDetailDTO',
      $: {
        feeAmount: this.feeAmount
          ? java.BigDecimal(this.feeAmount.value)
          : null,
        roomNo: java.String(this.roomNo),
        bizDate: java.String(this.bizDate),
        operateTime: this.operateTime,
        remark: java.String(this.remark),
        payTypeDesc: java.String(this.payTypeDesc),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
