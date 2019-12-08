import java from 'js-to-java';

export interface ICustomer3CExpDetailDTO {
  valid?: string;
  reason?: string;
  bizDate?: Date;
  channel?: string;
  behaviour?: string;
  hotelId?: number;
  hotelName?: string;
  bookingSn?: string;
}

export class Customer3CExpDetailDTO {
  constructor(params: ICustomer3CExpDetailDTO) {
    this.valid = params.valid;
    this.reason = params.reason;
    this.bizDate = params.bizDate;
    this.channel = params.channel;
    this.behaviour = params.behaviour;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.bookingSn = params.bookingSn;
  }

  valid?: string;
  reason?: string;
  bizDate?: Date;
  channel?: string;
  behaviour?: string;
  hotelId?: number;
  hotelName?: string;
  bookingSn?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.Customer3CExpDetailDTO',
      $: {
        valid: java.String(this.valid),
        reason: java.String(this.reason),
        bizDate: this.bizDate,
        channel: java.String(this.channel),
        behaviour: java.String(this.behaviour),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        bookingSn: java.String(this.bookingSn),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
