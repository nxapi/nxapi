import { AgreementChangeHistoryEunm } from './../enums/AgreementChangeHistoryEunm';
import java from 'js-to-java';

export interface IAgreementInfoDto {
  changeHistory?: AgreementChangeHistoryEunm;
  crsId?: string;
  expireDate?: Date;
}

export class AgreementInfoDto {
  constructor(params: IAgreementInfoDto) {
    this.changeHistory = params.changeHistory;
    this.crsId = params.crsId;
    this.expireDate = params.expireDate;
  }

  changeHistory?: AgreementChangeHistoryEunm;
  crsId?: string;
  expireDate?: Date;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.AgreementInfoDto',
      $: {
        changeHistory: java['enum'](
          'top.rdfa.biz.agreement.client.dto.enums.AgreementChangeHistoryEunm',
          AgreementChangeHistoryEunm[this.changeHistory],
        ),
        crsId: java.String(this.crsId),
        expireDate: this.expireDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
