import { OtherOperateDetailDTO } from './OtherOperateDetailDTO';
import java from 'js-to-java';

export interface IOtherOperateDTO {
  warnLevel?: string;
  warnCount?: number;
  detailList?: Array<OtherOperateDetailDTO>;
  hotelId?: number;
}

export class OtherOperateDTO {
  constructor(params: IOtherOperateDTO) {
    this.warnLevel = params.warnLevel;
    this.warnCount = params.warnCount;
    this.detailList = params.detailList;
    this.hotelId = params.hotelId;
  }

  warnLevel?: string;
  warnCount?: number;
  detailList?: Array<OtherOperateDetailDTO>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OtherOperateDTO',
      $: {
        warnLevel: java.String(this.warnLevel),
        warnCount: java.Integer(this.warnCount),
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
