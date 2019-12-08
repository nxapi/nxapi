import java from 'js-to-java';

export interface ICrsBookingRequestVo {
  hubId?: number;
  endDate?: Date;
  orderSn?: string;
  createType?: string;
  clusterId?: number;
  cityId?: number;
  operatorName?: string;
  extBookingSn?: string;
  occ?: number;
  paymentType?: number;
  hotelOyoId?: string;
  dateType?: number;
  isDeleted?: number;
  cooperationType?: number;
  bookingType?: number;
  limit?: number;
  zoneId?: number;
  bookingStatus?: number;
  operatorId?: number;
  channelId?: number;
  salesmanId?: number;
  cidStatus?: number;
  ip?: string;
  stateId?: number;
  hotelId?: number;
  hotelStatus?: number;
  bookingSn?: string;
  queryType?: number;
  beginDate?: Date;
  phone?: string;
  page?: number;
  hotelType?: number;
  isGroup?: number;
  bookingGuestName?: string;
}

export class CrsBookingRequestVo {
  constructor(params: ICrsBookingRequestVo) {
    this.hubId = params.hubId;
    this.endDate = params.endDate;
    this.orderSn = params.orderSn;
    this.createType = params.createType;
    this.clusterId = params.clusterId;
    this.cityId = params.cityId;
    this.operatorName = params.operatorName;
    this.extBookingSn = params.extBookingSn;
    this.occ = params.occ;
    this.paymentType = params.paymentType;
    this.hotelOyoId = params.hotelOyoId;
    this.dateType = params.dateType;
    this.isDeleted = params.isDeleted;
    this.cooperationType = params.cooperationType;
    this.bookingType = params.bookingType;
    this.limit = params.limit;
    this.zoneId = params.zoneId;
    this.bookingStatus = params.bookingStatus;
    this.operatorId = params.operatorId;
    this.channelId = params.channelId;
    this.salesmanId = params.salesmanId;
    this.cidStatus = params.cidStatus;
    this.ip = params.ip;
    this.stateId = params.stateId;
    this.hotelId = params.hotelId;
    this.hotelStatus = params.hotelStatus;
    this.bookingSn = params.bookingSn;
    this.queryType = params.queryType;
    this.beginDate = params.beginDate;
    this.phone = params.phone;
    this.page = params.page;
    this.hotelType = params.hotelType;
    this.isGroup = params.isGroup;
    this.bookingGuestName = params.bookingGuestName;
  }

  hubId?: number;
  endDate?: Date;
  orderSn?: string;
  createType?: string;
  clusterId?: number;
  cityId?: number;
  operatorName?: string;
  extBookingSn?: string;
  occ?: number;
  paymentType?: number;
  hotelOyoId?: string;
  dateType?: number;
  isDeleted?: number;
  cooperationType?: number;
  bookingType?: number;
  limit?: number;
  zoneId?: number;
  bookingStatus?: number;
  operatorId?: number;
  channelId?: number;
  salesmanId?: number;
  cidStatus?: number;
  ip?: string;
  stateId?: number;
  hotelId?: number;
  hotelStatus?: number;
  bookingSn?: string;
  queryType?: number;
  beginDate?: Date;
  phone?: string;
  page?: number;
  hotelType?: number;
  isGroup?: number;
  bookingGuestName?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.request.CrsBookingRequestVo',
      $: {
        hubId: java.Long(this.hubId),
        endDate: this.endDate,
        orderSn: java.String(this.orderSn),
        createType: java.String(this.createType),
        clusterId: java.Long(this.clusterId),
        cityId: java.Long(this.cityId),
        operatorName: java.String(this.operatorName),
        extBookingSn: java.String(this.extBookingSn),
        occ: java.Float(this.occ),
        paymentType: java.Integer(this.paymentType),
        hotelOyoId: java.String(this.hotelOyoId),
        dateType: java.Integer(this.dateType),
        isDeleted: java.Integer(this.isDeleted),
        cooperationType: java.Integer(this.cooperationType),
        bookingType: java.Integer(this.bookingType),
        limit: java.Integer(this.limit),
        zoneId: java.Long(this.zoneId),
        bookingStatus: java.Integer(this.bookingStatus),
        operatorId: java.Long(this.operatorId),
        channelId: java.Integer(this.channelId),
        salesmanId: java.Long(this.salesmanId),
        cidStatus: java.Integer(this.cidStatus),
        ip: java.String(this.ip),
        stateId: java.Long(this.stateId),
        hotelId: java.Long(this.hotelId),
        hotelStatus: java.Integer(this.hotelStatus),
        bookingSn: java.String(this.bookingSn),
        queryType: java.Integer(this.queryType),
        beginDate: this.beginDate,
        phone: java.String(this.phone),
        page: java.Integer(this.page),
        hotelType: java.Long(this.hotelType),
        isGroup: java.Integer(this.isGroup),
        bookingGuestName: java.String(this.bookingGuestName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
