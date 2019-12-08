import { HotelCrsEditBO } from './../../../bean/bo/hotel/HotelCrsEditBO';
import java from 'js-to-java';

export interface IHotelCrsEditVO {
  data?: HotelCrsEditBO;
  operator?: string;
}

export class HotelCrsEditVO {
  constructor(params: IHotelCrsEditVO) {
    this.data = params.data;
    this.operator = params.operator;
  }

  data?: HotelCrsEditBO;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelCrsEditVO',
      $: {
        data: this.data ? this.data.__fields2java() : null,
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
