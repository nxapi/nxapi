import java from 'js-to-java';

export interface IBizRevenueReportOfDateDTO {
  bizDate?: Date;
  roomNights?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  totRoomAmount?: {value: string};
  occ?: {value: string};
  revpar?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  avgRoomPrice?: {value: string};
  totRooms?: number;
  id?: number;
  totActualAmount?: {value: string};
  blockRooms?: number;
}

export class BizRevenueReportOfDateDTO {
  constructor(params: IBizRevenueReportOfDateDTO) {
    this.bizDate = params.bizDate;
    this.roomNights = params.roomNights;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.totRoomAmount = params.totRoomAmount;
    this.occ = params.occ;
    this.revpar = params.revpar;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.avgRoomPrice = params.avgRoomPrice;
    this.totRooms = params.totRooms;
    this.id = params.id;
    this.totActualAmount = params.totActualAmount;
    this.blockRooms = params.blockRooms;
  }

  bizDate?: Date;
  roomNights?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  totRoomAmount?: {value: string};
  occ?: {value: string};
  revpar?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  avgRoomPrice?: {value: string};
  totRooms?: number;
  id?: number;
  totActualAmount?: {value: string};
  blockRooms?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.BizRevenueReportOfDateDTO',
      $: {
        bizDate: this.bizDate,
        roomNights: this.roomNights
          ? java.BigDecimal(this.roomNights.value)
          : null,
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        totRoomAmount: this.totRoomAmount
          ? java.BigDecimal(this.totRoomAmount.value)
          : null,
        occ: this.occ ? java.BigDecimal(this.occ.value) : null,
        revpar: this.revpar ? java.BigDecimal(this.revpar.value) : null,
        isDeleted: java.Integer(this.isDeleted),
        createTime: this.createTime,
        avgRoomPrice: this.avgRoomPrice
          ? java.BigDecimal(this.avgRoomPrice.value)
          : null,
        totRooms: java.Integer(this.totRooms),
        id: java.Long(this.id),
        totActualAmount: this.totActualAmount
          ? java.BigDecimal(this.totActualAmount.value)
          : null,
        blockRooms: java.Integer(this.blockRooms),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
