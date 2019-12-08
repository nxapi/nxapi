import { OtaAccountCheckDetailDTO } from './OtaAccountCheckDetailDTO';
import java from 'js-to-java';

export interface IOtaAccountCheckDTO {
  warnDay?: number;
  warnLevel?: string;
  maxDay?: number;
  detailList?: Array<OtaAccountCheckDetailDTO>;
  hotelId?: number;
}

export class OtaAccountCheckDTO {
  constructor(params: IOtaAccountCheckDTO) {
    this.warnDay = params.warnDay;
    this.warnLevel = params.warnLevel;
    this.maxDay = params.maxDay;
    this.detailList = params.detailList;
    this.hotelId = params.hotelId;
  }

  warnDay?: number;
  warnLevel?: string;
  maxDay?: number;
  detailList?: Array<OtaAccountCheckDetailDTO>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OtaAccountCheckDTO',
      $: {
        warnDay: java.Integer(this.warnDay),
        warnLevel: java.String(this.warnLevel),
        maxDay: java.Integer(this.maxDay),
        detailList: this.detailList
          ? java.List(
              (this.detailList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
