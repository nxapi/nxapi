import java from 'js-to-java';

export interface IBreakfastBO {
  breakfastTime?: string;
  addressType?: number;
  breakfastType?: number;
}

export class BreakfastBO {
  constructor(params: IBreakfastBO) {
    this.breakfastTime = params.breakfastTime;
    this.addressType = params.addressType;
    this.breakfastType = params.breakfastType;
  }

  breakfastTime?: string;
  addressType?: number;
  breakfastType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.BreakfastBO',
      $: {
        breakfastTime: java.String(this.breakfastTime),
        addressType: java.Integer(this.addressType),
        breakfastType: java.Integer(this.breakfastType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
