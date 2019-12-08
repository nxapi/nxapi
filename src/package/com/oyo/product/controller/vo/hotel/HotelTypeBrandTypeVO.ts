import { BrandTypeVO } from './BrandTypeVO';
import java from 'js-to-java';

export interface IHotelTypeBrandTypeVO {
  brandTypeList?: Array<BrandTypeVO>;
  typeName?: string;
  typeId?: number;
}

export class HotelTypeBrandTypeVO {
  constructor(params: IHotelTypeBrandTypeVO) {
    this.brandTypeList = params.brandTypeList;
    this.typeName = params.typeName;
    this.typeId = params.typeId;
  }

  brandTypeList?: Array<BrandTypeVO>;
  typeName?: string;
  typeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelTypeBrandTypeVO',
      $: {
        brandTypeList: this.brandTypeList
          ? java.List(
              (this.brandTypeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        typeName: java.String(this.typeName),
        typeId: java.Integer(this.typeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
