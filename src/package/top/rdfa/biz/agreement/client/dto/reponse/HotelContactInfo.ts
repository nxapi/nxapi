import java from 'js-to-java';

export interface IHotelContactInfo {
  phone?: string;
  name?: string;
}

export class HotelContactInfo {
  constructor(params: IHotelContactInfo) {
    this.phone = params.phone;
    this.name = params.name;
  }

  phone?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.HotelContactInfo',
      $: {phone: java.String(this.phone), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
