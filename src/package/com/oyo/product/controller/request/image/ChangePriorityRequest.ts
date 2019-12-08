import java from 'js-to-java';

export interface IChangePriorityRequest {
  imageIdList?: Array<number>;
  hotelId?: number;
  operator?: string;
}

export class ChangePriorityRequest {
  constructor(params: IChangePriorityRequest) {
    this.imageIdList = params.imageIdList;
    this.hotelId = params.hotelId;
    this.operator = params.operator;
  }

  imageIdList?: Array<number>;
  hotelId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.image.ChangePriorityRequest',
      $: {
        imageIdList: this.imageIdList
          ? java.List(
              (this.imageIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
