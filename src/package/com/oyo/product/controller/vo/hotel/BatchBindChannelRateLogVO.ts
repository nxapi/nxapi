import java from 'js-to-java';

export interface IBatchBindChannelRateLogVO {
  result?: number;
  batchNo?: string;
  fileName?: string;
  isDeleted?: boolean;
  createTime?: Date;
  remark?: string;
  updateTime?: Date;
  id?: number;
  type?: number;
  operatorName?: string;
  isSync?: number;
  operatorId?: number;
}

export class BatchBindChannelRateLogVO {
  constructor(params: IBatchBindChannelRateLogVO) {
    this.result = params.result;
    this.batchNo = params.batchNo;
    this.fileName = params.fileName;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.type = params.type;
    this.operatorName = params.operatorName;
    this.isSync = params.isSync;
    this.operatorId = params.operatorId;
  }

  result?: number;
  batchNo?: string;
  fileName?: string;
  isDeleted?: boolean;
  createTime?: Date;
  remark?: string;
  updateTime?: Date;
  id?: number;
  type?: number;
  operatorName?: string;
  isSync?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.BatchBindChannelRateLogVO',
      $: {
        result: java.Integer(this.result),
        batchNo: java.String(this.batchNo),
        fileName: java.String(this.fileName),
        isDeleted: java.Boolean(this.isDeleted),
        createTime: this.createTime,
        remark: java.String(this.remark),
        updateTime: this.updateTime,
        id: java.Long(this.id),
        type: java.Integer(this.type),
        operatorName: java.String(this.operatorName),
        isSync: java.Integer(this.isSync),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
