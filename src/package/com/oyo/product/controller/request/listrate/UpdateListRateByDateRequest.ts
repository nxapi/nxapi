import { ListRateBasicInfo } from './ListRateBasicInfo';
import java from 'js-to-java';

export interface IUpdateListRateByDateRequest {
  endDate?: Date;
  rateList?: Array<ListRateBasicInfo>;
  hotelId?: number;
  operatorId?: number;
  startDate?: Date;
}

export class UpdateListRateByDateRequest {
  constructor(params: IUpdateListRateByDateRequest) {
    this.endDate = params.endDate;
    this.rateList = params.rateList;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  rateList?: Array<ListRateBasicInfo>;
  hotelId?: number;
  operatorId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.UpdateListRateByDateRequest',
      $: {
        endDate: this.endDate,
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operatorId: java.Integer(this.operatorId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
