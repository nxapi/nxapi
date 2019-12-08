import { ListRateBasicInfo } from './ListRateBasicInfo';
import java from 'js-to-java';

export interface IUpdateRateRequest {
  rateList?: Array<ListRateBasicInfo>;
  rateDate?: Date;
  hotelId?: number;
  operatorId?: number;
}

export class UpdateRateRequest {
  constructor(params: IUpdateRateRequest) {
    this.rateList = params.rateList;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
  }

  rateList?: Array<ListRateBasicInfo>;
  rateDate?: Date;
  hotelId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.listrate.UpdateRateRequest',
      $: {
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        rateDate: this.rateDate,
        hotelId: java.Long(this.hotelId),
        operatorId: java.Integer(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
