import { ChinaTwoFlashDetailDto } from './ChinaTwoFlashDetailDto';
import java from 'js-to-java';

export interface IHotelBillFlashResponseDto {
  chinaOneSign?: boolean;
  batchNo?: string;
  chinaTwoFlashDetailDtoList?: Array<ChinaTwoFlashDetailDto>;
  chinaTwoSign?: boolean;
  chianOnePeriod?: string;
  hotelId?: number;
  hotelName?: string;
  chianOneRevenueAmount?: {value: string};
  chianOneStatusStr?: string;
  chianTwoRevenueAmount?: {value: string};
  chianTwoPeriod?: string;
  weekSign?: boolean;
  chianOnePayAmount?: {value: string};
  chianTwoPayAmount?: {value: string};
  weekPayAmount?: {value: string};
  chinaTwoBillNo?: string;
}

export class HotelBillFlashResponseDto {
  constructor(params: IHotelBillFlashResponseDto) {
    this.chinaOneSign = params.chinaOneSign;
    this.batchNo = params.batchNo;
    this.chinaTwoFlashDetailDtoList = params.chinaTwoFlashDetailDtoList;
    this.chinaTwoSign = params.chinaTwoSign;
    this.chianOnePeriod = params.chianOnePeriod;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.chianOneRevenueAmount = params.chianOneRevenueAmount;
    this.chianOneStatusStr = params.chianOneStatusStr;
    this.chianTwoRevenueAmount = params.chianTwoRevenueAmount;
    this.chianTwoPeriod = params.chianTwoPeriod;
    this.weekSign = params.weekSign;
    this.chianOnePayAmount = params.chianOnePayAmount;
    this.chianTwoPayAmount = params.chianTwoPayAmount;
    this.weekPayAmount = params.weekPayAmount;
    this.chinaTwoBillNo = params.chinaTwoBillNo;
  }

  chinaOneSign?: boolean;
  batchNo?: string;
  chinaTwoFlashDetailDtoList?: Array<ChinaTwoFlashDetailDto>;
  chinaTwoSign?: boolean;
  chianOnePeriod?: string;
  hotelId?: number;
  hotelName?: string;
  chianOneRevenueAmount?: {value: string};
  chianOneStatusStr?: string;
  chianTwoRevenueAmount?: {value: string};
  chianTwoPeriod?: string;
  weekSign?: boolean;
  chianOnePayAmount?: {value: string};
  chianTwoPayAmount?: {value: string};
  weekPayAmount?: {value: string};
  chinaTwoBillNo?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillFlashResponseDto',
      $: {
        chinaOneSign: java.Boolean(this.chinaOneSign),
        batchNo: java.String(this.batchNo),
        chinaTwoFlashDetailDtoList: this.chinaTwoFlashDetailDtoList
          ? java.List(
              (this.chinaTwoFlashDetailDtoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        chinaTwoSign: java.Boolean(this.chinaTwoSign),
        chianOnePeriod: java.String(this.chianOnePeriod),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        chianOneRevenueAmount: this.chianOneRevenueAmount
          ? java.BigDecimal(this.chianOneRevenueAmount.value)
          : null,
        chianOneStatusStr: java.String(this.chianOneStatusStr),
        chianTwoRevenueAmount: this.chianTwoRevenueAmount
          ? java.BigDecimal(this.chianTwoRevenueAmount.value)
          : null,
        chianTwoPeriod: java.String(this.chianTwoPeriod),
        weekSign: java.Boolean(this.weekSign),
        chianOnePayAmount: this.chianOnePayAmount
          ? java.BigDecimal(this.chianOnePayAmount.value)
          : null,
        chianTwoPayAmount: this.chianTwoPayAmount
          ? java.BigDecimal(this.chianTwoPayAmount.value)
          : null,
        weekPayAmount: this.weekPayAmount
          ? java.BigDecimal(this.weekPayAmount.value)
          : null,
        chinaTwoBillNo: java.String(this.chinaTwoBillNo),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
