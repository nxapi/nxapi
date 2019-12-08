import { HotelOperateStatusDTO$StatusLevel } from './HotelOperateStatusDTO$StatusLevel';
import java from 'js-to-java';

export interface IHotelOperateStatusDTO {
  level?: HotelOperateStatusDTO$StatusLevel;
}

export class HotelOperateStatusDTO {
  constructor(params: IHotelOperateStatusDTO) {
    this.level = params.level;
  }

  level?: HotelOperateStatusDTO$StatusLevel;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.HotelOperateStatusDTO',
      $: {
        level: java['enum'](
          'com.oyo.report.api.response.HotelOperateStatusDTO$StatusLevel',
          HotelOperateStatusDTO$StatusLevel[this.level],
        ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
