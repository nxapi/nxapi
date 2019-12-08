import java from 'js-to-java';

export interface IHotelMinPriceRequest {
  checkoutDate?: Date;
  checkInType?: number;
  hotelIdList?: Array<number>;
  checkInDate?: Date;
  channelId?: number;
}

export class HotelMinPriceRequest {
  constructor(params: IHotelMinPriceRequest) {
    this.checkoutDate = params.checkoutDate;
    this.checkInType = params.checkInType;
    this.hotelIdList = params.hotelIdList;
    this.checkInDate = params.checkInDate;
    this.channelId = params.channelId;
  }

  checkoutDate?: Date;
  checkInType?: number;
  hotelIdList?: Array<number>;
  checkInDate?: Date;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotelMinPriceRequest',
      $: {
        checkoutDate: this.checkoutDate,
        checkInType: java.Integer(this.checkInType),
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        checkInDate: this.checkInDate,
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
