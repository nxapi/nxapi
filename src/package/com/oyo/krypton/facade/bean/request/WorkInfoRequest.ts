import java from 'js-to-java';

export interface IWorkInfoRequest {
  subId?: string;
  accountId?: number;
  hotelId?: string;
  taskId?: string;
  fromSource?: string;
}

export class WorkInfoRequest {
  constructor(params: IWorkInfoRequest) {
    this.subId = params.subId;
    this.accountId = params.accountId;
    this.hotelId = params.hotelId;
    this.taskId = params.taskId;
    this.fromSource = params.fromSource;
  }

  subId?: string;
  accountId?: number;
  hotelId?: string;
  taskId?: string;
  fromSource?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.request.WorkInfoRequest',
      $: {
        subId: java.String(this.subId),
        accountId: java.Long(this.accountId),
        hotelId: java.String(this.hotelId),
        taskId: java.String(this.taskId),
        fromSource: java.String(this.fromSource),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
