import java from 'js-to-java';

export interface IHotelImageCategoryVO {
  code?: string;
  name?: string;
}

export class HotelImageCategoryVO {
  constructor(params: IHotelImageCategoryVO) {
    this.code = params.code;
    this.name = params.name;
  }

  code?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.HotelImageCategoryVO',
      $: {code: java.String(this.code), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
