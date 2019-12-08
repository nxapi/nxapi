import java from 'js-to-java';

export interface IClientBaseResponse<T = any> {
  msg?: string;
  code?: string;
  data?: T;
  showMsg?: string;
}

export class ClientBaseResponse<T = any> {
  constructor(params: IClientBaseResponse<T>) {
    this.msg = params.msg;
    this.code = params.code;
    this.data = params.data;
    this.showMsg = params.showMsg;
  }

  msg?: string;
  code?: string;
  data?: T;
  showMsg?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.response.ClientBaseResponse',
      $: {
        msg: java.String(this.msg),
        code: java.String(this.code),
        data:
          this.data && this.data['__fields2java']
            ? this.data['__fields2java']()
            : this.data,
        showMsg: java.String(this.showMsg),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
