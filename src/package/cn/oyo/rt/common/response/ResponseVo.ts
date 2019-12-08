import java from 'js-to-java';

export interface IResponseVo<T = any> {
  msg?: string;
  code?: string;
  data?: T;
}

export class ResponseVo<T = any> {
  constructor(params: IResponseVo<T>) {
    this.msg = params.msg;
    this.code = params.code;
    this.data = params.data;
  }

  msg?: string;
  code?: string;
  data?: T;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.common.response.ResponseVo',
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
