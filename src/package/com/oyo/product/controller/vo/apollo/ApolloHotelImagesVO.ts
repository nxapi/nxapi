import { HotelImagesBO } from './../../../bean/bo/hotel/HotelImagesBO';
import java from 'js-to-java';

export interface IApolloHotelImagesVO {
  image?: Array<HotelImagesBO>;
  ptiCheckStatus?: number;
  oyoId?: string;
  operator?: string;
}

export class ApolloHotelImagesVO {
  constructor(params: IApolloHotelImagesVO) {
    this.image = params.image;
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.oyoId = params.oyoId;
    this.operator = params.operator;
  }

  image?: Array<HotelImagesBO>;
  ptiCheckStatus?: number;
  oyoId?: string;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ApolloHotelImagesVO',
      $: {
        image: this.image
          ? java.List(
              (this.image || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        ptiCheckStatus: java.Integer(this.ptiCheckStatus),
        oyoId: java.String(this.oyoId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
