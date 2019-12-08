import java from 'js-to-java';

export interface IPersonalCredential3CheckResponse {
  result?: string;
  msg?: string;
}

export class PersonalCredential3CheckResponse {
  constructor(params: IPersonalCredential3CheckResponse) {
    this.result = params.result;
    this.msg = params.msg;
  }

  result?: string;
  msg?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.PersonalCredential3CheckResponse',
      $: {result: java.String(this.result), msg: java.String(this.msg)},
    };
  }
}

//generate by interpret-cli dubbo2.js
