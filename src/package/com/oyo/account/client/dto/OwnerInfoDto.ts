import java from 'js-to-java';

export interface IOwnerInfoDto {
  oyoId?: string;
  uniqueCode?: number;
  ownerName?: string;
  phone?: string;
  hotelId?: number;
  hotelName?: string;
  email?: string;
}

export class OwnerInfoDto {
  constructor(params: IOwnerInfoDto) {
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.ownerName = params.ownerName;
    this.phone = params.phone;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.email = params.email;
  }

  oyoId?: string;
  uniqueCode?: number;
  ownerName?: string;
  phone?: string;
  hotelId?: number;
  hotelName?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerInfoDto',
      $: {
        oyoId: java.String(this.oyoId),
        uniqueCode: java.Integer(this.uniqueCode),
        ownerName: java.String(this.ownerName),
        phone: java.String(this.phone),
        hotelId: java.Integer(this.hotelId),
        hotelName: java.String(this.hotelName),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
