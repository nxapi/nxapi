import java from 'js-to-java';

export interface IRoomTypeNewOldMappingRequest {
  newRoomTypeId?: number;
  hotelId?: number;
  oldRoomTypeId?: number;
}

export class RoomTypeNewOldMappingRequest {
  constructor(params: IRoomTypeNewOldMappingRequest) {
    this.newRoomTypeId = params.newRoomTypeId;
    this.hotelId = params.hotelId;
    this.oldRoomTypeId = params.oldRoomTypeId;
  }

  newRoomTypeId?: number;
  hotelId?: number;
  oldRoomTypeId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeNewOldMappingRequest',
      $: {
        newRoomTypeId: java.Long(this.newRoomTypeId),
        hotelId: java.Long(this.hotelId),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
