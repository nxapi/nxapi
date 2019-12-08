import java from 'js-to-java';

export interface IRoomTypeSaleReportDTO {
  marketPrice?: {value: string};
  bizDate?: Date;
  roomTypeName?: string;
  hotelId?: number;
  roomTypeId?: number;
  srn?: number;
  occ?: {value: string};
  urn?: {value: string};
  gmv?: {value: string};
  revpar?: {value: string};
  allDayRoomOcc?: {value: string};
  allDayRoomPricePer?: {value: string};
  allDayRoomGmv?: {value: string};
  allDayRoomUrn?: {value: string};
  id?: number;
  allDayRoomAvgPrice?: {value: string};
  roomAvgPrice?: {value: string};
}

export class RoomTypeSaleReportDTO {
  constructor(params: IRoomTypeSaleReportDTO) {
    this.marketPrice = params.marketPrice;
    this.bizDate = params.bizDate;
    this.roomTypeName = params.roomTypeName;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
    this.srn = params.srn;
    this.occ = params.occ;
    this.urn = params.urn;
    this.gmv = params.gmv;
    this.revpar = params.revpar;
    this.allDayRoomOcc = params.allDayRoomOcc;
    this.allDayRoomPricePer = params.allDayRoomPricePer;
    this.allDayRoomGmv = params.allDayRoomGmv;
    this.allDayRoomUrn = params.allDayRoomUrn;
    this.id = params.id;
    this.allDayRoomAvgPrice = params.allDayRoomAvgPrice;
    this.roomAvgPrice = params.roomAvgPrice;
  }

  marketPrice?: {value: string};
  bizDate?: Date;
  roomTypeName?: string;
  hotelId?: number;
  roomTypeId?: number;
  srn?: number;
  occ?: {value: string};
  urn?: {value: string};
  gmv?: {value: string};
  revpar?: {value: string};
  allDayRoomOcc?: {value: string};
  allDayRoomPricePer?: {value: string};
  allDayRoomGmv?: {value: string};
  allDayRoomUrn?: {value: string};
  id?: number;
  allDayRoomAvgPrice?: {value: string};
  roomAvgPrice?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RoomTypeSaleReportDTO',
      $: {
        marketPrice: this.marketPrice
          ? java.BigDecimal(this.marketPrice.value)
          : null,
        bizDate: this.bizDate,
        roomTypeName: java.String(this.roomTypeName),
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Integer(this.roomTypeId),
        srn: java.Integer(this.srn),
        occ: this.occ ? java.BigDecimal(this.occ.value) : null,
        urn: this.urn ? java.BigDecimal(this.urn.value) : null,
        gmv: this.gmv ? java.BigDecimal(this.gmv.value) : null,
        revpar: this.revpar ? java.BigDecimal(this.revpar.value) : null,
        allDayRoomOcc: this.allDayRoomOcc
          ? java.BigDecimal(this.allDayRoomOcc.value)
          : null,
        allDayRoomPricePer: this.allDayRoomPricePer
          ? java.BigDecimal(this.allDayRoomPricePer.value)
          : null,
        allDayRoomGmv: this.allDayRoomGmv
          ? java.BigDecimal(this.allDayRoomGmv.value)
          : null,
        allDayRoomUrn: this.allDayRoomUrn
          ? java.BigDecimal(this.allDayRoomUrn.value)
          : null,
        id: java.Long(this.id),
        allDayRoomAvgPrice: this.allDayRoomAvgPrice
          ? java.BigDecimal(this.allDayRoomAvgPrice.value)
          : null,
        roomAvgPrice: this.roomAvgPrice
          ? java.BigDecimal(this.roomAvgPrice.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
