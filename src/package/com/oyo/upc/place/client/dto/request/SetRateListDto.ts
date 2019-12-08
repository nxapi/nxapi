import java from 'js-to-java';

export interface ISetRateListDto {
  placeIds?: Array<number>;
  ratePrice?: number;
  roomTypeId?: number;
}

export class SetRateListDto {
  constructor(params: ISetRateListDto) {
    this.placeIds = params.placeIds;
    this.ratePrice = params.ratePrice;
    this.roomTypeId = params.roomTypeId;
  }

  placeIds?: Array<number>;
  ratePrice?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SetRateListDto',
      $: {
        placeIds: this.placeIds
          ? java.List(
              (this.placeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        ratePrice: java.Integer(this.ratePrice),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
