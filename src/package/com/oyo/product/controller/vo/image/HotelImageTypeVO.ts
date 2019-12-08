import java from 'js-to-java';

export interface IHotelImageTypeVO {
  code?: string;
  name?: string;
}

export class HotelImageTypeVO {
  constructor(params: IHotelImageTypeVO) {
    this.code = params.code;
    this.name = params.name;
  }

  code?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.HotelImageTypeVO',
      $: {code: java.String(this.code), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
