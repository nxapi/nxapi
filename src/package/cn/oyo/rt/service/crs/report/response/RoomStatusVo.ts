import java from 'js-to-java';

export interface IRoomStatusVo {
  createTime?: Date;
  hotelId?: number;
  type?: number;
  roomId?: number;
  status?: number;
}

export class RoomStatusVo {
  constructor(params: IRoomStatusVo) {
    this.createTime = params.createTime;
    this.hotelId = params.hotelId;
    this.type = params.type;
    this.roomId = params.roomId;
    this.status = params.status;
  }

  createTime?: Date;
  hotelId?: number;
  type?: number;
  roomId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.RoomStatusVo',
      $: {
        createTime: this.createTime,
        hotelId: java.Long(this.hotelId),
        type: java.Integer(this.type),
        roomId: java.Long(this.roomId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
