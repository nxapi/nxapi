import java from 'js-to-java';

export interface IHotelRestrictionsBO {
  restrictionName?: string;
  description?: string;
  id?: number;
  hotelId?: number;
}

export class HotelRestrictionsBO {
  constructor(params: IHotelRestrictionsBO) {
    this.restrictionName = params.restrictionName;
    this.description = params.description;
    this.id = params.id;
    this.hotelId = params.hotelId;
  }

  restrictionName?: string;
  description?: string;
  id?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelRestrictionsBO',
      $: {
        restrictionName: java.String(this.restrictionName),
        description: java.String(this.description),
        id: java.Integer(this.id),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
