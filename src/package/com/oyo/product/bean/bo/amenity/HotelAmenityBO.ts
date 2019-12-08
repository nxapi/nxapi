import java from 'js-to-java';

export interface IHotelAmenityBO {
  amenityId?: number;
  amenityName?: string;
  id?: number;
  hotelId?: number;
}

export class HotelAmenityBO {
  constructor(params: IHotelAmenityBO) {
    this.amenityId = params.amenityId;
    this.amenityName = params.amenityName;
    this.id = params.id;
    this.hotelId = params.hotelId;
  }

  amenityId?: number;
  amenityName?: string;
  id?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.amenity.HotelAmenityBO',
      $: {
        amenityId: java.Long(this.amenityId),
        amenityName: java.String(this.amenityName),
        id: java.Long(this.id),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
