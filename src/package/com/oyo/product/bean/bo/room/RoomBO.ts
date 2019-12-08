import java from 'js-to-java';

export interface IRoomBO {
  comments?: string;
  roomNo?: string;
  roomTypeName?: string;
  hotelId?: number;
  roomTypeId?: number;
  hotelRoomTypeBedInfoId?: number;
  isDeleted?: boolean;
  cleanFlag?: number;
  reasonId?: number;
  choosable?: number;
  id?: number;
  apolloStatus?: number;
  floor?: string;
  repairDate?: any;
  operatorId?: number;
  oldRoomTypeId?: number;
  status?: number;
}

export class RoomBO {
  constructor(params: IRoomBO) {
    this.comments = params.comments;
    this.roomNo = params.roomNo;
    this.roomTypeName = params.roomTypeName;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
    this.hotelRoomTypeBedInfoId = params.hotelRoomTypeBedInfoId;
    this.isDeleted = params.isDeleted;
    this.cleanFlag = params.cleanFlag;
    this.reasonId = params.reasonId;
    this.choosable = params.choosable;
    this.id = params.id;
    this.apolloStatus = params.apolloStatus;
    this.floor = params.floor;
    this.repairDate = params.repairDate;
    this.operatorId = params.operatorId;
    this.oldRoomTypeId = params.oldRoomTypeId;
    this.status = params.status;
  }

  comments?: string;
  roomNo?: string;
  roomTypeName?: string;
  hotelId?: number;
  roomTypeId?: number;
  hotelRoomTypeBedInfoId?: number;
  isDeleted?: boolean;
  cleanFlag?: number;
  reasonId?: number;
  choosable?: number;
  id?: number;
  apolloStatus?: number;
  floor?: string;
  repairDate?: any;
  operatorId?: number;
  oldRoomTypeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.room.RoomBO',
      $: {
        comments: java.String(this.comments),
        roomNo: java.String(this.roomNo),
        roomTypeName: java.String(this.roomTypeName),
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
        hotelRoomTypeBedInfoId: java.Long(this.hotelRoomTypeBedInfoId),
        isDeleted: java.Boolean(this.isDeleted),
        cleanFlag: java.Integer(this.cleanFlag),
        reasonId: java.Integer(this.reasonId),
        choosable: java.Integer(this.choosable),
        id: java.Long(this.id),
        apolloStatus: java.Integer(this.apolloStatus),
        floor: java.String(this.floor),
        repairDate: this.repairDate,
        operatorId: java.Long(this.operatorId),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
