import { RoomDateInfo } from './RoomDateInfo';
import java from 'js-to-java';

export interface IRoomList {
  roomDateList?: Array<RoomDateInfo>;
  floor?: string;
}

export class RoomList {
  constructor(params: IRoomList) {
    this.roomDateList = params.roomDateList;
    this.floor = params.floor;
  }

  roomDateList?: Array<RoomDateInfo>;
  floor?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomList',
      $: {
        roomDateList: this.roomDateList
          ? java.List(
              (this.roomDateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        floor: java.String(this.floor),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
