import java from 'js-to-java';

export interface IPmsVerificationResponse {
  sourceId?: number;
  orderSn?: string;
  verificationStatus?: string;
  orderId?: number;
  bookingName?: string;
  bizDate?: any;
  hangingAmount?: {value: string};
  verificationAmount?: {value: string};
  unVerificationAmount?: {value: string};
  remark?: string;
  source?: string;
  operatorName?: string;
  version?: number;
  bookingId?: number;
  verificationStatusName?: string;
  postingId?: number;
  createTime?: Date;
  operatorId?: string;
  hangingType?: string;
  status?: number;
}

export class PmsVerificationResponse {
  constructor(params: IPmsVerificationResponse) {
    this.sourceId = params.sourceId;
    this.orderSn = params.orderSn;
    this.verificationStatus = params.verificationStatus;
    this.orderId = params.orderId;
    this.bookingName = params.bookingName;
    this.bizDate = params.bizDate;
    this.hangingAmount = params.hangingAmount;
    this.verificationAmount = params.verificationAmount;
    this.unVerificationAmount = params.unVerificationAmount;
    this.remark = params.remark;
    this.source = params.source;
    this.operatorName = params.operatorName;
    this.version = params.version;
    this.bookingId = params.bookingId;
    this.verificationStatusName = params.verificationStatusName;
    this.postingId = params.postingId;
    this.createTime = params.createTime;
    this.operatorId = params.operatorId;
    this.hangingType = params.hangingType;
    this.status = params.status;
  }

  sourceId?: number;
  orderSn?: string;
  verificationStatus?: string;
  orderId?: number;
  bookingName?: string;
  bizDate?: any;
  hangingAmount?: {value: string};
  verificationAmount?: {value: string};
  unVerificationAmount?: {value: string};
  remark?: string;
  source?: string;
  operatorName?: string;
  version?: number;
  bookingId?: number;
  verificationStatusName?: string;
  postingId?: number;
  createTime?: Date;
  operatorId?: string;
  hangingType?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.pms.response.PmsVerificationResponse',
      $: {
        sourceId: java.Integer(this.sourceId),
        orderSn: java.String(this.orderSn),
        verificationStatus: java.String(this.verificationStatus),
        orderId: java.Long(this.orderId),
        bookingName: java.String(this.bookingName),
        bizDate: this.bizDate,
        hangingAmount: this.hangingAmount
          ? java.BigDecimal(this.hangingAmount.value)
          : null,
        verificationAmount: this.verificationAmount
          ? java.BigDecimal(this.verificationAmount.value)
          : null,
        unVerificationAmount: this.unVerificationAmount
          ? java.BigDecimal(this.unVerificationAmount.value)
          : null,
        remark: java.String(this.remark),
        source: java.String(this.source),
        operatorName: java.String(this.operatorName),
        version: java.Integer(this.version),
        bookingId: java.Long(this.bookingId),
        verificationStatusName: java.String(this.verificationStatusName),
        postingId: java.Long(this.postingId),
        createTime: this.createTime,
        operatorId: java.String(this.operatorId),
        hangingType: java.String(this.hangingType),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
