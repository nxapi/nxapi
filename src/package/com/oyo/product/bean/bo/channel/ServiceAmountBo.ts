import { CommonDictBo } from './../common/CommonDictBo';
import java from 'js-to-java';

export interface IServiceAmountBo {
  serviceAmountTypeCollection?: Array<CommonDictBo>;
  serviceAmountCalculateCollection?: Array<CommonDictBo>;
}

export class ServiceAmountBo {
  constructor(params: IServiceAmountBo) {
    this.serviceAmountTypeCollection = params.serviceAmountTypeCollection;
    this.serviceAmountCalculateCollection =
      params.serviceAmountCalculateCollection;
  }

  serviceAmountTypeCollection?: Array<CommonDictBo>;
  serviceAmountCalculateCollection?: Array<CommonDictBo>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.ServiceAmountBo',
      $: {
        serviceAmountTypeCollection: this.serviceAmountTypeCollection
          ? java.List(
              (this.serviceAmountTypeCollection || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        serviceAmountCalculateCollection: this.serviceAmountCalculateCollection
          ? java.List(
              (this.serviceAmountCalculateCollection || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
