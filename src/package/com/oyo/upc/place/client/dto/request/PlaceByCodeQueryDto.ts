import java from 'js-to-java';

export interface IPlaceByCodeQueryDto {
  placeCode?: string;
  status?: number;
}

export class PlaceByCodeQueryDto {
  constructor(params: IPlaceByCodeQueryDto) {
    this.placeCode = params.placeCode;
    this.status = params.status;
  }

  placeCode?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceByCodeQueryDto',
      $: {
        placeCode: java.String(this.placeCode),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
