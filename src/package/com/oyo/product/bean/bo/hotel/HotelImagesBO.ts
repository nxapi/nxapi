import java from 'js-to-java';

export interface IHotelImagesBO {
  fileName?: string;
  hotelImage?: string;
  roomCategoryId?: number;
  id?: number;
  hotelId?: number;
  category?: string;
  priority?: number;
  roomTypeId?: number;
  resourceType?: number;
}

export class HotelImagesBO {
  constructor(params: IHotelImagesBO) {
    this.fileName = params.fileName;
    this.hotelImage = params.hotelImage;
    this.roomCategoryId = params.roomCategoryId;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.category = params.category;
    this.priority = params.priority;
    this.roomTypeId = params.roomTypeId;
    this.resourceType = params.resourceType;
  }

  fileName?: string;
  hotelImage?: string;
  roomCategoryId?: number;
  id?: number;
  hotelId?: number;
  category?: string;
  priority?: number;
  roomTypeId?: number;
  resourceType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelImagesBO',
      $: {
        fileName: java.String(this.fileName),
        hotelImage: java.String(this.hotelImage),
        roomCategoryId: java.Integer(this.roomCategoryId),
        id: java.Integer(this.id),
        hotelId: java.Long(this.hotelId),
        category: java.String(this.category),
        priority: java.Integer(this.priority),
        roomTypeId: java.Long(this.roomTypeId),
        resourceType: java.Integer(this.resourceType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
