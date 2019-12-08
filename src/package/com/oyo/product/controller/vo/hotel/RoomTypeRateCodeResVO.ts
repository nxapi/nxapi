import { RoomTypeBaseRateCodeVO } from './RoomTypeBaseRateCodeVO';
import java from 'js-to-java';

export interface IRoomTypeRateCodeResVO {
  baseRateCodeVO?: Array<RoomTypeBaseRateCodeVO>;
  hotelId?: number;
  hotelName?: string;
  channelId?: number;
}

export class RoomTypeRateCodeResVO {
  constructor(params: IRoomTypeRateCodeResVO) {
    this.baseRateCodeVO = params.baseRateCodeVO;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.channelId = params.channelId;
  }

  baseRateCodeVO?: Array<RoomTypeBaseRateCodeVO>;
  hotelId?: number;
  hotelName?: string;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.RoomTypeRateCodeResVO',
      $: {
        baseRateCodeVO: this.baseRateCodeVO
          ? java.List(
              (this.baseRateCodeVO || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
