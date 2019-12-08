import java from 'js-to-java';

export interface IPlaceAttributeStatsResponseDto {
  attributeCountStatsMap?: {[name: number]: number};
}

export class PlaceAttributeStatsResponseDto {
  constructor(params: IPlaceAttributeStatsResponseDto) {
    this.attributeCountStatsMap = params.attributeCountStatsMap;
  }

  attributeCountStatsMap?: {[name: number]: number};

  __fields2java(): any {
    let attributeCountStatsMapMapTransfer = new Map();
    for (let mapKey in this.attributeCountStatsMap) {
      attributeCountStatsMapMapTransfer.set(
        java.Long(Number(mapKey)),
        java.Long(this.attributeCountStatsMap[mapKey]),
      );
    }
    return {
      $class:
        'com.oyo.upc.place.client.dto.response.PlaceAttributeStatsResponseDto',
      $: {attributeCountStatsMap: java.Map(attributeCountStatsMapMapTransfer)},
    };
  }
}

//generate by interpret-cli dubbo2.js
