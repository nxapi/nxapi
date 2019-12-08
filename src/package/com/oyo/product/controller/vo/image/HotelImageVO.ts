import { ImageVO } from './ImageVO';
import java from 'js-to-java';

export interface IHotelImageVO {
  category?: string;
  imageList?: Array<ImageVO>;
}

export class HotelImageVO {
  constructor(params: IHotelImageVO) {
    this.category = params.category;
    this.imageList = params.imageList;
  }

  category?: string;
  imageList?: Array<ImageVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.HotelImageVO',
      $: {
        category: java.String(this.category),
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
