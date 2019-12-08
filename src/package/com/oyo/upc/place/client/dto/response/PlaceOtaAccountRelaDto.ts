import { PlaceOtaAccountDto } from './../PlaceOtaAccountDto';
import java from 'js-to-java';

export interface IPlaceOtaAccountRelaDto {
  otaAccountIds?: Array<number>;
  placeId?: number;
  otaAccountDtos?: Array<PlaceOtaAccountDto>;
}

export class PlaceOtaAccountRelaDto {
  constructor(params: IPlaceOtaAccountRelaDto) {
    this.otaAccountIds = params.otaAccountIds;
    this.placeId = params.placeId;
    this.otaAccountDtos = params.otaAccountDtos;
  }

  otaAccountIds?: Array<number>;
  placeId?: number;
  otaAccountDtos?: Array<PlaceOtaAccountDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceOtaAccountRelaDto',
      $: {
        otaAccountIds: this.otaAccountIds
          ? java.List(
              (this.otaAccountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        placeId: java.Long(this.placeId),
        otaAccountDtos: this.otaAccountDtos
          ? java.List(
              (this.otaAccountDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
