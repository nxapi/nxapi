import java from 'js-to-java';

export interface IEnterpriseCredential4CheckRequest {
  legalPersonIdentity?: string;
  identity?: string;
  legalPerson?: string;
  name?: string;
}

export class EnterpriseCredential4CheckRequest {
  constructor(params: IEnterpriseCredential4CheckRequest) {
    this.legalPersonIdentity = params.legalPersonIdentity;
    this.identity = params.identity;
    this.legalPerson = params.legalPerson;
    this.name = params.name;
  }

  legalPersonIdentity?: string;
  identity?: string;
  legalPerson?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.EnterpriseCredential4CheckRequest',
      $: {
        legalPersonIdentity: java.String(this.legalPersonIdentity),
        identity: java.String(this.identity),
        legalPerson: java.String(this.legalPerson),
        name: java.String(this.name),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
