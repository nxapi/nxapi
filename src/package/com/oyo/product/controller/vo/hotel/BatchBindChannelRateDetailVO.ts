import java from 'js-to-java';

export interface IBatchBindChannelRateDetailVO {
  roomTypeIdList?: Array<number>;
  failType?: number;
  failTypeName?: string;
  channelCodeList?: Array<string>;
  oyoIdList?: Array<string>;
  hotelIdList?: Array<number>;
  rateCodeIdList?: Array<number>;
}

export class BatchBindChannelRateDetailVO {
  constructor(params: IBatchBindChannelRateDetailVO) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.failType = params.failType;
    this.failTypeName = params.failTypeName;
    this.channelCodeList = params.channelCodeList;
    this.oyoIdList = params.oyoIdList;
    this.hotelIdList = params.hotelIdList;
    this.rateCodeIdList = params.rateCodeIdList;
  }

  roomTypeIdList?: Array<number>;
  failType?: number;
  failTypeName?: string;
  channelCodeList?: Array<string>;
  oyoIdList?: Array<string>;
  hotelIdList?: Array<number>;
  rateCodeIdList?: Array<number>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.vo.hotel.BatchBindChannelRateDetailVO',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        failType: java.Integer(this.failType),
        failTypeName: java.String(this.failTypeName),
        channelCodeList: this.channelCodeList
          ? java.List(
              (this.channelCodeList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        oyoIdList: this.oyoIdList
          ? java.List(
              (this.oyoIdList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        rateCodeIdList: this.rateCodeIdList
          ? java.List(
              (this.rateCodeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
