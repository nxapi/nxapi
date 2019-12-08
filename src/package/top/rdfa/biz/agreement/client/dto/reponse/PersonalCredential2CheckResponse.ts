import java from 'js-to-java';

export interface IPersonalCredential2CheckResponse {
  result?: string;
  msg?: string;
}

export class PersonalCredential2CheckResponse {
  constructor(params: IPersonalCredential2CheckResponse) {
    this.result = params.result;
    this.msg = params.msg;
  }

  result?: string;
  msg?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.PersonalCredential2CheckResponse',
      $: {result: java.String(this.result), msg: java.String(this.msg)},
    };
  }
}

//generate by interpret-cli dubbo2.js
