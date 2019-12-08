import { ApolloHotelPostBO } from './../../../bean/bo/hotel/ApolloHotelPostBO';
import java from 'js-to-java';

export interface IApolloDirectHotelReq {
  hotel?: ApolloHotelPostBO;
  operator?: string;
}

export class ApolloDirectHotelReq {
  constructor(params: IApolloDirectHotelReq) {
    this.hotel = params.hotel;
    this.operator = params.operator;
  }

  hotel?: ApolloHotelPostBO;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ApolloDirectHotelReq',
      $: {
        hotel: this.hotel ? this.hotel.__fields2java() : null,
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
