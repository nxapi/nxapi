import java from 'js-to-java';

export interface IManualAuthrizationRequest {
  approvalStatus?: string;
  rejectReason?: string;
  agreementId?: number;
}

export class ManualAuthrizationRequest {
  constructor(params: IManualAuthrizationRequest) {
    this.approvalStatus = params.approvalStatus;
    this.rejectReason = params.rejectReason;
    this.agreementId = params.agreementId;
  }

  approvalStatus?: string;
  rejectReason?: string;
  agreementId?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.ManualAuthrizationRequest',
      $: {
        approvalStatus: java.String(this.approvalStatus),
        rejectReason: java.String(this.rejectReason),
        agreementId: java.Long(this.agreementId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
