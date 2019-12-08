import java from 'js-to-java';

export interface IPlaceOtaAccountRelaRequestDto {
  otaAccountIds?: Array<number>;
  placeId?: number;
  operatorId?: number;
  status?: number;
}

export class PlaceOtaAccountRelaRequestDto {
  constructor(params: IPlaceOtaAccountRelaRequestDto) {
    this.otaAccountIds = params.otaAccountIds;
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  otaAccountIds?: Array<number>;
  placeId?: number;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceOtaAccountRelaRequestDto',
      $: {
        otaAccountIds: this.otaAccountIds
          ? java.List(
              (this.otaAccountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
