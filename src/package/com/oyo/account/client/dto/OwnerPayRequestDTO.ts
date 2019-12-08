import { OwnerPayItemDto } from './OwnerPayItemDto';
import java from 'js-to-java';

export interface IOwnerPayRequestDTO {
  transactionType?: string;
  amount?: {value: string};
  period?: string;
  appVersion?: string;
  payType?: number;
  transNum?: string;
  contractType?: string;
  titleSign?: string;
  payChannel?: string;
  hotelId?: number;
  userId?: number;
  payItems?: Array<OwnerPayItemDto>;
}

export class OwnerPayRequestDTO {
  constructor(params: IOwnerPayRequestDTO) {
    this.transactionType = params.transactionType;
    this.amount = params.amount;
    this.period = params.period;
    this.appVersion = params.appVersion;
    this.payType = params.payType;
    this.transNum = params.transNum;
    this.contractType = params.contractType;
    this.titleSign = params.titleSign;
    this.payChannel = params.payChannel;
    this.hotelId = params.hotelId;
    this.userId = params.userId;
    this.payItems = params.payItems;
  }

  transactionType?: string;
  amount?: {value: string};
  period?: string;
  appVersion?: string;
  payType?: number;
  transNum?: string;
  contractType?: string;
  titleSign?: string;
  payChannel?: string;
  hotelId?: number;
  userId?: number;
  payItems?: Array<OwnerPayItemDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerPayRequestDTO',
      $: {
        transactionType: java.String(this.transactionType),
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        period: java.String(this.period),
        appVersion: java.String(this.appVersion),
        payType: java.Integer(this.payType),
        transNum: java.String(this.transNum),
        contractType: java.String(this.contractType),
        titleSign: java.String(this.titleSign),
        payChannel: java.String(this.payChannel),
        hotelId: java.Long(this.hotelId),
        userId: java.Long(this.userId),
        payItems: this.payItems
          ? java.List(
              (this.payItems || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
