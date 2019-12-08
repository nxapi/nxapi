import { PlaceImageBasicInfo } from './../../common/PlaceImageBasicInfo';
import java from 'js-to-java';

export interface IImageCreateRequestDto {
  imageList?: Array<PlaceImageBasicInfo>;
  operator?: string;
  memoMessage?: string;
}

export class ImageCreateRequestDto {
  constructor(params: IImageCreateRequestDto) {
    this.imageList = params.imageList;
    this.operator = params.operator;
    this.memoMessage = params.memoMessage;
  }

  imageList?: Array<PlaceImageBasicInfo>;
  operator?: string;
  memoMessage?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ImageCreateRequestDto',
      $: {
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operator: java.String(this.operator),
        memoMessage: java.String(this.memoMessage),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
