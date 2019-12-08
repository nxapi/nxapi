import java from 'js-to-java';

export interface IHotelBillPageDto {
  costSettlementStatus?: number;
  monthRoomNum?: number;
  dateStr?: string;
  costNoSettlementAmount?: {value: string};
  costAdjustNrv?: {value: string};
  costAmount?: {value: string};
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  costDate?: string;
  payAmount?: {value: string};
  billStatus?: number;
  costReceivableAmount?: {value: string};
  costOtaAmount?: {value: string};
}

export class HotelBillPageDto {
  constructor(params: IHotelBillPageDto) {
    this.costSettlementStatus = params.costSettlementStatus;
    this.monthRoomNum = params.monthRoomNum;
    this.dateStr = params.dateStr;
    this.costNoSettlementAmount = params.costNoSettlementAmount;
    this.costAdjustNrv = params.costAdjustNrv;
    this.costAmount = params.costAmount;
    this.hotelId = params.hotelId;
    this.paymentSign = params.paymentSign;
    this.hotelName = params.hotelName;
    this.costDate = params.costDate;
    this.payAmount = params.payAmount;
    this.billStatus = params.billStatus;
    this.costReceivableAmount = params.costReceivableAmount;
    this.costOtaAmount = params.costOtaAmount;
  }

  costSettlementStatus?: number;
  monthRoomNum?: number;
  dateStr?: string;
  costNoSettlementAmount?: {value: string};
  costAdjustNrv?: {value: string};
  costAmount?: {value: string};
  hotelId?: string;
  paymentSign?: number;
  hotelName?: string;
  costDate?: string;
  payAmount?: {value: string};
  billStatus?: number;
  costReceivableAmount?: {value: string};
  costOtaAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillPageDto',
      $: {
        costSettlementStatus: java.Integer(this.costSettlementStatus),
        monthRoomNum: java.Integer(this.monthRoomNum),
        dateStr: java.String(this.dateStr),
        costNoSettlementAmount: this.costNoSettlementAmount
          ? java.BigDecimal(this.costNoSettlementAmount.value)
          : null,
        costAdjustNrv: this.costAdjustNrv
          ? java.BigDecimal(this.costAdjustNrv.value)
          : null,
        costAmount: this.costAmount
          ? java.BigDecimal(this.costAmount.value)
          : null,
        hotelId: java.String(this.hotelId),
        paymentSign: java.Integer(this.paymentSign),
        hotelName: java.String(this.hotelName),
        costDate: java.String(this.costDate),
        payAmount: this.payAmount
          ? java.BigDecimal(this.payAmount.value)
          : null,
        billStatus: java.Integer(this.billStatus),
        costReceivableAmount: this.costReceivableAmount
          ? java.BigDecimal(this.costReceivableAmount.value)
          : null,
        costOtaAmount: this.costOtaAmount
          ? java.BigDecimal(this.costOtaAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
