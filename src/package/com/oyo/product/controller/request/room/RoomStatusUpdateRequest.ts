import java from 'js-to-java';

export interface IRoomStatusUpdateRequest {
  roomStatus?: number;
  clientSource?: number;
  comments?: string;
  reasonId?: number;
  operationCode?: number;
  hotelId?: number;
  repairDate?: any;
  operatorId?: number;
  roomId?: number;
}

export class RoomStatusUpdateRequest {
  constructor(params: IRoomStatusUpdateRequest) {
    this.roomStatus = params.roomStatus;
    this.clientSource = params.clientSource;
    this.comments = params.comments;
    this.reasonId = params.reasonId;
    this.operationCode = params.operationCode;
    this.hotelId = params.hotelId;
    this.repairDate = params.repairDate;
    this.operatorId = params.operatorId;
    this.roomId = params.roomId;
  }

  roomStatus?: number;
  clientSource?: number;
  comments?: string;
  reasonId?: number;
  operationCode?: number;
  hotelId?: number;
  repairDate?: any;
  operatorId?: number;
  roomId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.RoomStatusUpdateRequest',
      $: {
        roomStatus: java.Integer(this.roomStatus),
        clientSource: java.Integer(this.clientSource),
        comments: java.String(this.comments),
        reasonId: java.Integer(this.reasonId),
        operationCode: java.Integer(this.operationCode),
        hotelId: java.Long(this.hotelId),
        repairDate: this.repairDate,
        operatorId: java.Long(this.operatorId),
        roomId: java.Long(this.roomId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
