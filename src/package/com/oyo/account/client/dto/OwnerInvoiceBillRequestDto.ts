import java from 'js-to-java';

export interface IOwnerInvoiceBillRequestDto {
  period?: string;
  offSet?: number;
  billType?: number;
  pageSize?: number;
  hotelId?: number;
  billNo?: string;
  status?: Array<number>;
}

export class OwnerInvoiceBillRequestDto {
  constructor(params: IOwnerInvoiceBillRequestDto) {
    this.period = params.period;
    this.offSet = params.offSet;
    this.billType = params.billType;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.billNo = params.billNo;
    this.status = params.status;
  }

  period?: string;
  offSet?: number;
  billType?: number;
  pageSize?: number;
  hotelId?: number;
  billNo?: string;
  status?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerInvoiceBillRequestDto',
      $: {
        period: java.String(this.period),
        offSet: java.Integer(this.offSet),
        billType: java.Integer(this.billType),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        billNo: java.String(this.billNo),
        status: this.status
          ? java.List(
              (this.status || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
