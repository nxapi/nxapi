import java from 'js-to-java';

export interface IUpdateHotelStatusLogVO {
  reason?: string;
  oldStatus?: string;
  createTime?: Date;
  endDate?: Date;
  onholdTructureReasonList?: Array<string>;
  hotelId?: number;
  operatorId?: string;
  operatorName?: string;
  operator?: string;
  startDate?: Date;
  status?: string;
}

export class UpdateHotelStatusLogVO {
  constructor(params: IUpdateHotelStatusLogVO) {
    this.reason = params.reason;
    this.oldStatus = params.oldStatus;
    this.createTime = params.createTime;
    this.endDate = params.endDate;
    this.onholdTructureReasonList = params.onholdTructureReasonList;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
    this.operator = params.operator;
    this.startDate = params.startDate;
    this.status = params.status;
  }

  reason?: string;
  oldStatus?: string;
  createTime?: Date;
  endDate?: Date;
  onholdTructureReasonList?: Array<string>;
  hotelId?: number;
  operatorId?: string;
  operatorName?: string;
  operator?: string;
  startDate?: Date;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.UpdateHotelStatusLogVO',
      $: {
        reason: java.String(this.reason),
        oldStatus: java.String(this.oldStatus),
        createTime: this.createTime,
        endDate: this.endDate,
        onholdTructureReasonList: this.onholdTructureReasonList
          ? java.List(
              (this.onholdTructureReasonList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operatorId: java.String(this.operatorId),
        operatorName: java.String(this.operatorName),
        operator: java.String(this.operator),
        startDate: this.startDate,
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
