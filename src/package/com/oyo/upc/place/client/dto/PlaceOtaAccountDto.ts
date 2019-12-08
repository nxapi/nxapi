import java from 'js-to-java';

export interface IPlaceOtaAccountDto {
  otaType?: number;
  otaDisplayScore?: string;
  otaName?: string;
  id?: number;
  otaAccountId?: number;
  otaScore?: string;
}

export class PlaceOtaAccountDto {
  constructor(params: IPlaceOtaAccountDto) {
    this.otaType = params.otaType;
    this.otaDisplayScore = params.otaDisplayScore;
    this.otaName = params.otaName;
    this.id = params.id;
    this.otaAccountId = params.otaAccountId;
    this.otaScore = params.otaScore;
  }

  otaType?: number;
  otaDisplayScore?: string;
  otaName?: string;
  id?: number;
  otaAccountId?: number;
  otaScore?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.PlaceOtaAccountDto',
      $: {
        otaType: java.Integer(this.otaType),
        otaDisplayScore: java.String(this.otaDisplayScore),
        otaName: java.String(this.otaName),
        id: java.Long(this.id),
        otaAccountId: java.Long(this.otaAccountId),
        otaScore: java.String(this.otaScore),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
