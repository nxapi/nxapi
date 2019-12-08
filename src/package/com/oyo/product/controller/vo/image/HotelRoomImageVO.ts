import { ImageVO } from './ImageVO';
import java from 'js-to-java';

export interface IHotelRoomImageVO {
  roomTypeName?: string;
  imageList?: Array<ImageVO>;
  roomTypeId?: number;
}

export class HotelRoomImageVO {
  constructor(params: IHotelRoomImageVO) {
    this.roomTypeName = params.roomTypeName;
    this.imageList = params.imageList;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeName?: string;
  imageList?: Array<ImageVO>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.HotelRoomImageVO',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
