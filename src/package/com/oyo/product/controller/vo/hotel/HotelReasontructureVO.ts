import java from 'js-to-java';

export interface IHotelReasontructureVO {
  code?: string;
  hotelReasontructureVOList?: Array<HotelReasontructureVO>;
  level?: number;
  name?: string;
  id?: number;
}

export class HotelReasontructureVO {
  constructor(params: IHotelReasontructureVO) {
    this.code = params.code;
    this.hotelReasontructureVOList = params.hotelReasontructureVOList;
    this.level = params.level;
    this.name = params.name;
    this.id = params.id;
  }

  code?: string;
  hotelReasontructureVOList?: Array<HotelReasontructureVO>;
  level?: number;
  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelReasontructureVO',
      $: {
        code: java.String(this.code),
        hotelReasontructureVOList: this.hotelReasontructureVOList
          ? java.List(
              (this.hotelReasontructureVOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        level: java.Integer(this.level),
        name: java.String(this.name),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
