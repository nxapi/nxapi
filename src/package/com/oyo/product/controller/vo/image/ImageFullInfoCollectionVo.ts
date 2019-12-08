import { ImageFullInfoVo } from './ImageFullInfoVo';
import java from 'js-to-java';

export interface IImageFullInfoCollectionVo {
  images?: Array<ImageFullInfoVo>;
  hotelId?: number;
}

export class ImageFullInfoCollectionVo {
  constructor(params: IImageFullInfoCollectionVo) {
    this.images = params.images;
    this.hotelId = params.hotelId;
  }

  images?: Array<ImageFullInfoVo>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.ImageFullInfoCollectionVo',
      $: {
        images: this.images
          ? java.List(
              (this.images || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
