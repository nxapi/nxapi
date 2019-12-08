import { DailyChargeVO } from './DailyChargeVO';
import java from 'js-to-java';

export interface IRoomStayVO {
  dailyChargeList?: Array<DailyChargeVO>;
  rateCodeId?: number;
  roomTypeId?: number;
}

export class RoomStayVO {
  constructor(params: IRoomStayVO) {
    this.dailyChargeList = params.dailyChargeList;
    this.rateCodeId = params.rateCodeId;
    this.roomTypeId = params.roomTypeId;
  }

  dailyChargeList?: Array<DailyChargeVO>;
  rateCodeId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.ota.RoomStayVO',
      $: {
        dailyChargeList: this.dailyChargeList
          ? java.List(
              (this.dailyChargeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        rateCodeId: java.Long(this.rateCodeId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
