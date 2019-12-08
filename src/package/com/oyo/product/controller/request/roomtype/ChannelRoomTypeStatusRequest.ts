import java from 'js-to-java';

export interface IChannelRoomTypeStatusRequest {
  roomTypeIdList?: Array<number>;
  oldStatus?: string;
  startTime?: Date;
  endTime?: Date;
  channelId?: number;
  status?: string;
}

export class ChannelRoomTypeStatusRequest {
  constructor(params: IChannelRoomTypeStatusRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.oldStatus = params.oldStatus;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.channelId = params.channelId;
    this.status = params.status;
  }

  roomTypeIdList?: Array<number>;
  oldStatus?: string;
  startTime?: Date;
  endTime?: Date;
  channelId?: number;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.ChannelRoomTypeStatusRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        oldStatus: java.String(this.oldStatus),
        startTime: this.startTime,
        endTime: this.endTime,
        channelId: java.Long(this.channelId),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
