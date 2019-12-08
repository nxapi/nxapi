import { BookingRoomDto } from './BookingRoomDto';
import java from 'js-to-java';

export interface ICrsBookingDto {
  hubId?: number;
  reservationNameList?: Array<string>;
  remark?: string;
  createType?: string;
  clusterId?: number;
  cityId?: number;
  bookingRoomList?: Array<BookingRoomDto>;
  extBookingSn?: string;
  occ?: number;
  guestName?: string;
  paymentType?: number;
  currentDayCid?: string;
  hotelOyoId?: string;
  checkin?: Date;
  isDeleted?: number;
  cityName?: string;
  stateName?: string;
  cooperationType?: number;
  clusterName?: string;
  bookingStatus?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  checkout?: Date;
  channelId?: number;
  amount?: {value: string};
  cidStatus?: number;
  actualAmount?: {value: string};
  checkInTime?: Date;
  stateId?: number;
  hotelId?: number;
  hotelName?: string;
  bookingId?: number;
  bookingSn?: string;
  checkOutTime?: Date;
  phone?: string;
  createTime?: Date;
  channelName?: string;
  checkInType?: number;
  landline?: string;
  isGroup?: number;
  paidAmount?: {value: string};
}

export class CrsBookingDto {
  constructor(params: ICrsBookingDto) {
    this.hubId = params.hubId;
    this.reservationNameList = params.reservationNameList;
    this.remark = params.remark;
    this.createType = params.createType;
    this.clusterId = params.clusterId;
    this.cityId = params.cityId;
    this.bookingRoomList = params.bookingRoomList;
    this.extBookingSn = params.extBookingSn;
    this.occ = params.occ;
    this.guestName = params.guestName;
    this.paymentType = params.paymentType;
    this.currentDayCid = params.currentDayCid;
    this.hotelOyoId = params.hotelOyoId;
    this.checkin = params.checkin;
    this.isDeleted = params.isDeleted;
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.cooperationType = params.cooperationType;
    this.clusterName = params.clusterName;
    this.bookingStatus = params.bookingStatus;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.zoneName = params.zoneName;
    this.checkout = params.checkout;
    this.channelId = params.channelId;
    this.amount = params.amount;
    this.cidStatus = params.cidStatus;
    this.actualAmount = params.actualAmount;
    this.checkInTime = params.checkInTime;
    this.stateId = params.stateId;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.checkOutTime = params.checkOutTime;
    this.phone = params.phone;
    this.createTime = params.createTime;
    this.channelName = params.channelName;
    this.checkInType = params.checkInType;
    this.landline = params.landline;
    this.isGroup = params.isGroup;
    this.paidAmount = params.paidAmount;
  }

  hubId?: number;
  reservationNameList?: Array<string>;
  remark?: string;
  createType?: string;
  clusterId?: number;
  cityId?: number;
  bookingRoomList?: Array<BookingRoomDto>;
  extBookingSn?: string;
  occ?: number;
  guestName?: string;
  paymentType?: number;
  currentDayCid?: string;
  hotelOyoId?: string;
  checkin?: Date;
  isDeleted?: number;
  cityName?: string;
  stateName?: string;
  cooperationType?: number;
  clusterName?: string;
  bookingStatus?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  checkout?: Date;
  channelId?: number;
  amount?: {value: string};
  cidStatus?: number;
  actualAmount?: {value: string};
  checkInTime?: Date;
  stateId?: number;
  hotelId?: number;
  hotelName?: string;
  bookingId?: number;
  bookingSn?: string;
  checkOutTime?: Date;
  phone?: string;
  createTime?: Date;
  channelName?: string;
  checkInType?: number;
  landline?: string;
  isGroup?: number;
  paidAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.response.CrsBookingDto',
      $: {
        hubId: java.Long(this.hubId),
        reservationNameList: this.reservationNameList
          ? java.List(
              (this.reservationNameList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        remark: java.String(this.remark),
        createType: java.String(this.createType),
        clusterId: java.Long(this.clusterId),
        cityId: java.Long(this.cityId),
        bookingRoomList: this.bookingRoomList
          ? java.List(
              (this.bookingRoomList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        extBookingSn: java.String(this.extBookingSn),
        occ: java.Float(this.occ),
        guestName: java.String(this.guestName),
        paymentType: java.Integer(this.paymentType),
        currentDayCid: java.String(this.currentDayCid),
        hotelOyoId: java.String(this.hotelOyoId),
        checkin: this.checkin,
        isDeleted: java.Integer(this.isDeleted),
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        cooperationType: java.Integer(this.cooperationType),
        clusterName: java.String(this.clusterName),
        bookingStatus: java.String(this.bookingStatus),
        zoneId: java.Long(this.zoneId),
        hubName: java.String(this.hubName),
        zoneName: java.String(this.zoneName),
        checkout: this.checkout,
        channelId: java.Integer(this.channelId),
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        cidStatus: java.Integer(this.cidStatus),
        actualAmount: this.actualAmount
          ? java.BigDecimal(this.actualAmount.value)
          : null,
        checkInTime: this.checkInTime,
        stateId: java.Long(this.stateId),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        checkOutTime: this.checkOutTime,
        phone: java.String(this.phone),
        createTime: this.createTime,
        channelName: java.String(this.channelName),
        checkInType: java.Integer(this.checkInType),
        landline: java.String(this.landline),
        isGroup: java.Integer(this.isGroup),
        paidAmount: this.paidAmount
          ? java.BigDecimal(this.paidAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
