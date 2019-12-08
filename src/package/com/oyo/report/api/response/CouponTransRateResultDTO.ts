import { CouponTransRateListDTO } from './CouponTransRateListDTO';
import java from 'js-to-java';

export interface ICouponTransRateResultDTO {
  couponTransRateListList?: Array<CouponTransRateListDTO>;
  total?: number;
}

export class CouponTransRateResultDTO {
  constructor(params: ICouponTransRateResultDTO) {
    this.couponTransRateListList = params.couponTransRateListList;
    this.total = params.total;
  }

  couponTransRateListList?: Array<CouponTransRateListDTO>;
  total?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.CouponTransRateResultDTO',
      $: {
        couponTransRateListList: this.couponTransRateListList
          ? java.List(
              (this.couponTransRateListList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        total: java.Long(this.total),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
