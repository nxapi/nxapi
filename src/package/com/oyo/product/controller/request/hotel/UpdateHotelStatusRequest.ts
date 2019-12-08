import java from 'js-to-java';

export interface IUpdateHotelStatusRequest {
  reason?: string;
  endDate?: Date;
  forceHotelStatus?: number;
  employeeId?: number;
  hotelId?: number;
  forceReason?: string;
  tructureReasonId?: number;
  operatorName?: string;
  operator?: string;
  oldStatus?: number;
  operatorId?: string;
  startDate?: Date;
  status?: number;
}

export class UpdateHotelStatusRequest {
  constructor(params: IUpdateHotelStatusRequest) {
    this.reason = params.reason;
    this.endDate = params.endDate;
    this.forceHotelStatus = params.forceHotelStatus;
    this.employeeId = params.employeeId;
    this.hotelId = params.hotelId;
    this.forceReason = params.forceReason;
    this.tructureReasonId = params.tructureReasonId;
    this.operatorName = params.operatorName;
    this.operator = params.operator;
    this.oldStatus = params.oldStatus;
    this.operatorId = params.operatorId;
    this.startDate = params.startDate;
    this.status = params.status;
  }

  reason?: string;
  endDate?: Date;
  forceHotelStatus?: number;
  employeeId?: number;
  hotelId?: number;
  forceReason?: string;
  tructureReasonId?: number;
  operatorName?: string;
  operator?: string;
  oldStatus?: number;
  operatorId?: string;
  startDate?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.UpdateHotelStatusRequest',
      $: {
        reason: java.String(this.reason),
        endDate: this.endDate,
        forceHotelStatus: java.Integer(this.forceHotelStatus),
        employeeId: java.Long(this.employeeId),
        hotelId: java.Long(this.hotelId),
        forceReason: java.String(this.forceReason),
        tructureReasonId: java.Long(this.tructureReasonId),
        operatorName: java.String(this.operatorName),
        operator: java.String(this.operator),
        oldStatus: java.Integer(this.oldStatus),
        operatorId: java.String(this.operatorId),
        startDate: this.startDate,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
