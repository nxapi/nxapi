import java from 'js-to-java';

export interface IRoomNumAndFloorVO {
  floorStr?: string;
  roomNum?: number;
  hotelId?: number;
  floor?: Array<string>;
}

export class RoomNumAndFloorVO {
  constructor(params: IRoomNumAndFloorVO) {
    this.floorStr = params.floorStr;
    this.roomNum = params.roomNum;
    this.hotelId = params.hotelId;
    this.floor = params.floor;
  }

  floorStr?: string;
  roomNum?: number;
  hotelId?: number;
  floor?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomNumAndFloorVO',
      $: {
        floorStr: java.String(this.floorStr),
        roomNum: java.Integer(this.roomNum),
        hotelId: java.Long(this.hotelId),
        floor: this.floor
          ? java.List(
              (this.floor || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
