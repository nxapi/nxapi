import java from 'js-to-java';

export interface IIdentityDto {
  identityType?: string;
  identityValue?: string;
}

export class IdentityDto {
  constructor(params: IIdentityDto) {
    this.identityType = params.identityType;
    this.identityValue = params.identityValue;
  }

  identityType?: string;
  identityValue?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.IdentityDto',
      $: {
        identityType: java.String(this.identityType),
        identityValue: java.String(this.identityValue),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
