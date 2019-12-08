import java from 'js-to-java';

export interface IHotelCidComplianceDetailDto {
  valid?: boolean;
  bizDate?: Date;
  channel?: string;
  behaviour?: string;
  bookingSn?: string;
  content?: string;
}

export class HotelCidComplianceDetailDto {
  constructor(params: IHotelCidComplianceDetailDto) {
    this.valid = params.valid;
    this.bizDate = params.bizDate;
    this.channel = params.channel;
    this.behaviour = params.behaviour;
    this.bookingSn = params.bookingSn;
    this.content = params.content;
  }

  valid?: boolean;
  bizDate?: Date;
  channel?: string;
  behaviour?: string;
  bookingSn?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.HotelCidComplianceDetailDto',
      $: {
        valid: java.Boolean(this.valid),
        bizDate: this.bizDate,
        channel: java.String(this.channel),
        behaviour: java.String(this.behaviour),
        bookingSn: java.String(this.bookingSn),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
