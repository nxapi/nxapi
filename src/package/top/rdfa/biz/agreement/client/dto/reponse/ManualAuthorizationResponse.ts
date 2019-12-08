import java from 'js-to-java';

export interface IManualAuthorizationResponse {
  applyPersonName?: string;
  pictureUrl?: string;
  contractorName?: string;
  contractIDNo?: string;
  hotelName?: string;
}

export class ManualAuthorizationResponse {
  constructor(params: IManualAuthorizationResponse) {
    this.applyPersonName = params.applyPersonName;
    this.pictureUrl = params.pictureUrl;
    this.contractorName = params.contractorName;
    this.contractIDNo = params.contractIDNo;
    this.hotelName = params.hotelName;
  }

  applyPersonName?: string;
  pictureUrl?: string;
  contractorName?: string;
  contractIDNo?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.ManualAuthorizationResponse',
      $: {
        applyPersonName: java.String(this.applyPersonName),
        pictureUrl: java.String(this.pictureUrl),
        contractorName: java.String(this.contractorName),
        contractIDNo: java.String(this.contractIDNo),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
