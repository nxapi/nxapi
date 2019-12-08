import { ServiceDetailsDto } from './ServiceDetailsDto';
import java from 'js-to-java';

export interface IHotelBillDateListDto {
  dateSign?: string;
  billSign?: string;
  costDate?: string;
  billStatus?: string;
  titleList?: Array<ServiceDetailsDto>;
  billNo?: string;
}

export class HotelBillDateListDto {
  constructor(params: IHotelBillDateListDto) {
    this.dateSign = params.dateSign;
    this.billSign = params.billSign;
    this.costDate = params.costDate;
    this.billStatus = params.billStatus;
    this.titleList = params.titleList;
    this.billNo = params.billNo;
  }

  dateSign?: string;
  billSign?: string;
  costDate?: string;
  billStatus?: string;
  titleList?: Array<ServiceDetailsDto>;
  billNo?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillDateListDto',
      $: {
        dateSign: java.String(this.dateSign),
        billSign: java.String(this.billSign),
        costDate: java.String(this.costDate),
        billStatus: java.String(this.billStatus),
        titleList: this.titleList
          ? java.List(
              (this.titleList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        billNo: java.String(this.billNo),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
