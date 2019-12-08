import { CityOperationDataDto } from './CityOperationDataDto';
import { HotelOperationDataDto } from './HotelOperationDataDto';
import java from 'js-to-java';

export interface IQueryOperationResponseDto {
  cityAverage?: Array<CityOperationDataDto>;
  myHotels?: Array<HotelOperationDataDto>;
}

export class QueryOperationResponseDto {
  constructor(params: IQueryOperationResponseDto) {
    this.cityAverage = params.cityAverage;
    this.myHotels = params.myHotels;
  }

  cityAverage?: Array<CityOperationDataDto>;
  myHotels?: Array<HotelOperationDataDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.QueryOperationResponseDto',
      $: {
        cityAverage: this.cityAverage
          ? java.List(
              (this.cityAverage || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        myHotels: this.myHotels
          ? java.List(
              (this.myHotels || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
