import java from 'js-to-java';

export interface IPlacePayTypeQueryHistoryDto {
  placeId?: number;
  correlationId?: string;
  status?: number;
}

export class PlacePayTypeQueryHistoryDto {
  constructor(params: IPlacePayTypeQueryHistoryDto) {
    this.placeId = params.placeId;
    this.correlationId = params.correlationId;
    this.status = params.status;
  }

  placeId?: number;
  correlationId?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlacePayTypeQueryHistoryDto',
      $: {
        placeId: java.Long(this.placeId),
        correlationId: java.String(this.correlationId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
