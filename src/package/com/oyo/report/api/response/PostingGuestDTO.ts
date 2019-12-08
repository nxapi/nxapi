import java from 'js-to-java';

export interface IPostingGuestDTO {
  code?: number;
  transferStatus?: number;
  orderId?: number;
  orderSn?: string;
  virtualOrderId?: number;
  remark?: string;
  createType?: string;
  type?: number;
  operatorName?: string;
  roomId?: number;
  guestName?: string;
  payType?: number;
  id?: number;
  operatorId?: number;
  amount?: {value: string};
  roomNo?: string;
  hotelId?: number;
  transferOrderId?: number;
  bookingId?: number;
  bookingSn?: string;
  remaining?: {value: string};
  payTypeName?: string;
  createTime?: Date;
  name?: string;
  status?: number;
}

export class PostingGuestDTO {
  constructor(params: IPostingGuestDTO) {
    this.code = params.code;
    this.transferStatus = params.transferStatus;
    this.orderId = params.orderId;
    this.orderSn = params.orderSn;
    this.virtualOrderId = params.virtualOrderId;
    this.remark = params.remark;
    this.createType = params.createType;
    this.type = params.type;
    this.operatorName = params.operatorName;
    this.roomId = params.roomId;
    this.guestName = params.guestName;
    this.payType = params.payType;
    this.id = params.id;
    this.operatorId = params.operatorId;
    this.amount = params.amount;
    this.roomNo = params.roomNo;
    this.hotelId = params.hotelId;
    this.transferOrderId = params.transferOrderId;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.remaining = params.remaining;
    this.payTypeName = params.payTypeName;
    this.createTime = params.createTime;
    this.name = params.name;
    this.status = params.status;
  }

  code?: number;
  transferStatus?: number;
  orderId?: number;
  orderSn?: string;
  virtualOrderId?: number;
  remark?: string;
  createType?: string;
  type?: number;
  operatorName?: string;
  roomId?: number;
  guestName?: string;
  payType?: number;
  id?: number;
  operatorId?: number;
  amount?: {value: string};
  roomNo?: string;
  hotelId?: number;
  transferOrderId?: number;
  bookingId?: number;
  bookingSn?: string;
  remaining?: {value: string};
  payTypeName?: string;
  createTime?: Date;
  name?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.PostingGuestDTO',
      $: {
        code: java.Integer(this.code),
        transferStatus: java.Integer(this.transferStatus),
        orderId: java.Long(this.orderId),
        orderSn: java.String(this.orderSn),
        virtualOrderId: java.Long(this.virtualOrderId),
        remark: java.String(this.remark),
        createType: java.String(this.createType),
        type: java.Integer(this.type),
        operatorName: java.String(this.operatorName),
        roomId: java.Long(this.roomId),
        guestName: java.String(this.guestName),
        payType: java.Integer(this.payType),
        id: java.Long(this.id),
        operatorId: java.Long(this.operatorId),
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        roomNo: java.String(this.roomNo),
        hotelId: java.Long(this.hotelId),
        transferOrderId: java.Long(this.transferOrderId),
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        remaining: this.remaining
          ? java.BigDecimal(this.remaining.value)
          : null,
        payTypeName: java.String(this.payTypeName),
        createTime: this.createTime,
        name: java.String(this.name),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
