import { PlacePoiGeographyDto } from './../response/PlacePoiGeographyDto';
import java from 'js-to-java';

export interface IPlacePoiGeographyCreateRequestDto {
  placePoiGeographyDtos?: Array<PlacePoiGeographyDto>;
  operatorId?: number;
  status?: number;
}

export class PlacePoiGeographyCreateRequestDto {
  constructor(params: IPlacePoiGeographyCreateRequestDto) {
    this.placePoiGeographyDtos = params.placePoiGeographyDtos;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  placePoiGeographyDtos?: Array<PlacePoiGeographyDto>;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlacePoiGeographyCreateRequestDto',
      $: {
        placePoiGeographyDtos: this.placePoiGeographyDtos
          ? java.List(
              (this.placePoiGeographyDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
