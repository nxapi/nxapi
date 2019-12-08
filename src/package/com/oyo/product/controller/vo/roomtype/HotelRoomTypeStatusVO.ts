import { ChannelStatusVO } from './ChannelStatusVO';
import java from 'js-to-java';

export interface IHotelRoomTypeStatusVO {
  channelStatusList?: Array<ChannelStatusVO>;
  currentDate?: Date;
  hotelId?: number;
}

export class HotelRoomTypeStatusVO {
  constructor(params: IHotelRoomTypeStatusVO) {
    this.channelStatusList = params.channelStatusList;
    this.currentDate = params.currentDate;
    this.hotelId = params.hotelId;
  }

  channelStatusList?: Array<ChannelStatusVO>;
  currentDate?: Date;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.HotelRoomTypeStatusVO',
      $: {
        channelStatusList: this.channelStatusList
          ? java.List(
              (this.channelStatusList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        currentDate: this.currentDate,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
