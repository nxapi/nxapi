import { City } from './../../bean/City';
import java from 'js-to-java';

export interface IHotCitiesResp {
  current?: City;
  others?: Array<City>;
}

export class HotCitiesResp {
  constructor(params: IHotCitiesResp) {
    this.current = params.current;
    this.others = params.others;
  }

  current?: City;
  others?: Array<City>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.city.HotCitiesResp',
      $: {
        current: this.current ? this.current.__fields2java() : null,
        others: this.others
          ? java.List(
              (this.others || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
