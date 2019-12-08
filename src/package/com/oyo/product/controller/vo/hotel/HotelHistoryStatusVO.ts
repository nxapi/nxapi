import java from 'js-to-java';

export interface IHotelHistoryStatusVO {
  hotelId?: number;
  status?: number;
  desc?: string;
}

export class HotelHistoryStatusVO {
  constructor(params: IHotelHistoryStatusVO) {
    this.hotelId = params.hotelId;
    this.status = params.status;
    this.desc = params.desc;
  }

  hotelId?: number;
  status?: number;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelHistoryStatusVO',
      $: {
        hotelId: java.Long(this.hotelId),
        status: java.Integer(this.status),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
