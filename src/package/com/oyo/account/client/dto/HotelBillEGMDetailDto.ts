import java from 'js-to-java';

export interface IHotelBillEGMDetailDto {
  otherAdjustAmount?: {value: string};
  balanceBroughtForwardAmount?: {value: string};
  contractType?: string;
  m2CurrentPeriodReturnFixedCommissionAmount?: {value: string};
  hotelId?: number;
  hotelName?: string;
  m1OwnerPayableOyoServiceAmount?: {value: string};
  oyoAdvancesReceivableAmount?: {value: string};
  orderTotalAmount?: {value: string};
  basicRate?: {value: string};
  m2CurrentPeriodReceivableFixedCommissionAmount?: {value: string};
  m2OwnerPayableOyoServiceAmount?: {value: string};
  realReceivableOwnerAmount?: {value: string};
  receivableOwnerAmount?: {value: string};
  billTransNum?: string;
  status?: number;
}

export class HotelBillEGMDetailDto {
  constructor(params: IHotelBillEGMDetailDto) {
    this.otherAdjustAmount = params.otherAdjustAmount;
    this.balanceBroughtForwardAmount = params.balanceBroughtForwardAmount;
    this.contractType = params.contractType;
    this.m2CurrentPeriodReturnFixedCommissionAmount =
      params.m2CurrentPeriodReturnFixedCommissionAmount;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.m1OwnerPayableOyoServiceAmount = params.m1OwnerPayableOyoServiceAmount;
    this.oyoAdvancesReceivableAmount = params.oyoAdvancesReceivableAmount;
    this.orderTotalAmount = params.orderTotalAmount;
    this.basicRate = params.basicRate;
    this.m2CurrentPeriodReceivableFixedCommissionAmount =
      params.m2CurrentPeriodReceivableFixedCommissionAmount;
    this.m2OwnerPayableOyoServiceAmount = params.m2OwnerPayableOyoServiceAmount;
    this.realReceivableOwnerAmount = params.realReceivableOwnerAmount;
    this.receivableOwnerAmount = params.receivableOwnerAmount;
    this.billTransNum = params.billTransNum;
    this.status = params.status;
  }

  otherAdjustAmount?: {value: string};
  balanceBroughtForwardAmount?: {value: string};
  contractType?: string;
  m2CurrentPeriodReturnFixedCommissionAmount?: {value: string};
  hotelId?: number;
  hotelName?: string;
  m1OwnerPayableOyoServiceAmount?: {value: string};
  oyoAdvancesReceivableAmount?: {value: string};
  orderTotalAmount?: {value: string};
  basicRate?: {value: string};
  m2CurrentPeriodReceivableFixedCommissionAmount?: {value: string};
  m2OwnerPayableOyoServiceAmount?: {value: string};
  realReceivableOwnerAmount?: {value: string};
  receivableOwnerAmount?: {value: string};
  billTransNum?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillEGMDetailDto',
      $: {
        otherAdjustAmount: this.otherAdjustAmount
          ? java.BigDecimal(this.otherAdjustAmount.value)
          : null,
        balanceBroughtForwardAmount: this.balanceBroughtForwardAmount
          ? java.BigDecimal(this.balanceBroughtForwardAmount.value)
          : null,
        contractType: java.String(this.contractType),
        m2CurrentPeriodReturnFixedCommissionAmount: this
          .m2CurrentPeriodReturnFixedCommissionAmount
          ? java.BigDecimal(
              this.m2CurrentPeriodReturnFixedCommissionAmount.value,
            )
          : null,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        m1OwnerPayableOyoServiceAmount: this.m1OwnerPayableOyoServiceAmount
          ? java.BigDecimal(this.m1OwnerPayableOyoServiceAmount.value)
          : null,
        oyoAdvancesReceivableAmount: this.oyoAdvancesReceivableAmount
          ? java.BigDecimal(this.oyoAdvancesReceivableAmount.value)
          : null,
        orderTotalAmount: this.orderTotalAmount
          ? java.BigDecimal(this.orderTotalAmount.value)
          : null,
        basicRate: this.basicRate
          ? java.BigDecimal(this.basicRate.value)
          : null,
        m2CurrentPeriodReceivableFixedCommissionAmount: this
          .m2CurrentPeriodReceivableFixedCommissionAmount
          ? java.BigDecimal(
              this.m2CurrentPeriodReceivableFixedCommissionAmount.value,
            )
          : null,
        m2OwnerPayableOyoServiceAmount: this.m2OwnerPayableOyoServiceAmount
          ? java.BigDecimal(this.m2OwnerPayableOyoServiceAmount.value)
          : null,
        realReceivableOwnerAmount: this.realReceivableOwnerAmount
          ? java.BigDecimal(this.realReceivableOwnerAmount.value)
          : null,
        receivableOwnerAmount: this.receivableOwnerAmount
          ? java.BigDecimal(this.receivableOwnerAmount.value)
          : null,
        billTransNum: java.String(this.billTransNum),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
