import { RateInfo } from './RateInfo';
import java from 'js-to-java';

export interface IPresetRateRequest {
  endDate?: Date;
  rateList?: Array<RateInfo>;
  initType?: number;
  hotelId?: number;
  operatorId?: number;
  startDate?: Date;
}

export class PresetRateRequest {
  constructor(params: IPresetRateRequest) {
    this.endDate = params.endDate;
    this.rateList = params.rateList;
    this.initType = params.initType;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  rateList?: Array<RateInfo>;
  initType?: number;
  hotelId?: number;
  operatorId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.listrate.PresetRateRequest',
      $: {
        endDate: this.endDate,
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        initType: java.Long(this.initType),
        hotelId: java.Long(this.hotelId),
        operatorId: java.Integer(this.operatorId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
