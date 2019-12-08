import java from 'js-to-java';

export interface IOtaProductListRequest {
  endDate?: Date;
  rateCodeId?: number;
  checkinTypeList?: Array<number>;
  hotelId?: number;
  channelId?: number;
  roomTypeId?: number;
  startDate?: Date;
}

export class OtaProductListRequest {
  constructor(params: IOtaProductListRequest) {
    this.endDate = params.endDate;
    this.rateCodeId = params.rateCodeId;
    this.checkinTypeList = params.checkinTypeList;
    this.hotelId = params.hotelId;
    this.channelId = params.channelId;
    this.roomTypeId = params.roomTypeId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  rateCodeId?: number;
  checkinTypeList?: Array<number>;
  hotelId?: number;
  channelId?: number;
  roomTypeId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.ota.OtaProductListRequest',
      $: {
        endDate: this.endDate,
        rateCodeId: java.Long(this.rateCodeId),
        checkinTypeList: this.checkinTypeList
          ? java.List(
              (this.checkinTypeList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        channelId: java.Long(this.channelId),
        roomTypeId: java.Long(this.roomTypeId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
