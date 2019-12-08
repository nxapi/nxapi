import java from 'js-to-java';

export interface IOwnerInvoiceBillDto {
  period?: string;
  amount?: {value: string};
  billType?: number;
  hotelId?: number;
}

export class OwnerInvoiceBillDto {
  constructor(params: IOwnerInvoiceBillDto) {
    this.period = params.period;
    this.amount = params.amount;
    this.billType = params.billType;
    this.hotelId = params.hotelId;
  }

  period?: string;
  amount?: {value: string};
  billType?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerInvoiceBillDto',
      $: {
        period: java.String(this.period),
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        billType: java.Integer(this.billType),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
