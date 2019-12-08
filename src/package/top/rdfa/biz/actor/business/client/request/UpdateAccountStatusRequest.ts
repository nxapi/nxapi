import java from 'js-to-java';

export interface IUpdateAccountStatusRequest {
  auditStatus?: number;
  id?: number;
}

export class UpdateAccountStatusRequest {
  constructor(params: IUpdateAccountStatusRequest) {
    this.auditStatus = params.auditStatus;
    this.id = params.id;
  }

  auditStatus?: number;
  id?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.UpdateAccountStatusRequest',
      $: {auditStatus: java.Integer(this.auditStatus), id: java.Long(this.id)},
    };
  }
}

//generate by interpret-cli dubbo2.js
