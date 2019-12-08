import { HotelRoomTypeBedInfoBaseBO } from './HotelRoomTypeBedInfoBaseBO';
import java from 'js-to-java';

export interface IHotelRoomTypeBedInfoBO {
  hotelRoomTypeInfoId?: number;
  bedInfoParentId?: number;
  baseBedInfoList?: Array<HotelRoomTypeBedInfoBaseBO>;
  bedInfoList?: Array<HotelRoomTypeBedInfoBO>;
}

export class HotelRoomTypeBedInfoBO {
  constructor(params: IHotelRoomTypeBedInfoBO) {
    this.hotelRoomTypeInfoId = params.hotelRoomTypeInfoId;
    this.bedInfoParentId = params.bedInfoParentId;
    this.baseBedInfoList = params.baseBedInfoList;
    this.bedInfoList = params.bedInfoList;
  }

  hotelRoomTypeInfoId?: number;
  bedInfoParentId?: number;
  baseBedInfoList?: Array<HotelRoomTypeBedInfoBaseBO>;
  bedInfoList?: Array<HotelRoomTypeBedInfoBO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.HotelRoomTypeBedInfoBO',
      $: {
        hotelRoomTypeInfoId: java.Long(this.hotelRoomTypeInfoId),
        bedInfoParentId: java.Long(this.bedInfoParentId),
        baseBedInfoList: this.baseBedInfoList
          ? java.List(
              (this.baseBedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        bedInfoList: this.bedInfoList
          ? java.List(
              (this.bedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
