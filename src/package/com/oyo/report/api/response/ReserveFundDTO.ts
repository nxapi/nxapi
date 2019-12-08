import { HandoverAdjustmentDTO } from './HandoverAdjustmentDTO';
import java from 'js-to-java';

export interface IReserveFundDTO {
  reserveFundAdjustmentRecord?: Array<HandoverAdjustmentDTO>;
  preRemainCash?: {value: string};
  remainCash?: {value: string};
  lastReserveFund?: {value: string};
}

export class ReserveFundDTO {
  constructor(params: IReserveFundDTO) {
    this.reserveFundAdjustmentRecord = params.reserveFundAdjustmentRecord;
    this.preRemainCash = params.preRemainCash;
    this.remainCash = params.remainCash;
    this.lastReserveFund = params.lastReserveFund;
  }

  reserveFundAdjustmentRecord?: Array<HandoverAdjustmentDTO>;
  preRemainCash?: {value: string};
  remainCash?: {value: string};
  lastReserveFund?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ReserveFundDTO',
      $: {
        reserveFundAdjustmentRecord: this.reserveFundAdjustmentRecord
          ? java.List(
              (this.reserveFundAdjustmentRecord || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        preRemainCash: this.preRemainCash
          ? java.BigDecimal(this.preRemainCash.value)
          : null,
        remainCash: this.remainCash
          ? java.BigDecimal(this.remainCash.value)
          : null,
        lastReserveFund: this.lastReserveFund
          ? java.BigDecimal(this.lastReserveFund.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
