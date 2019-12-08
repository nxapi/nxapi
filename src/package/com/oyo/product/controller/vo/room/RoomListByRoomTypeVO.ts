import { RoomListInfo } from './RoomListInfo';
import java from 'js-to-java';

export interface IRoomListByRoomTypeVO {
  roomSelected?: RoomListInfo;
  roomSelectable?: RoomListInfo;
}

export class RoomListByRoomTypeVO {
  constructor(params: IRoomListByRoomTypeVO) {
    this.roomSelected = params.roomSelected;
    this.roomSelectable = params.roomSelectable;
  }

  roomSelected?: RoomListInfo;
  roomSelectable?: RoomListInfo;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomListByRoomTypeVO',
      $: {
        roomSelected: this.roomSelected
          ? this.roomSelected.__fields2java()
          : null,
        roomSelectable: this.roomSelectable
          ? this.roomSelectable.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
