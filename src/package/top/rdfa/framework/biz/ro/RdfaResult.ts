import java from 'js-to-java';

export interface IRdfaResult<T = any> {
  code?: string;
  data?: T;
  success?: boolean;
  cause?: any;
  message?: string;
}

export class RdfaResult<T = any> {
  constructor(params: IRdfaResult<T>) {
    this.code = params.code;
    this.data = params.data;
    this.success = params.success;
    this.cause = params.cause;
    this.message = params.message;
  }

  code?: string;
  data?: T;
  success?: boolean;
  cause?: any;
  message?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.framework.biz.ro.RdfaResult',
      $: {
        code: java.String(this.code),
        data:
          this.data && this.data['__fields2java']
            ? this.data['__fields2java']()
            : this.data,
        success: java.Boolean(this.success),
        cause: java.Character(this.cause),
        message: java.String(this.message),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
