import java from 'js-to-java';

export interface IReconSummaryDto {
  period?: Date;
  creator?: string;
  otaId?: string;
  otaName?: string;
  successNum?: number;
  remark?: string;
  updateTime?: Date;
  periodFromStr?: string;
  updater?: string;
  uploadFileName?: string;
  statusList?: Array<number>;
  otaCode?: string;
  periodStr?: string;
  createTime?: Date;
  runningStatus?: boolean;
  id?: number;
  isDel?: boolean;
  periodToStr?: string;
  status?: number;
}

export class ReconSummaryDto {
  constructor(params: IReconSummaryDto) {
    this.period = params.period;
    this.creator = params.creator;
    this.otaId = params.otaId;
    this.otaName = params.otaName;
    this.successNum = params.successNum;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.periodFromStr = params.periodFromStr;
    this.updater = params.updater;
    this.uploadFileName = params.uploadFileName;
    this.statusList = params.statusList;
    this.otaCode = params.otaCode;
    this.periodStr = params.periodStr;
    this.createTime = params.createTime;
    this.runningStatus = params.runningStatus;
    this.id = params.id;
    this.isDel = params.isDel;
    this.periodToStr = params.periodToStr;
    this.status = params.status;
  }

  period?: Date;
  creator?: string;
  otaId?: string;
  otaName?: string;
  successNum?: number;
  remark?: string;
  updateTime?: Date;
  periodFromStr?: string;
  updater?: string;
  uploadFileName?: string;
  statusList?: Array<number>;
  otaCode?: string;
  periodStr?: string;
  createTime?: Date;
  runningStatus?: boolean;
  id?: number;
  isDel?: boolean;
  periodToStr?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.ReconSummaryDto',
      $: {
        period: this.period,
        creator: java.String(this.creator),
        otaId: java.String(this.otaId),
        otaName: java.String(this.otaName),
        successNum: java.Integer(this.successNum),
        remark: java.String(this.remark),
        updateTime: this.updateTime,
        periodFromStr: java.String(this.periodFromStr),
        updater: java.String(this.updater),
        uploadFileName: java.String(this.uploadFileName),
        statusList: this.statusList
          ? java.List(
              (this.statusList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        otaCode: java.String(this.otaCode),
        periodStr: java.String(this.periodStr),
        createTime: this.createTime,
        runningStatus: java.Boolean(this.runningStatus),
        id: java.Long(this.id),
        isDel: java.Boolean(this.isDel),
        periodToStr: java.String(this.periodToStr),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
