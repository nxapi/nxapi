import { RoomInfoDto } from './RoomInfoDto';
import java from 'js-to-java';

export interface IHotelInfoDto {
  roomInfoList?: Array<RoomInfoDto>;
  hotelId?: number;
}

export class HotelInfoDto {
  constructor(params: IHotelInfoDto) {
    this.roomInfoList = params.roomInfoList;
    this.hotelId = params.hotelId;
  }

  roomInfoList?: Array<RoomInfoDto>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.HotelInfoDto',
      $: {
        roomInfoList: this.roomInfoList
          ? java.List(
              (this.roomInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
