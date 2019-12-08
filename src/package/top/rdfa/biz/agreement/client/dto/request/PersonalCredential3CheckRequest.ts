import java from 'js-to-java';

export interface IPersonalCredential3CheckRequest {
  identity?: string;
  name?: string;
  mobile?: string;
}

export class PersonalCredential3CheckRequest {
  constructor(params: IPersonalCredential3CheckRequest) {
    this.identity = params.identity;
    this.name = params.name;
    this.mobile = params.mobile;
  }

  identity?: string;
  name?: string;
  mobile?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.PersonalCredential3CheckRequest',
      $: {
        identity: java.String(this.identity),
        name: java.String(this.name),
        mobile: java.String(this.mobile),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
