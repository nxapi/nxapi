import { ApolloRoomBO } from './../room/ApolloRoomBO';
import java from 'js-to-java';

export interface IApolloHotelRoomTypeBO {
  highestPrice?: {value: string};
  lowestPrice?: {value: string};
  customRoomName?: string;
  weekendPrice?: {value: string};
  weekdayPrice?: {value: string};
  roomTypeId?: number;
  roomList?: Array<ApolloRoomBO>;
}

export class ApolloHotelRoomTypeBO {
  constructor(params: IApolloHotelRoomTypeBO) {
    this.highestPrice = params.highestPrice;
    this.lowestPrice = params.lowestPrice;
    this.customRoomName = params.customRoomName;
    this.weekendPrice = params.weekendPrice;
    this.weekdayPrice = params.weekdayPrice;
    this.roomTypeId = params.roomTypeId;
    this.roomList = params.roomList;
  }

  highestPrice?: {value: string};
  lowestPrice?: {value: string};
  customRoomName?: string;
  weekendPrice?: {value: string};
  weekdayPrice?: {value: string};
  roomTypeId?: number;
  roomList?: Array<ApolloRoomBO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.ApolloHotelRoomTypeBO',
      $: {
        highestPrice: this.highestPrice
          ? java.BigDecimal(this.highestPrice.value)
          : null,
        lowestPrice: this.lowestPrice
          ? java.BigDecimal(this.lowestPrice.value)
          : null,
        customRoomName: java.String(this.customRoomName),
        weekendPrice: this.weekendPrice
          ? java.BigDecimal(this.weekendPrice.value)
          : null,
        weekdayPrice: this.weekdayPrice
          ? java.BigDecimal(this.weekdayPrice.value)
          : null,
        roomTypeId: java.Long(this.roomTypeId),
        roomList: this.roomList
          ? java.List(
              (this.roomList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
