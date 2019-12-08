import { HotelBillDateListDto } from './HotelBillDateListDto';
import java from 'js-to-java';

export interface IHotelBillDateResponseDto {
  billStatusStr?: string;
  hotelBillList?: Array<HotelBillDateListDto>;
  billSign?: string;
  allAmount?: string;
  pointsAmount?: string;
}

export class HotelBillDateResponseDto {
  constructor(params: IHotelBillDateResponseDto) {
    this.billStatusStr = params.billStatusStr;
    this.hotelBillList = params.hotelBillList;
    this.billSign = params.billSign;
    this.allAmount = params.allAmount;
    this.pointsAmount = params.pointsAmount;
  }

  billStatusStr?: string;
  hotelBillList?: Array<HotelBillDateListDto>;
  billSign?: string;
  allAmount?: string;
  pointsAmount?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillDateResponseDto',
      $: {
        billStatusStr: java.String(this.billStatusStr),
        hotelBillList: this.hotelBillList
          ? java.List(
              (this.hotelBillList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        billSign: java.String(this.billSign),
        allAmount: java.String(this.allAmount),
        pointsAmount: java.String(this.pointsAmount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
