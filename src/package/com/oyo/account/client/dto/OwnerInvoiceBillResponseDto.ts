import java from 'js-to-java';

export interface IOwnerInvoiceBillResponseDto {
  period?: string;
  statusStr?: string;
  billType?: string;
  invoiceAmount?: {value: string};
  remark?: string;
  hotelId?: number;
  status?: number;
}

export class OwnerInvoiceBillResponseDto {
  constructor(params: IOwnerInvoiceBillResponseDto) {
    this.period = params.period;
    this.statusStr = params.statusStr;
    this.billType = params.billType;
    this.invoiceAmount = params.invoiceAmount;
    this.remark = params.remark;
    this.hotelId = params.hotelId;
    this.status = params.status;
  }

  period?: string;
  statusStr?: string;
  billType?: string;
  invoiceAmount?: {value: string};
  remark?: string;
  hotelId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerInvoiceBillResponseDto',
      $: {
        period: java.String(this.period),
        statusStr: java.String(this.statusStr),
        billType: java.String(this.billType),
        invoiceAmount: this.invoiceAmount
          ? java.BigDecimal(this.invoiceAmount.value)
          : null,
        remark: java.String(this.remark),
        hotelId: java.Long(this.hotelId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
