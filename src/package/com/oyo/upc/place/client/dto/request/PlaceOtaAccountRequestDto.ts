import { PlaceOtaAccountDto } from './../PlaceOtaAccountDto';
import java from 'js-to-java';

export interface IPlaceOtaAccountRequestDto {
  otaAccountList?: Array<PlaceOtaAccountDto>;
  placeId?: number;
  operatorId?: number;
}

export class PlaceOtaAccountRequestDto {
  constructor(params: IPlaceOtaAccountRequestDto) {
    this.otaAccountList = params.otaAccountList;
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
  }

  otaAccountList?: Array<PlaceOtaAccountDto>;
  placeId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceOtaAccountRequestDto',
      $: {
        otaAccountList: this.otaAccountList
          ? java.List(
              (this.otaAccountList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
