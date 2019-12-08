import { RoomList } from './RoomList';
import java from 'js-to-java';

export interface IRoomListInfo {
  count?: number;
  roomList?: Array<RoomList>;
}

export class RoomListInfo {
  constructor(params: IRoomListInfo) {
    this.count = params.count;
    this.roomList = params.roomList;
  }

  count?: number;
  roomList?: Array<RoomList>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomListInfo',
      $: {
        count: java.Integer(this.count),
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
