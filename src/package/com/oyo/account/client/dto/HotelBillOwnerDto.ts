import { HotelBillPageDto } from './HotelBillPageDto';
import java from 'js-to-java';

export interface IHotelBillOwnerDto {
  latestBillList?: Array<HotelBillPageDto>;
  costDate?: string;
}

export class HotelBillOwnerDto {
  constructor(params: IHotelBillOwnerDto) {
    this.latestBillList = params.latestBillList;
    this.costDate = params.costDate;
  }

  latestBillList?: Array<HotelBillPageDto>;
  costDate?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillOwnerDto',
      $: {
        latestBillList: this.latestBillList
          ? java.List(
              (this.latestBillList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        costDate: java.String(this.costDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
