import { HotelBillPageDto } from './HotelBillPageDto';
import { HotelMonthlyBillDto } from './HotelMonthlyBillDto';
import java from 'js-to-java';

export interface IHotelCostBillDto {
  oldList?: Array<HotelBillPageDto>;
  sign?: string;
  newList?: Array<HotelMonthlyBillDto>;
}

export class HotelCostBillDto {
  constructor(params: IHotelCostBillDto) {
    this.oldList = params.oldList;
    this.sign = params.sign;
    this.newList = params.newList;
  }

  oldList?: Array<HotelBillPageDto>;
  sign?: string;
  newList?: Array<HotelMonthlyBillDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelCostBillDto',
      $: {
        oldList: this.oldList
          ? java.List(
              (this.oldList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        sign: java.String(this.sign),
        newList: this.newList
          ? java.List(
              (this.newList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
