import java from 'js-to-java';

export interface IHotelTagVO {
  oyoId?: string;
  hotelTag?: string;
  hotelId?: number;
}

export class HotelTagVO {
  constructor(params: IHotelTagVO) {
    this.oyoId = params.oyoId;
    this.hotelTag = params.hotelTag;
    this.hotelId = params.hotelId;
  }

  oyoId?: string;
  hotelTag?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelTagVO',
      $: {
        oyoId: java.String(this.oyoId),
        hotelTag: java.String(this.hotelTag),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
