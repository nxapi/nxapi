import java from 'js-to-java';

export interface IPlaceStatusRequestDto {
  ptiCheckStatus?: number;
  placeId?: number;
  operatorId?: number;
  oldStatusCode?: number;
  statusCode?: number;
}

export class PlaceStatusRequestDto {
  constructor(params: IPlaceStatusRequestDto) {
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
    this.oldStatusCode = params.oldStatusCode;
    this.statusCode = params.statusCode;
  }

  ptiCheckStatus?: number;
  placeId?: number;
  operatorId?: number;
  oldStatusCode?: number;
  statusCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceStatusRequestDto',
      $: {
        ptiCheckStatus: java.Integer(this.ptiCheckStatus),
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
        oldStatusCode: java.Integer(this.oldStatusCode),
        statusCode: java.Integer(this.statusCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
