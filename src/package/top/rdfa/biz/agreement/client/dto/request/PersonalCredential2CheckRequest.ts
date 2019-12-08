import java from 'js-to-java';

export interface IPersonalCredential2CheckRequest {
  identity?: string;
  name?: string;
}

export class PersonalCredential2CheckRequest {
  constructor(params: IPersonalCredential2CheckRequest) {
    this.identity = params.identity;
    this.name = params.name;
  }

  identity?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.PersonalCredential2CheckRequest',
      $: {identity: java.String(this.identity), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
