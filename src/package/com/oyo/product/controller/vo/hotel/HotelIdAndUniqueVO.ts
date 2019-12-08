import java from 'js-to-java';

export interface IHotelIdAndUniqueVO {
  uniqueCode?: string;
  hotelId?: number;
}

export class HotelIdAndUniqueVO {
  constructor(params: IHotelIdAndUniqueVO) {
    this.uniqueCode = params.uniqueCode;
    this.hotelId = params.hotelId;
  }

  uniqueCode?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelIdAndUniqueVO',
      $: {
        uniqueCode: java.String(this.uniqueCode),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
