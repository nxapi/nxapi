import java from 'js-to-java';

export interface IGeoPoint {
  lon?: {value: string};
  lat?: {value: string};
}

export class GeoPoint {
  constructor(params: IGeoPoint) {
    this.lon = params.lon;
    this.lat = params.lat;
  }

  lon?: {value: string};
  lat?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.common.bo.GeoPoint',
      $: {
        lon: this.lon ? java.BigDecimal(this.lon.value) : null,
        lat: this.lat ? java.BigDecimal(this.lat.value) : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
