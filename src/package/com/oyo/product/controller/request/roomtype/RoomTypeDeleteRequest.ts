import java from 'js-to-java';

export interface IRoomTypeDeleteRequest {
  roomTypeIdList?: Array<number>;
  hotelId?: number;
  operator?: string;
}

export class RoomTypeDeleteRequest {
  constructor(params: IRoomTypeDeleteRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.hotelId = params.hotelId;
    this.operator = params.operator;
  }

  roomTypeIdList?: Array<number>;
  hotelId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeDeleteRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
