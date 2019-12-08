import java from 'js-to-java';

export interface IOrderSourceList {
  nights?: number;
  source?: string;
  averagePrice?: string;
  roomIncome?: string;
}

export class OrderSourceList {
  constructor(params: IOrderSourceList) {
    this.nights = params.nights;
    this.source = params.source;
    this.averagePrice = params.averagePrice;
    this.roomIncome = params.roomIncome;
  }

  nights?: number;
  source?: string;
  averagePrice?: string;
  roomIncome?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.OrderSourceList',
      $: {
        nights: java.Long(this.nights),
        source: java.String(this.source),
        averagePrice: java.String(this.averagePrice),
        roomIncome: java.String(this.roomIncome),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
