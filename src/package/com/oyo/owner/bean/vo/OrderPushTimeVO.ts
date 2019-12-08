import java from 'js-to-java';

export interface IOrderPushTimeVO {
  accountId?: number;
  startTime?: Date;
  id?: string;
  endTime?: Date;
}

export class OrderPushTimeVO {
  constructor(params: IOrderPushTimeVO) {
    this.accountId = params.accountId;
    this.startTime = params.startTime;
    this.id = params.id;
    this.endTime = params.endTime;
  }

  accountId?: number;
  startTime?: Date;
  id?: string;
  endTime?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.OrderPushTimeVO',
      $: {
        accountId: java.Long(this.accountId),
        startTime: this.startTime,
        id: java.String(this.id),
        endTime: this.endTime,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
