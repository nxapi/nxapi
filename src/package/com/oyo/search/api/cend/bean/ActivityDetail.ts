import java from 'js-to-java';

export interface IActivityDetail {
  activityId?: number;
  activityPrice?: {value: string};
  ifApplyCoupon?: number;
  couponPrice?: {value: string};
  tagInfo?: string;
  couponMaxAmount?: {value: string};
}

export class ActivityDetail {
  constructor(params: IActivityDetail) {
    this.activityId = params.activityId;
    this.activityPrice = params.activityPrice;
    this.ifApplyCoupon = params.ifApplyCoupon;
    this.couponPrice = params.couponPrice;
    this.tagInfo = params.tagInfo;
    this.couponMaxAmount = params.couponMaxAmount;
  }

  activityId?: number;
  activityPrice?: {value: string};
  ifApplyCoupon?: number;
  couponPrice?: {value: string};
  tagInfo?: string;
  couponMaxAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.ActivityDetail',
      $: {
        activityId: java.Long(this.activityId),
        activityPrice: this.activityPrice
          ? java.BigDecimal(this.activityPrice.value)
          : null,
        ifApplyCoupon: java.Integer(this.ifApplyCoupon),
        couponPrice: this.couponPrice
          ? java.BigDecimal(this.couponPrice.value)
          : null,
        tagInfo: java.String(this.tagInfo),
        couponMaxAmount: this.couponMaxAmount
          ? java.BigDecimal(this.couponMaxAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
