import java from 'js-to-java';

export interface IApprovalFlowDto {
  approveStatus?: number;
  accountId?: number;
  positionCode?: string;
  approveName?: string;
  approveTime?: Date;
  approveComments?: string;
}

export class ApprovalFlowDto {
  constructor(params: IApprovalFlowDto) {
    this.approveStatus = params.approveStatus;
    this.accountId = params.accountId;
    this.positionCode = params.positionCode;
    this.approveName = params.approveName;
    this.approveTime = params.approveTime;
    this.approveComments = params.approveComments;
  }

  approveStatus?: number;
  accountId?: number;
  positionCode?: string;
  approveName?: string;
  approveTime?: Date;
  approveComments?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.approval.ApprovalFlowDto',
      $: {
        approveStatus: java.Integer(this.approveStatus),
        accountId: java.Long(this.accountId),
        positionCode: java.String(this.positionCode),
        approveName: java.String(this.approveName),
        approveTime: this.approveTime,
        approveComments: java.String(this.approveComments),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
