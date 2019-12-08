import java from 'js-to-java';

export interface IRoomStatusBatchUpdateRequest {
  roomStatus?: number;
  clientSource?: number;
  comments?: string;
  roomIdList?: Array<number>;
  reasonId?: number;
  operationCode?: number;
  hotelId?: number;
  repairDate?: any;
  operatorId?: number;
}

export class RoomStatusBatchUpdateRequest {
  constructor(params: IRoomStatusBatchUpdateRequest) {
    this.roomStatus = params.roomStatus;
    this.clientSource = params.clientSource;
    this.comments = params.comments;
    this.roomIdList = params.roomIdList;
    this.reasonId = params.reasonId;
    this.operationCode = params.operationCode;
    this.hotelId = params.hotelId;
    this.repairDate = params.repairDate;
    this.operatorId = params.operatorId;
  }

  roomStatus?: number;
  clientSource?: number;
  comments?: string;
  roomIdList?: Array<number>;
  reasonId?: number;
  operationCode?: number;
  hotelId?: number;
  repairDate?: any;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.room.RoomStatusBatchUpdateRequest',
      $: {
        roomStatus: java.Integer(this.roomStatus),
        clientSource: java.Integer(this.clientSource),
        comments: java.String(this.comments),
        roomIdList: this.roomIdList
          ? java.List(
              (this.roomIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        reasonId: java.Integer(this.reasonId),
        operationCode: java.Integer(this.operationCode),
        hotelId: java.Long(this.hotelId),
        repairDate: this.repairDate,
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
