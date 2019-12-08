import java from 'js-to-java';

export interface IDataDocumentRecordBo {
  roomTypeCode?: string;
  batchNo?: string;
  statusDesc?: string;
  typeDesc?: string;
  roomNo?: string;
  errorMessage?: string;
  operateType?: string;
  errorCode?: string;
  updateTime?: Date;
  type?: string;
  roomTypeId?: number;
  roomId?: number;
  oyoId?: string;
  newApolloStatus?: number;
  createTime?: Date;
  newFloor?: string;
  id?: number;
  apolloStatus?: number;
  floor?: string;
  newRoomTypeCode?: string;
  newRoomNo?: string;
  status?: number;
}

export class DataDocumentRecordBo {
  constructor(params: IDataDocumentRecordBo) {
    this.roomTypeCode = params.roomTypeCode;
    this.batchNo = params.batchNo;
    this.statusDesc = params.statusDesc;
    this.typeDesc = params.typeDesc;
    this.roomNo = params.roomNo;
    this.errorMessage = params.errorMessage;
    this.operateType = params.operateType;
    this.errorCode = params.errorCode;
    this.updateTime = params.updateTime;
    this.type = params.type;
    this.roomTypeId = params.roomTypeId;
    this.roomId = params.roomId;
    this.oyoId = params.oyoId;
    this.newApolloStatus = params.newApolloStatus;
    this.createTime = params.createTime;
    this.newFloor = params.newFloor;
    this.id = params.id;
    this.apolloStatus = params.apolloStatus;
    this.floor = params.floor;
    this.newRoomTypeCode = params.newRoomTypeCode;
    this.newRoomNo = params.newRoomNo;
    this.status = params.status;
  }

  roomTypeCode?: string;
  batchNo?: string;
  statusDesc?: string;
  typeDesc?: string;
  roomNo?: string;
  errorMessage?: string;
  operateType?: string;
  errorCode?: string;
  updateTime?: Date;
  type?: string;
  roomTypeId?: number;
  roomId?: number;
  oyoId?: string;
  newApolloStatus?: number;
  createTime?: Date;
  newFloor?: string;
  id?: number;
  apolloStatus?: number;
  floor?: string;
  newRoomTypeCode?: string;
  newRoomNo?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.document.DataDocumentRecordBo',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        batchNo: java.String(this.batchNo),
        statusDesc: java.String(this.statusDesc),
        typeDesc: java.String(this.typeDesc),
        roomNo: java.String(this.roomNo),
        errorMessage: java.String(this.errorMessage),
        operateType: java.String(this.operateType),
        errorCode: java.String(this.errorCode),
        updateTime: this.updateTime,
        type: java.String(this.type),
        roomTypeId: java.Long(this.roomTypeId),
        roomId: java.Long(this.roomId),
        oyoId: java.String(this.oyoId),
        newApolloStatus: java.Integer(this.newApolloStatus),
        createTime: this.createTime,
        newFloor: java.String(this.newFloor),
        id: java.Long(this.id),
        apolloStatus: java.Integer(this.apolloStatus),
        floor: java.String(this.floor),
        newRoomTypeCode: java.String(this.newRoomTypeCode),
        newRoomNo: java.String(this.newRoomNo),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
