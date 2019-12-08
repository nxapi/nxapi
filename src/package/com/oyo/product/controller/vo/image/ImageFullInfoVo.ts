import java from 'js-to-java';

export interface IImageFullInfoVo {
  imageId?: number;
  roomTypeName?: string;
  category?: string;
  url?: string;
  roomTypeId?: number;
  resourceType?: number;
}

export class ImageFullInfoVo {
  constructor(params: IImageFullInfoVo) {
    this.imageId = params.imageId;
    this.roomTypeName = params.roomTypeName;
    this.category = params.category;
    this.url = params.url;
    this.roomTypeId = params.roomTypeId;
    this.resourceType = params.resourceType;
  }

  imageId?: number;
  roomTypeName?: string;
  category?: string;
  url?: string;
  roomTypeId?: number;
  resourceType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.ImageFullInfoVo',
      $: {
        imageId: java.Integer(this.imageId),
        roomTypeName: java.String(this.roomTypeName),
        category: java.String(this.category),
        url: java.String(this.url),
        roomTypeId: java.Long(this.roomTypeId),
        resourceType: java.Integer(this.resourceType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
