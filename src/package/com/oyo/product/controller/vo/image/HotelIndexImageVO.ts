import java from 'js-to-java';

export interface IHotelIndexImageVO {
  imageUrl?: string;
  hotelId?: number;
}

export class HotelIndexImageVO {
  constructor(params: IHotelIndexImageVO) {
    this.imageUrl = params.imageUrl;
    this.hotelId = params.hotelId;
  }

  imageUrl?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.HotelIndexImageVO',
      $: {
        imageUrl: java.String(this.imageUrl),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
