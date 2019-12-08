import { ListRateBasicInfo } from './ListRateBasicInfo';
import java from 'js-to-java';

export interface IUpdateListRateByWeekRequest {
  weekList?: Array<number>;
  rateList?: Array<ListRateBasicInfo>;
  hotelId?: number;
  operatorId?: number;
}

export class UpdateListRateByWeekRequest {
  constructor(params: IUpdateListRateByWeekRequest) {
    this.weekList = params.weekList;
    this.rateList = params.rateList;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
  }

  weekList?: Array<number>;
  rateList?: Array<ListRateBasicInfo>;
  hotelId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.UpdateListRateByWeekRequest',
      $: {
        weekList: this.weekList
          ? java.List(
              (this.weekList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operatorId: java.Integer(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
