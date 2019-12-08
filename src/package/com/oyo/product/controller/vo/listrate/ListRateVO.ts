import java from 'js-to-java';

export interface IListRateVO {
  rate?: {value: string};
  rateDate?: string;
  roomTypeId?: number;
}

export class ListRateVO {
  constructor(params: IListRateVO) {
    this.rate = params.rate;
    this.rateDate = params.rateDate;
    this.roomTypeId = params.roomTypeId;
  }

  rate?: {value: string};
  rateDate?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.listrate.ListRateVO',
      $: {
        rate: this.rate ? java.BigDecimal(this.rate.value) : null,
        rateDate: java.String(this.rateDate),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
