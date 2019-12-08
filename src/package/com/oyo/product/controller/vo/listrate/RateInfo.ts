import java from 'js-to-java';

export interface IRateInfo {
  rateValueList?: Array<{value: string}>;
  roomTypeId?: number;
}

export class RateInfo {
  constructor(params: IRateInfo) {
    this.rateValueList = params.rateValueList;
    this.roomTypeId = params.roomTypeId;
  }

  rateValueList?: Array<{value: string}>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.listrate.RateInfo',
      $: {
        rateValueList: this.rateValueList
          ? java.List(
              (this.rateValueList || []).map((paramItem: any) => {
                return paramItem ? java.BigDecimal(paramItem.value) : null;
              }),
            )
          : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
