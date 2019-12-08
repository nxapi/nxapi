import java from 'js-to-java';

export interface IHotelPutIntoUptonowDto {
  otaChannelComm?: {value: string};
  endDate?: Date;
  memberInvestCost?: {value: string};
  hotelId?: number;
  otaGoodFbCnt?: number;
  startDate?: Date;
}

export class HotelPutIntoUptonowDto {
  constructor(params: IHotelPutIntoUptonowDto) {
    this.otaChannelComm = params.otaChannelComm;
    this.endDate = params.endDate;
    this.memberInvestCost = params.memberInvestCost;
    this.hotelId = params.hotelId;
    this.otaGoodFbCnt = params.otaGoodFbCnt;
    this.startDate = params.startDate;
  }

  otaChannelComm?: {value: string};
  endDate?: Date;
  memberInvestCost?: {value: string};
  hotelId?: number;
  otaGoodFbCnt?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.dataquery.client.dto.weeklyreport.HotelPutIntoUptonowDto',
      $: {
        otaChannelComm: this.otaChannelComm
          ? java.BigDecimal(this.otaChannelComm.value)
          : null,
        endDate: this.endDate,
        memberInvestCost: this.memberInvestCost
          ? java.BigDecimal(this.memberInvestCost.value)
          : null,
        hotelId: java.Integer(this.hotelId),
        otaGoodFbCnt: java.Integer(this.otaGoodFbCnt),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
