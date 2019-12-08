import { PlaceFloorSpaceDto } from './PlaceFloorSpaceDto';
import java from 'js-to-java';

export interface IPlaceFloorDto {
  floorSpaces?: Array<PlaceFloorSpaceDto>;
  spaceTypeStatsMap?: {[name: number]: number};
  countMap?: {[name: number]: number};
}

export class PlaceFloorDto {
  constructor(params: IPlaceFloorDto) {
    this.floorSpaces = params.floorSpaces;
    this.spaceTypeStatsMap = params.spaceTypeStatsMap;
    this.countMap = params.countMap;
  }

  floorSpaces?: Array<PlaceFloorSpaceDto>;
  spaceTypeStatsMap?: {[name: number]: number};
  countMap?: {[name: number]: number};

  __fields2java(): any {
    let spaceTypeStatsMapMapTransfer = new Map();
    for (let mapKey in this.spaceTypeStatsMap) {
      spaceTypeStatsMapMapTransfer.set(
        java.Long(Number(mapKey)),
        java.Long(this.spaceTypeStatsMap[mapKey]),
      );
    }
    let countMapMapTransfer = new Map();
    for (let mapKey in this.countMap) {
      countMapMapTransfer.set(
        java.Integer(Number(mapKey)),
        java.Long(this.countMap[mapKey]),
      );
    }
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceFloorDto',
      $: {
        floorSpaces: this.floorSpaces
          ? java.List(
              (this.floorSpaces || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        spaceTypeStatsMap: java.Map(spaceTypeStatsMapMapTransfer),
        countMap: java.Map(countMapMapTransfer),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
