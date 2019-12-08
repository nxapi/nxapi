import java from 'js-to-java';

export interface IEnterpriseCredential4CheckResponse {
  result?: string;
  msg?: string;
}

export class EnterpriseCredential4CheckResponse {
  constructor(params: IEnterpriseCredential4CheckResponse) {
    this.result = params.result;
    this.msg = params.msg;
  }

  result?: string;
  msg?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.EnterpriseCredential4CheckResponse',
      $: {result: java.String(this.result), msg: java.String(this.msg)},
    };
  }
}

//generate by interpret-cli dubbo2.js
