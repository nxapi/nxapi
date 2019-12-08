import java from 'js-to-java';

export interface IHotelRestrictionRelaBO {
  restrictionName?: string;
  restrictionId?: number;
  id?: number;
  hotelId?: number;
}

export class HotelRestrictionRelaBO {
  constructor(params: IHotelRestrictionRelaBO) {
    this.restrictionName = params.restrictionName;
    this.restrictionId = params.restrictionId;
    this.id = params.id;
    this.hotelId = params.hotelId;
  }

  restrictionName?: string;
  restrictionId?: number;
  id?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.restriction.HotelRestrictionRelaBO',
      $: {
        restrictionName: java.String(this.restrictionName),
        restrictionId: java.Long(this.restrictionId),
        id: java.Long(this.id),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
