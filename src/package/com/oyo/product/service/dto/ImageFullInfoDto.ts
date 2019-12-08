import { ImageFullInfoCollectionVo } from './../../controller/vo/image/ImageFullInfoCollectionVo';
import java from 'js-to-java';

export interface IImageFullInfoDto {
  hotelImages?: Array<ImageFullInfoCollectionVo>;
}

export class ImageFullInfoDto {
  constructor(params: IImageFullInfoDto) {
    this.hotelImages = params.hotelImages;
  }

  hotelImages?: Array<ImageFullInfoCollectionVo>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.service.dto.ImageFullInfoDto',
      $: {
        hotelImages: this.hotelImages
          ? java.List(
              (this.hotelImages || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
