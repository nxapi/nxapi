import java from 'js-to-java';

export interface IBankJoinMemberDTO {
  tgfi?: string;
  jointName?: string;
  jointNumber?: string;
  tgname?: string;
}

export class BankJoinMemberDTO {
  constructor(params: IBankJoinMemberDTO) {
    this.tgfi = params.tgfi;
    this.jointName = params.jointName;
    this.jointNumber = params.jointNumber;
    this.tgname = params.tgname;
  }

  tgfi?: string;
  jointName?: string;
  jointNumber?: string;
  tgname?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.BankJoinMemberDTO',
      $: {
        tgfi: java.String(this.tgfi),
        jointName: java.String(this.jointName),
        jointNumber: java.String(this.jointNumber),
        tgname: java.String(this.tgname),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
