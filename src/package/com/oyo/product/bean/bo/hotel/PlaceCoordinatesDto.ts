import java from 'js-to-java';

export interface IPlaceCoordinatesDto {
  placeType?: string;
  latitude?: string;
  placeId?: number;
  coordinatesSupplier?: string;
  longitude?: string;
}

export class PlaceCoordinatesDto {
  constructor(params: IPlaceCoordinatesDto) {
    this.placeType = params.placeType;
    this.latitude = params.latitude;
    this.placeId = params.placeId;
    this.coordinatesSupplier = params.coordinatesSupplier;
    this.longitude = params.longitude;
  }

  placeType?: string;
  latitude?: string;
  placeId?: number;
  coordinatesSupplier?: string;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.PlaceCoordinatesDto',
      $: {
        placeType: java.String(this.placeType),
        latitude: java.String(this.latitude),
        placeId: java.Long(this.placeId),
        coordinatesSupplier: java.String(this.coordinatesSupplier),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
