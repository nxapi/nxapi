import java from 'js-to-java';

export interface IApolloAmenityPostRequest {
  amenityName?: string;
  operator?: string;
}

export class ApolloAmenityPostRequest {
  constructor(params: IApolloAmenityPostRequest) {
    this.amenityName = params.amenityName;
    this.operator = params.operator;
  }

  amenityName?: string;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.amenity.ApolloAmenityPostRequest',
      $: {
        amenityName: java.String(this.amenityName),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
