import { PlaceImageBasicInfo } from './../../common/PlaceImageBasicInfo';
import java from 'js-to-java';

export interface IImageUpdateRequestDto {
  placeImageBasicInfo?: PlaceImageBasicInfo;
  operator?: string;
  memoMessage?: string;
}

export class ImageUpdateRequestDto {
  constructor(params: IImageUpdateRequestDto) {
    this.placeImageBasicInfo = params.placeImageBasicInfo;
    this.operator = params.operator;
    this.memoMessage = params.memoMessage;
  }

  placeImageBasicInfo?: PlaceImageBasicInfo;
  operator?: string;
  memoMessage?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ImageUpdateRequestDto',
      $: {
        placeImageBasicInfo: this.placeImageBasicInfo
          ? this.placeImageBasicInfo.__fields2java()
          : null,
        operator: java.String(this.operator),
        memoMessage: java.String(this.memoMessage),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
