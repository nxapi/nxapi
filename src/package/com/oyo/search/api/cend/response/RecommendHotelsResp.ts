import { RecommendHotelBo } from './../bo/RecommendHotelBo';
import java from 'js-to-java';

export interface IRecommendHotelsResp {
  hotels?: Array<RecommendHotelBo>;
  count?: number;
  title?: string;
}

export class RecommendHotelsResp {
  constructor(params: IRecommendHotelsResp) {
    this.hotels = params.hotels;
    this.count = params.count;
    this.title = params.title;
  }

  hotels?: Array<RecommendHotelBo>;
  count?: number;
  title?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.RecommendHotelsResp',
      $: {
        hotels: this.hotels
          ? java.List(
              (this.hotels || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        count: java.Integer(this.count),
        title: java.String(this.title),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
