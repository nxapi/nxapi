import java from 'js-to-java';

export interface IRoomApolloStatusUpdateRequest {
  oyoId?: string;
  roomNo?: string;
  operator?: string;
  status?: number;
}

export class RoomApolloStatusUpdateRequest {
  constructor(params: IRoomApolloStatusUpdateRequest) {
    this.oyoId = params.oyoId;
    this.roomNo = params.roomNo;
    this.operator = params.operator;
    this.status = params.status;
  }

  oyoId?: string;
  roomNo?: string;
  operator?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.room.RoomApolloStatusUpdateRequest',
      $: {
        oyoId: java.String(this.oyoId),
        roomNo: java.String(this.roomNo),
        operator: java.String(this.operator),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
