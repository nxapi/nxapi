import { PlaceImage } from './../../common/PlaceImage';
import java from 'js-to-java';

export interface IImageQueryResponseDto {
  placeImageList?: Array<PlaceImage>;
}

export class ImageQueryResponseDto {
  constructor(params: IImageQueryResponseDto) {
    this.placeImageList = params.placeImageList;
  }

  placeImageList?: Array<PlaceImage>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.ImageQueryResponseDto',
      $: {
        placeImageList: this.placeImageList
          ? java.List(
              (this.placeImageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
