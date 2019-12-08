import java from 'js-to-java';

export interface ISaveRoomRequest {
  roomIdList?: Array<number>;
  hotelId?: number;
  roomTypeId?: number;
  operator?: string;
}

export class SaveRoomRequest {
  constructor(params: ISaveRoomRequest) {
    this.roomIdList = params.roomIdList;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
    this.operator = params.operator;
  }

  roomIdList?: Array<number>;
  hotelId?: number;
  roomTypeId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.SaveRoomRequest',
      $: {
        roomIdList: this.roomIdList
          ? java.List(
              (this.roomIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
