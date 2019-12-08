import java from 'js-to-java';

export interface IAgreementSettlementInfoDto {
  clearingRule?: string;
  period?: string;
  billDay?: number;
  payMode?: string;
  needSign?: string;
  versionName?: string;
  feeType?: string;
  currencySettlement?: string;
  payRule?: string;
  billDimension?: string;
  agreementId?: number;
  payDay?: number;
  deposit?: {value: string};
  receiveMode?: string;
  needDeposit?: string;
  payClause?: string;
  status?: string;
}

export class AgreementSettlementInfoDto {
  constructor(params: IAgreementSettlementInfoDto) {
    this.clearingRule = params.clearingRule;
    this.period = params.period;
    this.billDay = params.billDay;
    this.payMode = params.payMode;
    this.needSign = params.needSign;
    this.versionName = params.versionName;
    this.feeType = params.feeType;
    this.currencySettlement = params.currencySettlement;
    this.payRule = params.payRule;
    this.billDimension = params.billDimension;
    this.agreementId = params.agreementId;
    this.payDay = params.payDay;
    this.deposit = params.deposit;
    this.receiveMode = params.receiveMode;
    this.needDeposit = params.needDeposit;
    this.payClause = params.payClause;
    this.status = params.status;
  }

  clearingRule?: string;
  period?: string;
  billDay?: number;
  payMode?: string;
  needSign?: string;
  versionName?: string;
  feeType?: string;
  currencySettlement?: string;
  payRule?: string;
  billDimension?: string;
  agreementId?: number;
  payDay?: number;
  deposit?: {value: string};
  receiveMode?: string;
  needDeposit?: string;
  payClause?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.AgreementSettlementInfoDto',
      $: {
        clearingRule: java.String(this.clearingRule),
        period: java.String(this.period),
        billDay: java.Integer(this.billDay),
        payMode: java.String(this.payMode),
        needSign: java.String(this.needSign),
        versionName: java.String(this.versionName),
        feeType: java.String(this.feeType),
        currencySettlement: java.String(this.currencySettlement),
        payRule: java.String(this.payRule),
        billDimension: java.String(this.billDimension),
        agreementId: java.Long(this.agreementId),
        payDay: java.Integer(this.payDay),
        deposit: this.deposit ? java.BigDecimal(this.deposit.value) : null,
        receiveMode: java.String(this.receiveMode),
        needDeposit: java.String(this.needDeposit),
        payClause: java.String(this.payClause),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
