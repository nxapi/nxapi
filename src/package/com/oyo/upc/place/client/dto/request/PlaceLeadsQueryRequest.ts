import java from 'js-to-java';

export interface IPlaceLeadsQueryRequest {
  placeId?: number;
  placeIds?: Array<number>;
  status?: number;
}

export class PlaceLeadsQueryRequest {
  constructor(params: IPlaceLeadsQueryRequest) {
    this.placeId = params.placeId;
    this.placeIds = params.placeIds;
    this.status = params.status;
  }

  placeId?: number;
  placeIds?: Array<number>;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceLeadsQueryRequest',
      $: {
        placeId: java.Long(this.placeId),
        placeIds: this.placeIds
          ? java.List(
              (this.placeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
