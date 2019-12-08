import java from 'js-to-java';

export interface IListRateBasicInfo {
  rate?: {value: string};
  roomTypeId?: number;
}

export class ListRateBasicInfo {
  constructor(params: IListRateBasicInfo) {
    this.rate = params.rate;
    this.roomTypeId = params.roomTypeId;
  }

  rate?: {value: string};
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.listrate.ListRateBasicInfo',
      $: {
        rate: this.rate ? java.BigDecimal(this.rate.value) : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
