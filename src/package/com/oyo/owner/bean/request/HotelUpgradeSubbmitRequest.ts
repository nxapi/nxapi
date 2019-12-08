import java from 'js-to-java';

export interface IHotelUpgradeSubbmitRequest {
  accountId?: number;
  question?: string;
  phone?: string;
  operateType?: string;
  hotelId?: number;
  userName?: string;
  hotelName?: string;
}

export class HotelUpgradeSubbmitRequest {
  constructor(params: IHotelUpgradeSubbmitRequest) {
    this.accountId = params.accountId;
    this.question = params.question;
    this.phone = params.phone;
    this.operateType = params.operateType;
    this.hotelId = params.hotelId;
    this.userName = params.userName;
    this.hotelName = params.hotelName;
  }

  accountId?: number;
  question?: string;
  phone?: string;
  operateType?: string;
  hotelId?: number;
  userName?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.HotelUpgradeSubbmitRequest',
      $: {
        accountId: java.Long(this.accountId),
        question: java.String(this.question),
        phone: java.String(this.phone),
        operateType: java.String(this.operateType),
        hotelId: java.Long(this.hotelId),
        userName: java.String(this.userName),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
