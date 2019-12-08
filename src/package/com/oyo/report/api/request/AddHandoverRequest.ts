import java from 'js-to-java';

export interface IAddHandoverRequest {
  consumptionAmount?: {value: string};
  remark?: string;
  updateTime?: Date;
  hotelId?: number;
  operatorName?: string;
  receiptAmount?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  fromTime?: Date;
  reserveFundAmount?: {value: string};
  id?: number;
  operatorId?: number;
  toTime?: Date;
}

export class AddHandoverRequest {
  constructor(params: IAddHandoverRequest) {
    this.consumptionAmount = params.consumptionAmount;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.operatorName = params.operatorName;
    this.receiptAmount = params.receiptAmount;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.fromTime = params.fromTime;
    this.reserveFundAmount = params.reserveFundAmount;
    this.id = params.id;
    this.operatorId = params.operatorId;
    this.toTime = params.toTime;
  }

  consumptionAmount?: {value: string};
  remark?: string;
  updateTime?: Date;
  hotelId?: number;
  operatorName?: string;
  receiptAmount?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  fromTime?: Date;
  reserveFundAmount?: {value: string};
  id?: number;
  operatorId?: number;
  toTime?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.AddHandoverRequest',
      $: {
        consumptionAmount: this.consumptionAmount
          ? java.BigDecimal(this.consumptionAmount.value)
          : null,
        remark: java.String(this.remark),
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        operatorName: java.String(this.operatorName),
        receiptAmount: this.receiptAmount
          ? java.BigDecimal(this.receiptAmount.value)
          : null,
        isDeleted: java.Integer(this.isDeleted),
        createTime: this.createTime,
        fromTime: this.fromTime,
        reserveFundAmount: this.reserveFundAmount
          ? java.BigDecimal(this.reserveFundAmount.value)
          : null,
        id: java.Integer(this.id),
        operatorId: java.Integer(this.operatorId),
        toTime: this.toTime,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
