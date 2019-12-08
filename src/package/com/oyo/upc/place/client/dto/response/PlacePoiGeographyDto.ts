import java from 'js-to-java';

export interface IPlacePoiGeographyDto {
  distance?: string;
  placeId?: number;
  name?: string;
  desc?: string;
}

export class PlacePoiGeographyDto {
  constructor(params: IPlacePoiGeographyDto) {
    this.distance = params.distance;
    this.placeId = params.placeId;
    this.name = params.name;
    this.desc = params.desc;
  }

  distance?: string;
  placeId?: number;
  name?: string;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlacePoiGeographyDto',
      $: {
        distance: java.String(this.distance),
        placeId: java.Long(this.placeId),
        name: java.String(this.name),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
