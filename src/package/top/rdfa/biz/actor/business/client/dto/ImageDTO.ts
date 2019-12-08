import java from 'js-to-java';

export interface IImageDTO {
  isDeleted?: string;
  imageUrl?: string;
  id?: number;
}

export class ImageDTO {
  constructor(params: IImageDTO) {
    this.isDeleted = params.isDeleted;
    this.imageUrl = params.imageUrl;
    this.id = params.id;
  }

  isDeleted?: string;
  imageUrl?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.ImageDTO',
      $: {
        isDeleted: java.String(this.isDeleted),
        imageUrl: java.String(this.imageUrl),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
