import java from 'js-to-java';

export interface IDataDocumentBo {
  batchNo?: string;
  fileName?: string;
  downloadFileName?: string;
  statusDesc?: string;
  typeDesc?: string;
  updateTime?: Date;
  type?: string;
  operatorName?: string;
  apolloReSign?: boolean;
  createTime?: Date;
  id?: number;
  operatorId?: number;
  status?: number;
}

export class DataDocumentBo {
  constructor(params: IDataDocumentBo) {
    this.batchNo = params.batchNo;
    this.fileName = params.fileName;
    this.downloadFileName = params.downloadFileName;
    this.statusDesc = params.statusDesc;
    this.typeDesc = params.typeDesc;
    this.updateTime = params.updateTime;
    this.type = params.type;
    this.operatorName = params.operatorName;
    this.apolloReSign = params.apolloReSign;
    this.createTime = params.createTime;
    this.id = params.id;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  batchNo?: string;
  fileName?: string;
  downloadFileName?: string;
  statusDesc?: string;
  typeDesc?: string;
  updateTime?: Date;
  type?: string;
  operatorName?: string;
  apolloReSign?: boolean;
  createTime?: Date;
  id?: number;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.document.DataDocumentBo',
      $: {
        batchNo: java.String(this.batchNo),
        fileName: java.String(this.fileName),
        downloadFileName: java.String(this.downloadFileName),
        statusDesc: java.String(this.statusDesc),
        typeDesc: java.String(this.typeDesc),
        updateTime: this.updateTime,
        type: java.String(this.type),
        operatorName: java.String(this.operatorName),
        apolloReSign: java.Boolean(this.apolloReSign),
        createTime: this.createTime,
        id: java.Long(this.id),
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
