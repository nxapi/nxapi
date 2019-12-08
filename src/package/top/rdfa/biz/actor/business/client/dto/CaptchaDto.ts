import java from 'js-to-java';

export interface ICaptchaDto {
  verificationKey?: string;
  verificationCode?: string;
}

export class CaptchaDto {
  constructor(params: ICaptchaDto) {
    this.verificationKey = params.verificationKey;
    this.verificationCode = params.verificationCode;
  }

  verificationKey?: string;
  verificationCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.CaptchaDto',
      $: {
        verificationKey: java.String(this.verificationKey),
        verificationCode: java.String(this.verificationCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
