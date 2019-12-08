import { OYOServiceProjectsDto } from './OYOServiceProjectsDto';
import java from 'js-to-java';

export interface IHotelMonthlyBillDto {
  batchNo?: string;
  contractType?: string;
  nrvAmount?: {value: string};
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  actualAllAmount?: {value: string};
  billStatusStr?: string;
  costDate?: string;
  payableAllAmount?: {value: string};
  rate?: string;
  billStatus?: number;
  itemList?: Array<OYOServiceProjectsDto>;
  paidAmount?: {value: string};
}

export class HotelMonthlyBillDto {
  constructor(params: IHotelMonthlyBillDto) {
    this.batchNo = params.batchNo;
    this.contractType = params.contractType;
    this.nrvAmount = params.nrvAmount;
    this.hotelId = params.hotelId;
    this.paymentSign = params.paymentSign;
    this.hotelName = params.hotelName;
    this.actualAllAmount = params.actualAllAmount;
    this.billStatusStr = params.billStatusStr;
    this.costDate = params.costDate;
    this.payableAllAmount = params.payableAllAmount;
    this.rate = params.rate;
    this.billStatus = params.billStatus;
    this.itemList = params.itemList;
    this.paidAmount = params.paidAmount;
  }

  batchNo?: string;
  contractType?: string;
  nrvAmount?: {value: string};
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  actualAllAmount?: {value: string};
  billStatusStr?: string;
  costDate?: string;
  payableAllAmount?: {value: string};
  rate?: string;
  billStatus?: number;
  itemList?: Array<OYOServiceProjectsDto>;
  paidAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelMonthlyBillDto',
      $: {
        batchNo: java.String(this.batchNo),
        contractType: java.String(this.contractType),
        nrvAmount: this.nrvAmount
          ? java.BigDecimal(this.nrvAmount.value)
          : null,
        hotelId: java.String(this.hotelId),
        paymentSign: java.Integer(this.paymentSign),
        hotelName: java.String(this.hotelName),
        actualAllAmount: this.actualAllAmount
          ? java.BigDecimal(this.actualAllAmount.value)
          : null,
        billStatusStr: java.String(this.billStatusStr),
        costDate: java.String(this.costDate),
        payableAllAmount: this.payableAllAmount
          ? java.BigDecimal(this.payableAllAmount.value)
          : null,
        rate: java.String(this.rate),
        billStatus: java.Integer(this.billStatus),
        itemList: this.itemList
          ? java.List(
              (this.itemList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        paidAmount: this.paidAmount
          ? java.BigDecimal(this.paidAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
