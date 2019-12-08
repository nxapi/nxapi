import java from 'js-to-java';

export interface IRoomCardNoReportDetailVo {
  checkIn?: Date;
  reservationId?: number;
  roomNo?: string;
  orderSn?: string;
  checkInTime?: Date;
  name?: string;
  cardReaderFlag?: number;
}

export class RoomCardNoReportDetailVo {
  constructor(params: IRoomCardNoReportDetailVo) {
    this.checkIn = params.checkIn;
    this.reservationId = params.reservationId;
    this.roomNo = params.roomNo;
    this.orderSn = params.orderSn;
    this.checkInTime = params.checkInTime;
    this.name = params.name;
    this.cardReaderFlag = params.cardReaderFlag;
  }

  checkIn?: Date;
  reservationId?: number;
  roomNo?: string;
  orderSn?: string;
  checkInTime?: Date;
  name?: string;
  cardReaderFlag?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.RoomCardNoReportDetailVo',
      $: {
        checkIn: this.checkIn,
        reservationId: java.Long(this.reservationId),
        roomNo: java.String(this.roomNo),
        orderSn: java.String(this.orderSn),
        checkInTime: this.checkInTime,
        name: java.String(this.name),
        cardReaderFlag: java.Integer(this.cardReaderFlag),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
