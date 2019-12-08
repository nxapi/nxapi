import java from 'js-to-java';

export interface IExchangeRoomsRequest {
  oldRoomStatus?: number;
  newRoomId?: number;
  oldRoomId?: number;
  hotelId?: number;
  operatorId?: number;
}

export class ExchangeRoomsRequest {
  constructor(params: IExchangeRoomsRequest) {
    this.oldRoomStatus = params.oldRoomStatus;
    this.newRoomId = params.newRoomId;
    this.oldRoomId = params.oldRoomId;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
  }

  oldRoomStatus?: number;
  newRoomId?: number;
  oldRoomId?: number;
  hotelId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.ExchangeRoomsRequest',
      $: {
        oldRoomStatus: java.Integer(this.oldRoomStatus),
        newRoomId: java.Long(this.newRoomId),
        oldRoomId: java.Long(this.oldRoomId),
        hotelId: java.Long(this.hotelId),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
