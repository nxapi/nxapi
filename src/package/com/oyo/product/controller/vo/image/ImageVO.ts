import java from 'js-to-java';

export interface IImageVO {
  imageId?: number;
  imageType?: string;
  url?: string;
  resourceType?: number;
}

export class ImageVO {
  constructor(params: IImageVO) {
    this.imageId = params.imageId;
    this.imageType = params.imageType;
    this.url = params.url;
    this.resourceType = params.resourceType;
  }

  imageId?: number;
  imageType?: string;
  url?: string;
  resourceType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.ImageVO',
      $: {
        imageId: java.Integer(this.imageId),
        imageType: java.String(this.imageType),
        url: java.String(this.url),
        resourceType: java.Integer(this.resourceType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
