import { PlaceSpaceDto } from './PlaceSpaceDto';
import java from 'js-to-java';

export interface IPlaceFloorSpaceDto {
  floorSpaces?: Array<PlaceSpaceDto>;
  floor?: string;
}

export class PlaceFloorSpaceDto {
  constructor(params: IPlaceFloorSpaceDto) {
    this.floorSpaces = params.floorSpaces;
    this.floor = params.floor;
  }

  floorSpaces?: Array<PlaceSpaceDto>;
  floor?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceFloorSpaceDto',
      $: {
        floorSpaces: this.floorSpaces
          ? java.List(
              (this.floorSpaces || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        floor: java.String(this.floor),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
