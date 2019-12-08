import java from 'js-to-java';

export interface IPlbOrderRequest {
  accountId?: number;
  plbType?: string;
  oldOrderId?: number;
  phone?: string;
  name?: string;
  plbCode?: string;
  hotelId?: number;
  email?: string;
}

export class PlbOrderRequest {
  constructor(params: IPlbOrderRequest) {
    this.accountId = params.accountId;
    this.plbType = params.plbType;
    this.oldOrderId = params.oldOrderId;
    this.phone = params.phone;
    this.name = params.name;
    this.plbCode = params.plbCode;
    this.hotelId = params.hotelId;
    this.email = params.email;
  }

  accountId?: number;
  plbType?: string;
  oldOrderId?: number;
  phone?: string;
  name?: string;
  plbCode?: string;
  hotelId?: number;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.PlbOrderRequest',
      $: {
        accountId: java.Long(this.accountId),
        plbType: java.String(this.plbType),
        oldOrderId: java.Long(this.oldOrderId),
        phone: java.String(this.phone),
        name: java.String(this.name),
        plbCode: java.String(this.plbCode),
        hotelId: java.Long(this.hotelId),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
