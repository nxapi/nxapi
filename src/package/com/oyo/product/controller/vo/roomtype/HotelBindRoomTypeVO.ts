import { RoomTypeBindInfoBO } from './../../../bean/bo/roomtype/RoomTypeBindInfoBO';
import java from 'js-to-java';

export interface IHotelBindRoomTypeVO {
  roomTypeRatio?: number;
  roomTypeInfoList?: Array<RoomTypeBindInfoBO>;
  undistributedRatio?: number;
  customSellTypeRatio?: number;
}

export class HotelBindRoomTypeVO {
  constructor(params: IHotelBindRoomTypeVO) {
    this.roomTypeRatio = params.roomTypeRatio;
    this.roomTypeInfoList = params.roomTypeInfoList;
    this.undistributedRatio = params.undistributedRatio;
    this.customSellTypeRatio = params.customSellTypeRatio;
  }

  roomTypeRatio?: number;
  roomTypeInfoList?: Array<RoomTypeBindInfoBO>;
  undistributedRatio?: number;
  customSellTypeRatio?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.HotelBindRoomTypeVO',
      $: {
        roomTypeRatio: java.Integer(this.roomTypeRatio),
        roomTypeInfoList: this.roomTypeInfoList
          ? java.List(
              (this.roomTypeInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        undistributedRatio: java.Integer(this.undistributedRatio),
        customSellTypeRatio: java.Integer(this.customSellTypeRatio),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
