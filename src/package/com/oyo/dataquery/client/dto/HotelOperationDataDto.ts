import java from 'js-to-java';

export interface IHotelOperationDataDto {
  urn?: string;
  arr?: string;
  revPar?: string;
  gmv?: string;
  idScanFtdRate?: string;
  hotelId?: string;
  hotelName?: string;
  srn?: string;
  occ?: string;
}

export class HotelOperationDataDto {
  constructor(params: IHotelOperationDataDto) {
    this.urn = params.urn;
    this.arr = params.arr;
    this.revPar = params.revPar;
    this.gmv = params.gmv;
    this.idScanFtdRate = params.idScanFtdRate;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.srn = params.srn;
    this.occ = params.occ;
  }

  urn?: string;
  arr?: string;
  revPar?: string;
  gmv?: string;
  idScanFtdRate?: string;
  hotelId?: string;
  hotelName?: string;
  srn?: string;
  occ?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.HotelOperationDataDto',
      $: {
        urn: java.String(this.urn),
        arr: java.String(this.arr),
        revPar: java.String(this.revPar),
        gmv: java.String(this.gmv),
        idScanFtdRate: java.String(this.idScanFtdRate),
        hotelId: java.String(this.hotelId),
        hotelName: java.String(this.hotelName),
        srn: java.String(this.srn),
        occ: java.String(this.occ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
