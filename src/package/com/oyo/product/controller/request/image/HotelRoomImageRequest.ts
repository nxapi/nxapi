import { HotelImageVO } from './../../vo/image/HotelImageVO';
import java from 'js-to-java';

export interface IHotelRoomImageRequest {
  hotelId?: number;
  hotelImageVOS?: Array<HotelImageVO>;
}

export class HotelRoomImageRequest {
  constructor(params: IHotelRoomImageRequest) {
    this.hotelId = params.hotelId;
    this.hotelImageVOS = params.hotelImageVOS;
  }

  hotelId?: number;
  hotelImageVOS?: Array<HotelImageVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.image.HotelRoomImageRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        hotelImageVOS: this.hotelImageVOS
          ? java.List(
              (this.hotelImageVOS || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
