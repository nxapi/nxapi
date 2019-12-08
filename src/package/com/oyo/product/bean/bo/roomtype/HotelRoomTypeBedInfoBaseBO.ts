import java from 'js-to-java';

export interface IHotelRoomTypeBedInfoBaseBO {
  bedInfoId?: number;
  count?: number;
  hotelRoomTypeId?: number;
  id?: number;
  parentId?: number;
}

export class HotelRoomTypeBedInfoBaseBO {
  constructor(params: IHotelRoomTypeBedInfoBaseBO) {
    this.bedInfoId = params.bedInfoId;
    this.count = params.count;
    this.hotelRoomTypeId = params.hotelRoomTypeId;
    this.id = params.id;
    this.parentId = params.parentId;
  }

  bedInfoId?: number;
  count?: number;
  hotelRoomTypeId?: number;
  id?: number;
  parentId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.HotelRoomTypeBedInfoBaseBO',
      $: {
        bedInfoId: java.Long(this.bedInfoId),
        count: java.Integer(this.count),
        hotelRoomTypeId: java.Long(this.hotelRoomTypeId),
        id: java.Long(this.id),
        parentId: java.Long(this.parentId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
