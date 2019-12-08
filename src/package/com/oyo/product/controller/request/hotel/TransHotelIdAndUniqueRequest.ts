import java from 'js-to-java';

export interface ITransHotelIdAndUniqueRequest {
  idType?: number;
  ids?: Array<string>;
}

export class TransHotelIdAndUniqueRequest {
  constructor(params: ITransHotelIdAndUniqueRequest) {
    this.idType = params.idType;
    this.ids = params.ids;
  }

  idType?: number;
  ids?: Array<string>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.TransHotelIdAndUniqueRequest',
      $: {
        idType: java.Integer(this.idType),
        ids: this.ids
          ? java.List(
              (this.ids || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
