import { ServiceDetailsDto } from './ServiceDetailsDto';
import java from 'js-to-java';

export interface IServiceProjectsDetailsDto {
  totalDetails?: string;
  batchNo?: string;
  costDate?: string;
  contractType?: string;
  billStatus?: number;
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  detailItemList?: Array<ServiceDetailsDto>;
  noPayAmount?: {value: string};
}

export class ServiceProjectsDetailsDto {
  constructor(params: IServiceProjectsDetailsDto) {
    this.totalDetails = params.totalDetails;
    this.batchNo = params.batchNo;
    this.costDate = params.costDate;
    this.contractType = params.contractType;
    this.billStatus = params.billStatus;
    this.hotelId = params.hotelId;
    this.paymentSign = params.paymentSign;
    this.hotelName = params.hotelName;
    this.detailItemList = params.detailItemList;
    this.noPayAmount = params.noPayAmount;
  }

  totalDetails?: string;
  batchNo?: string;
  costDate?: string;
  contractType?: string;
  billStatus?: number;
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  detailItemList?: Array<ServiceDetailsDto>;
  noPayAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.ServiceProjectsDetailsDto',
      $: {
        totalDetails: java.String(this.totalDetails),
        batchNo: java.String(this.batchNo),
        costDate: java.String(this.costDate),
        contractType: java.String(this.contractType),
        billStatus: java.Integer(this.billStatus),
        hotelId: java.String(this.hotelId),
        paymentSign: java.Integer(this.paymentSign),
        hotelName: java.String(this.hotelName),
        detailItemList: this.detailItemList
          ? java.List(
              (this.detailItemList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        noPayAmount: this.noPayAmount
          ? java.BigDecimal(this.noPayAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
