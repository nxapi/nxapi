import java from 'js-to-java';

export interface IHotelBillChinaTwoDto {
  receivableOwnerServiceAmountCumulative?: {value: string};
  revenueLeakageAuditFineAmountCumulative?: {value: string};
  annualRevenueVmgTotalAmount?: {value: string};
  billEndDate?: string;
  payableOwnerOyoCollectionAmountMonth?: {value: string};
  payableOwnerOyoCollectionAmountCumulative?: {value: string};
  hotelRealIncomeAmountMonth?: {value: string};
  addedRate?: {value: string};
  billStartDate?: string;
  ownerGuaranteedIncomeCompensateAmountMonth?: {value: string};
  lastMonthAccumulatedOyoPayableOwnerAmount?: {value: string};
  hotelRealIncomeAmountCumulative?: {value: string};
  billNo?: string;
  guaranteeRate?: {value: string};
  otherCurrentAdjustmentsAmount?: {value: string};
  billSign?: string;
  period?: string;
  paymentedOwnerAdvanceOyoCollectionAmountCumulative?: {value: string};
  payableOwnerAdvanceAmountCumulative?: {value: string};
  oyoActualPayableOwnerAmount?: {value: string};
  otherCurrentAdjustmentsAmountCumulative?: {value: string};
  hotelGuaranteedIncomeCompensateAmountCumulative?: {value: string};
  receivableOwnerServiceAmountMonth?: {value: string};
  payableOwnerAmountCumulative?: {value: string};
  receivedOwnerAmountCumulative?: {value: string};
  previousCarryOverBalanceAmount?: {value: string};
  payableOwnerAdvanceAmountMonth?: {value: string};
  hotelId?: number;
  advanceRatio?: {value: string};
  adjustedIncomeGuaranteedMonth?: {value: string};
  hotelName?: string;
  payableOwnerAmount?: {value: string};
  adjustedIncomeVmgCumulative?: {value: string};
  settlingMonth?: string;
  annualRevenueGuaranteedTotalAmount?: {value: string};
  paymentedOwnerAdvanceOyoCollectionAmountMonth?: {value: string};
  revenueLeakageAuditFineAmountMonth?: {value: string};
  adjustedIncomeVmgMonth?: {value: string};
  paymentedOwnerAmountCumulative?: {value: string};
  adjustedIncomeGuaranteedCumulative?: {value: string};
  payStatus?: number;
  status?: number;
}

export class HotelBillChinaTwoDto {
  constructor(params: IHotelBillChinaTwoDto) {
    this.receivableOwnerServiceAmountCumulative =
      params.receivableOwnerServiceAmountCumulative;
    this.revenueLeakageAuditFineAmountCumulative =
      params.revenueLeakageAuditFineAmountCumulative;
    this.annualRevenueVmgTotalAmount = params.annualRevenueVmgTotalAmount;
    this.billEndDate = params.billEndDate;
    this.payableOwnerOyoCollectionAmountMonth =
      params.payableOwnerOyoCollectionAmountMonth;
    this.payableOwnerOyoCollectionAmountCumulative =
      params.payableOwnerOyoCollectionAmountCumulative;
    this.hotelRealIncomeAmountMonth = params.hotelRealIncomeAmountMonth;
    this.addedRate = params.addedRate;
    this.billStartDate = params.billStartDate;
    this.ownerGuaranteedIncomeCompensateAmountMonth =
      params.ownerGuaranteedIncomeCompensateAmountMonth;
    this.lastMonthAccumulatedOyoPayableOwnerAmount =
      params.lastMonthAccumulatedOyoPayableOwnerAmount;
    this.hotelRealIncomeAmountCumulative =
      params.hotelRealIncomeAmountCumulative;
    this.billNo = params.billNo;
    this.guaranteeRate = params.guaranteeRate;
    this.otherCurrentAdjustmentsAmount = params.otherCurrentAdjustmentsAmount;
    this.billSign = params.billSign;
    this.period = params.period;
    this.paymentedOwnerAdvanceOyoCollectionAmountCumulative =
      params.paymentedOwnerAdvanceOyoCollectionAmountCumulative;
    this.payableOwnerAdvanceAmountCumulative =
      params.payableOwnerAdvanceAmountCumulative;
    this.oyoActualPayableOwnerAmount = params.oyoActualPayableOwnerAmount;
    this.otherCurrentAdjustmentsAmountCumulative =
      params.otherCurrentAdjustmentsAmountCumulative;
    this.hotelGuaranteedIncomeCompensateAmountCumulative =
      params.hotelGuaranteedIncomeCompensateAmountCumulative;
    this.receivableOwnerServiceAmountMonth =
      params.receivableOwnerServiceAmountMonth;
    this.payableOwnerAmountCumulative = params.payableOwnerAmountCumulative;
    this.receivedOwnerAmountCumulative = params.receivedOwnerAmountCumulative;
    this.previousCarryOverBalanceAmount = params.previousCarryOverBalanceAmount;
    this.payableOwnerAdvanceAmountMonth = params.payableOwnerAdvanceAmountMonth;
    this.hotelId = params.hotelId;
    this.advanceRatio = params.advanceRatio;
    this.adjustedIncomeGuaranteedMonth = params.adjustedIncomeGuaranteedMonth;
    this.hotelName = params.hotelName;
    this.payableOwnerAmount = params.payableOwnerAmount;
    this.adjustedIncomeVmgCumulative = params.adjustedIncomeVmgCumulative;
    this.settlingMonth = params.settlingMonth;
    this.annualRevenueGuaranteedTotalAmount =
      params.annualRevenueGuaranteedTotalAmount;
    this.paymentedOwnerAdvanceOyoCollectionAmountMonth =
      params.paymentedOwnerAdvanceOyoCollectionAmountMonth;
    this.revenueLeakageAuditFineAmountMonth =
      params.revenueLeakageAuditFineAmountMonth;
    this.adjustedIncomeVmgMonth = params.adjustedIncomeVmgMonth;
    this.paymentedOwnerAmountCumulative = params.paymentedOwnerAmountCumulative;
    this.adjustedIncomeGuaranteedCumulative =
      params.adjustedIncomeGuaranteedCumulative;
    this.payStatus = params.payStatus;
    this.status = params.status;
  }

  receivableOwnerServiceAmountCumulative?: {value: string};
  revenueLeakageAuditFineAmountCumulative?: {value: string};
  annualRevenueVmgTotalAmount?: {value: string};
  billEndDate?: string;
  payableOwnerOyoCollectionAmountMonth?: {value: string};
  payableOwnerOyoCollectionAmountCumulative?: {value: string};
  hotelRealIncomeAmountMonth?: {value: string};
  addedRate?: {value: string};
  billStartDate?: string;
  ownerGuaranteedIncomeCompensateAmountMonth?: {value: string};
  lastMonthAccumulatedOyoPayableOwnerAmount?: {value: string};
  hotelRealIncomeAmountCumulative?: {value: string};
  billNo?: string;
  guaranteeRate?: {value: string};
  otherCurrentAdjustmentsAmount?: {value: string};
  billSign?: string;
  period?: string;
  paymentedOwnerAdvanceOyoCollectionAmountCumulative?: {value: string};
  payableOwnerAdvanceAmountCumulative?: {value: string};
  oyoActualPayableOwnerAmount?: {value: string};
  otherCurrentAdjustmentsAmountCumulative?: {value: string};
  hotelGuaranteedIncomeCompensateAmountCumulative?: {value: string};
  receivableOwnerServiceAmountMonth?: {value: string};
  payableOwnerAmountCumulative?: {value: string};
  receivedOwnerAmountCumulative?: {value: string};
  previousCarryOverBalanceAmount?: {value: string};
  payableOwnerAdvanceAmountMonth?: {value: string};
  hotelId?: number;
  advanceRatio?: {value: string};
  adjustedIncomeGuaranteedMonth?: {value: string};
  hotelName?: string;
  payableOwnerAmount?: {value: string};
  adjustedIncomeVmgCumulative?: {value: string};
  settlingMonth?: string;
  annualRevenueGuaranteedTotalAmount?: {value: string};
  paymentedOwnerAdvanceOyoCollectionAmountMonth?: {value: string};
  revenueLeakageAuditFineAmountMonth?: {value: string};
  adjustedIncomeVmgMonth?: {value: string};
  paymentedOwnerAmountCumulative?: {value: string};
  adjustedIncomeGuaranteedCumulative?: {value: string};
  payStatus?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillChinaTwoDto',
      $: {
        receivableOwnerServiceAmountCumulative: this
          .receivableOwnerServiceAmountCumulative
          ? java.BigDecimal(this.receivableOwnerServiceAmountCumulative.value)
          : null,
        revenueLeakageAuditFineAmountCumulative: this
          .revenueLeakageAuditFineAmountCumulative
          ? java.BigDecimal(this.revenueLeakageAuditFineAmountCumulative.value)
          : null,
        annualRevenueVmgTotalAmount: this.annualRevenueVmgTotalAmount
          ? java.BigDecimal(this.annualRevenueVmgTotalAmount.value)
          : null,
        billEndDate: java.String(this.billEndDate),
        payableOwnerOyoCollectionAmountMonth: this
          .payableOwnerOyoCollectionAmountMonth
          ? java.BigDecimal(this.payableOwnerOyoCollectionAmountMonth.value)
          : null,
        payableOwnerOyoCollectionAmountCumulative: this
          .payableOwnerOyoCollectionAmountCumulative
          ? java.BigDecimal(
              this.payableOwnerOyoCollectionAmountCumulative.value,
            )
          : null,
        hotelRealIncomeAmountMonth: this.hotelRealIncomeAmountMonth
          ? java.BigDecimal(this.hotelRealIncomeAmountMonth.value)
          : null,
        addedRate: this.addedRate
          ? java.BigDecimal(this.addedRate.value)
          : null,
        billStartDate: java.String(this.billStartDate),
        ownerGuaranteedIncomeCompensateAmountMonth: this
          .ownerGuaranteedIncomeCompensateAmountMonth
          ? java.BigDecimal(
              this.ownerGuaranteedIncomeCompensateAmountMonth.value,
            )
          : null,
        lastMonthAccumulatedOyoPayableOwnerAmount: this
          .lastMonthAccumulatedOyoPayableOwnerAmount
          ? java.BigDecimal(
              this.lastMonthAccumulatedOyoPayableOwnerAmount.value,
            )
          : null,
        hotelRealIncomeAmountCumulative: this.hotelRealIncomeAmountCumulative
          ? java.BigDecimal(this.hotelRealIncomeAmountCumulative.value)
          : null,
        billNo: java.String(this.billNo),
        guaranteeRate: this.guaranteeRate
          ? java.BigDecimal(this.guaranteeRate.value)
          : null,
        otherCurrentAdjustmentsAmount: this.otherCurrentAdjustmentsAmount
          ? java.BigDecimal(this.otherCurrentAdjustmentsAmount.value)
          : null,
        billSign: java.String(this.billSign),
        period: java.String(this.period),
        paymentedOwnerAdvanceOyoCollectionAmountCumulative: this
          .paymentedOwnerAdvanceOyoCollectionAmountCumulative
          ? java.BigDecimal(
              this.paymentedOwnerAdvanceOyoCollectionAmountCumulative.value,
            )
          : null,
        payableOwnerAdvanceAmountCumulative: this
          .payableOwnerAdvanceAmountCumulative
          ? java.BigDecimal(this.payableOwnerAdvanceAmountCumulative.value)
          : null,
        oyoActualPayableOwnerAmount: this.oyoActualPayableOwnerAmount
          ? java.BigDecimal(this.oyoActualPayableOwnerAmount.value)
          : null,
        otherCurrentAdjustmentsAmountCumulative: this
          .otherCurrentAdjustmentsAmountCumulative
          ? java.BigDecimal(this.otherCurrentAdjustmentsAmountCumulative.value)
          : null,
        hotelGuaranteedIncomeCompensateAmountCumulative: this
          .hotelGuaranteedIncomeCompensateAmountCumulative
          ? java.BigDecimal(
              this.hotelGuaranteedIncomeCompensateAmountCumulative.value,
            )
          : null,
        receivableOwnerServiceAmountMonth: this
          .receivableOwnerServiceAmountMonth
          ? java.BigDecimal(this.receivableOwnerServiceAmountMonth.value)
          : null,
        payableOwnerAmountCumulative: this.payableOwnerAmountCumulative
          ? java.BigDecimal(this.payableOwnerAmountCumulative.value)
          : null,
        receivedOwnerAmountCumulative: this.receivedOwnerAmountCumulative
          ? java.BigDecimal(this.receivedOwnerAmountCumulative.value)
          : null,
        previousCarryOverBalanceAmount: this.previousCarryOverBalanceAmount
          ? java.BigDecimal(this.previousCarryOverBalanceAmount.value)
          : null,
        payableOwnerAdvanceAmountMonth: this.payableOwnerAdvanceAmountMonth
          ? java.BigDecimal(this.payableOwnerAdvanceAmountMonth.value)
          : null,
        hotelId: java.Integer(this.hotelId),
        advanceRatio: this.advanceRatio
          ? java.BigDecimal(this.advanceRatio.value)
          : null,
        adjustedIncomeGuaranteedMonth: this.adjustedIncomeGuaranteedMonth
          ? java.BigDecimal(this.adjustedIncomeGuaranteedMonth.value)
          : null,
        hotelName: java.String(this.hotelName),
        payableOwnerAmount: this.payableOwnerAmount
          ? java.BigDecimal(this.payableOwnerAmount.value)
          : null,
        adjustedIncomeVmgCumulative: this.adjustedIncomeVmgCumulative
          ? java.BigDecimal(this.adjustedIncomeVmgCumulative.value)
          : null,
        settlingMonth: java.String(this.settlingMonth),
        annualRevenueGuaranteedTotalAmount: this
          .annualRevenueGuaranteedTotalAmount
          ? java.BigDecimal(this.annualRevenueGuaranteedTotalAmount.value)
          : null,
        paymentedOwnerAdvanceOyoCollectionAmountMonth: this
          .paymentedOwnerAdvanceOyoCollectionAmountMonth
          ? java.BigDecimal(
              this.paymentedOwnerAdvanceOyoCollectionAmountMonth.value,
            )
          : null,
        revenueLeakageAuditFineAmountMonth: this
          .revenueLeakageAuditFineAmountMonth
          ? java.BigDecimal(this.revenueLeakageAuditFineAmountMonth.value)
          : null,
        adjustedIncomeVmgMonth: this.adjustedIncomeVmgMonth
          ? java.BigDecimal(this.adjustedIncomeVmgMonth.value)
          : null,
        paymentedOwnerAmountCumulative: this.paymentedOwnerAmountCumulative
          ? java.BigDecimal(this.paymentedOwnerAmountCumulative.value)
          : null,
        adjustedIncomeGuaranteedCumulative: this
          .adjustedIncomeGuaranteedCumulative
          ? java.BigDecimal(this.adjustedIncomeGuaranteedCumulative.value)
          : null,
        payStatus: java.Integer(this.payStatus),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
