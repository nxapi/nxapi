import java from 'js-to-java';

export interface IBrandTypeVO {
  typeName?: string;
  typeId?: number;
}

export class BrandTypeVO {
  constructor(params: IBrandTypeVO) {
    this.typeName = params.typeName;
    this.typeId = params.typeId;
  }

  typeName?: string;
  typeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.BrandTypeVO',
      $: {
        typeName: java.String(this.typeName),
        typeId: java.Integer(this.typeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
