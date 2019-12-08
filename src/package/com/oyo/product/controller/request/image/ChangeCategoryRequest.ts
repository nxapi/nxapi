import java from 'js-to-java';

export interface IChangeCategoryRequest {
  imageIdList?: Array<number>;
  hotelId?: number;
  category?: string;
  operator?: string;
}

export class ChangeCategoryRequest {
  constructor(params: IChangeCategoryRequest) {
    this.imageIdList = params.imageIdList;
    this.hotelId = params.hotelId;
    this.category = params.category;
    this.operator = params.operator;
  }

  imageIdList?: Array<number>;
  hotelId?: number;
  category?: string;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.image.ChangeCategoryRequest',
      $: {
        imageIdList: this.imageIdList
          ? java.List(
              (this.imageIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        category: java.String(this.category),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
