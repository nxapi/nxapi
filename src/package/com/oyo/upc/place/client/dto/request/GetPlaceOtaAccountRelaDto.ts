import java from 'js-to-java';

export interface IGetPlaceOtaAccountRelaDto {
  placeId?: number;
  status?: number;
}

export class GetPlaceOtaAccountRelaDto {
  constructor(params: IGetPlaceOtaAccountRelaDto) {
    this.placeId = params.placeId;
    this.status = params.status;
  }

  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.GetPlaceOtaAccountRelaDto',
      $: {placeId: java.Long(this.placeId), status: java.Integer(this.status)},
    };
  }
}

//generate by interpret-cli dubbo2.js
