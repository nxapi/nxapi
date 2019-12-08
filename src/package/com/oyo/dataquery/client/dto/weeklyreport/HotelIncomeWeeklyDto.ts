import java from 'js-to-java';

export interface IHotelIncomeWeeklyDto {
  mmGmv?: {value: string};
  mtRankCity?: number;
  endDate?: Date;
  ctripRankArea?: number;
  mtRankHos?: number;
  hotelId?: number;
  srn?: number;
  mtScore?: {value: string};
  totGmv?: {value: string};
  ctripScore?: {value: string};
  oyoOrderCnt?: number;
  ctripRankCity?: number;
  ctripUv?: number;
  mtUv?: number;
  totUrn?: number;
  startDate?: Date;
}

export class HotelIncomeWeeklyDto {
  constructor(params: IHotelIncomeWeeklyDto) {
    this.mmGmv = params.mmGmv;
    this.mtRankCity = params.mtRankCity;
    this.endDate = params.endDate;
    this.ctripRankArea = params.ctripRankArea;
    this.mtRankHos = params.mtRankHos;
    this.hotelId = params.hotelId;
    this.srn = params.srn;
    this.mtScore = params.mtScore;
    this.totGmv = params.totGmv;
    this.ctripScore = params.ctripScore;
    this.oyoOrderCnt = params.oyoOrderCnt;
    this.ctripRankCity = params.ctripRankCity;
    this.ctripUv = params.ctripUv;
    this.mtUv = params.mtUv;
    this.totUrn = params.totUrn;
    this.startDate = params.startDate;
  }

  mmGmv?: {value: string};
  mtRankCity?: number;
  endDate?: Date;
  ctripRankArea?: number;
  mtRankHos?: number;
  hotelId?: number;
  srn?: number;
  mtScore?: {value: string};
  totGmv?: {value: string};
  ctripScore?: {value: string};
  oyoOrderCnt?: number;
  ctripRankCity?: number;
  ctripUv?: number;
  mtUv?: number;
  totUrn?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.weeklyreport.HotelIncomeWeeklyDto',
      $: {
        mmGmv: this.mmGmv ? java.BigDecimal(this.mmGmv.value) : null,
        mtRankCity: java.Integer(this.mtRankCity),
        endDate: this.endDate,
        ctripRankArea: java.Integer(this.ctripRankArea),
        mtRankHos: java.Integer(this.mtRankHos),
        hotelId: java.Integer(this.hotelId),
        srn: java.Integer(this.srn),
        mtScore: this.mtScore ? java.BigDecimal(this.mtScore.value) : null,
        totGmv: this.totGmv ? java.BigDecimal(this.totGmv.value) : null,
        ctripScore: this.ctripScore
          ? java.BigDecimal(this.ctripScore.value)
          : null,
        oyoOrderCnt: java.Integer(this.oyoOrderCnt),
        ctripRankCity: java.Integer(this.ctripRankCity),
        ctripUv: java.Integer(this.ctripUv),
        mtUv: java.Integer(this.mtUv),
        totUrn: java.Integer(this.totUrn),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
