import java from 'js-to-java';

export interface IOrderSourceReportDTO {
  sourceId?: number;
  totalInCome?: {value: string};
  nights?: number;
  sourceName?: string;
  averagePrice?: {value: string};
  totalRoomAmount?: {value: string};
}

export class OrderSourceReportDTO {
  constructor(params: IOrderSourceReportDTO) {
    this.sourceId = params.sourceId;
    this.totalInCome = params.totalInCome;
    this.nights = params.nights;
    this.sourceName = params.sourceName;
    this.averagePrice = params.averagePrice;
    this.totalRoomAmount = params.totalRoomAmount;
  }

  sourceId?: number;
  totalInCome?: {value: string};
  nights?: number;
  sourceName?: string;
  averagePrice?: {value: string};
  totalRoomAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OrderSourceReportDTO',
      $: {
        sourceId: java.Long(this.sourceId),
        totalInCome: this.totalInCome
          ? java.BigDecimal(this.totalInCome.value)
          : null,
        nights: java.Integer(this.nights),
        sourceName: java.String(this.sourceName),
        averagePrice: this.averagePrice
          ? java.BigDecimal(this.averagePrice.value)
          : null,
        totalRoomAmount: this.totalRoomAmount
          ? java.BigDecimal(this.totalRoomAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
