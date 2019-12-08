import java from 'js-to-java';

export interface IHotelStatisticsDto {
  urn?: string;
  arr?: string;
  gmv?: string;
  urnPerc?: string;
  arrPerc?: string;
  occPerc?: string;
  hotelId?: string;
  revPerc?: string;
  srn?: string;
  occ?: string;
}

export class HotelStatisticsDto {
  constructor(params: IHotelStatisticsDto) {
    this.urn = params.urn;
    this.arr = params.arr;
    this.gmv = params.gmv;
    this.urnPerc = params.urnPerc;
    this.arrPerc = params.arrPerc;
    this.occPerc = params.occPerc;
    this.hotelId = params.hotelId;
    this.revPerc = params.revPerc;
    this.srn = params.srn;
    this.occ = params.occ;
  }

  urn?: string;
  arr?: string;
  gmv?: string;
  urnPerc?: string;
  arrPerc?: string;
  occPerc?: string;
  hotelId?: string;
  revPerc?: string;
  srn?: string;
  occ?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.HotelStatisticsDto',
      $: {
        urn: java.String(this.urn),
        arr: java.String(this.arr),
        gmv: java.String(this.gmv),
        urnPerc: java.String(this.urnPerc),
        arrPerc: java.String(this.arrPerc),
        occPerc: java.String(this.occPerc),
        hotelId: java.String(this.hotelId),
        revPerc: java.String(this.revPerc),
        srn: java.String(this.srn),
        occ: java.String(this.occ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
