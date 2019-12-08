import java from 'js-to-java';

export interface IClientBaseResponse<T = any> {
  msg?: string;
  code?: string;
  data?: T;
}

export class ClientBaseResponse<T = any> {
  constructor(params: IClientBaseResponse<T>) {
    this.msg = params.msg;
    this.code = params.code;
    this.data = params.data;
  }

  msg?: string;
  code?: string;
  data?: T;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.response.ClientBaseResponse',
      $: {
        msg: java.String(this.msg),
        code: java.String(this.code),
        data:
          this.data && this.data['__fields2java']
            ? this.data['__fields2java']()
            : this.data,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
