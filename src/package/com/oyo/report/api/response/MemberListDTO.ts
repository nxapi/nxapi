import java from 'js-to-java';

export interface IMemberListDTO {
  phone?: string;
  checkinInMonth?: boolean;
  memberName?: string;
  regDate?: Date;
  hotelId?: number;
  regHotelName?: string;
  regType?: string;
  operator?: string;
}

export class MemberListDTO {
  constructor(params: IMemberListDTO) {
    this.phone = params.phone;
    this.checkinInMonth = params.checkinInMonth;
    this.memberName = params.memberName;
    this.regDate = params.regDate;
    this.hotelId = params.hotelId;
    this.regHotelName = params.regHotelName;
    this.regType = params.regType;
    this.operator = params.operator;
  }

  phone?: string;
  checkinInMonth?: boolean;
  memberName?: string;
  regDate?: Date;
  hotelId?: number;
  regHotelName?: string;
  regType?: string;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.MemberListDTO',
      $: {
        phone: java.String(this.phone),
        checkinInMonth: java.Boolean(this.checkinInMonth),
        memberName: java.String(this.memberName),
        regDate: this.regDate,
        hotelId: java.Long(this.hotelId),
        regHotelName: java.String(this.regHotelName),
        regType: java.String(this.regType),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
