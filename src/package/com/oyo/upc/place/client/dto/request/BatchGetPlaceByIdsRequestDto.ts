import java from 'js-to-java';

export interface IBatchGetPlaceByIdsRequestDto {
  placeIds?: Array<number>;
  status?: number;
}

export class BatchGetPlaceByIdsRequestDto {
  constructor(params: IBatchGetPlaceByIdsRequestDto) {
    this.placeIds = params.placeIds;
    this.status = params.status;
  }

  placeIds?: Array<number>;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.BatchGetPlaceByIdsRequestDto',
      $: {
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
