import java from 'js-to-java';

export interface IImageDeleteRequestDto {
  imageIdList?: Array<number>;
  operator?: string;
  memoMessage?: string;
}

export class ImageDeleteRequestDto {
  constructor(params: IImageDeleteRequestDto) {
    this.imageIdList = params.imageIdList;
    this.operator = params.operator;
    this.memoMessage = params.memoMessage;
  }

  imageIdList?: Array<number>;
  operator?: string;
  memoMessage?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ImageDeleteRequestDto',
      $: {
        imageIdList: this.imageIdList
          ? java.List(
              (this.imageIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
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
