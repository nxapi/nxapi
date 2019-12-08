import java from 'js-to-java';

export interface IRevenueReportDTO {
  revpar?: {value: string};
  roomNum?: number;
  bizDate?: string;
  consumptionAmount?: {value: string};
  avgRoomPrice?: {value: string};
  roomNights?: number;
  roomAmount?: {value: string};
  occ?: {value: string};
}

export class RevenueReportDTO {
  constructor(params: IRevenueReportDTO) {
    this.revpar = params.revpar;
    this.roomNum = params.roomNum;
    this.bizDate = params.bizDate;
    this.consumptionAmount = params.consumptionAmount;
    this.avgRoomPrice = params.avgRoomPrice;
    this.roomNights = params.roomNights;
    this.roomAmount = params.roomAmount;
    this.occ = params.occ;
  }

  revpar?: {value: string};
  roomNum?: number;
  bizDate?: string;
  consumptionAmount?: {value: string};
  avgRoomPrice?: {value: string};
  roomNights?: number;
  roomAmount?: {value: string};
  occ?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RevenueReportDTO',
      $: {
        revpar: this.revpar ? java.BigDecimal(this.revpar.value) : null,
        roomNum: java.Long(this.roomNum),
        bizDate: java.String(this.bizDate),
        consumptionAmount: this.consumptionAmount
          ? java.BigDecimal(this.consumptionAmount.value)
          : null,
        avgRoomPrice: this.avgRoomPrice
          ? java.BigDecimal(this.avgRoomPrice.value)
          : null,
        roomNights: java.Integer(this.roomNights),
        roomAmount: this.roomAmount
          ? java.BigDecimal(this.roomAmount.value)
          : null,
        occ: this.occ ? java.BigDecimal(this.occ.value) : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
