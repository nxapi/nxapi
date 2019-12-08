import java from 'js-to-java';

export interface IThirdAccountDto {
  accountId?: number;
  createTime?: string;
  updateTime?: string;
  id?: number;
  userType?: string;
  type?: string;
  full?: string;
  status?: string;
}

export class ThirdAccountDto {
  constructor(params: IThirdAccountDto) {
    this.accountId = params.accountId;
    this.createTime = params.createTime;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.userType = params.userType;
    this.type = params.type;
    this.full = params.full;
    this.status = params.status;
  }

  accountId?: number;
  createTime?: string;
  updateTime?: string;
  id?: number;
  userType?: string;
  type?: string;
  full?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.ThirdAccountDto',
      $: {
        accountId: java.Long(this.accountId),
        createTime: java.String(this.createTime),
        updateTime: java.String(this.updateTime),
        id: java.Long(this.id),
        userType: java.String(this.userType),
        type: java.String(this.type),
        full: java.String(this.full),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
