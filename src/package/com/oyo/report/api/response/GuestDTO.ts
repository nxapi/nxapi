import java from 'js-to-java';

export interface IGuestDTO {
  cardReaderType?: number;
  guestPhone?: string;
  cardType?: number;
}

export class GuestDTO {
  constructor(params: IGuestDTO) {
    this.cardReaderType = params.cardReaderType;
    this.guestPhone = params.guestPhone;
    this.cardType = params.cardType;
  }

  cardReaderType?: number;
  guestPhone?: string;
  cardType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.GuestDTO',
      $: {
        cardReaderType: java.Integer(this.cardReaderType),
        guestPhone: java.String(this.guestPhone),
        cardType: java.Integer(this.cardType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
