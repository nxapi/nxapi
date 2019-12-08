import java from 'js-to-java';

export interface IAgreementPrepaidInfoDto {
  payDateType?: string;
  prepaidBatch?: string;
  prepaidTemplateId?: number;
  payRatio?: {value: string};
  templateId?: number;
  prepaidType?: string;
  totalAmount?: {value: string};
  prepaidLimit?: string;
  payDelay?: number;
  prepaidTotalAmt?: {value: string};
  prepaidDetailId?: number;
  agreementId?: number;
  prepaidItemId?: string;
  baseAmt?: {value: string};
  prepaidStageType?: string;
  payDate?: Date;
}

export class AgreementPrepaidInfoDto {
  constructor(params: IAgreementPrepaidInfoDto) {
    this.payDateType = params.payDateType;
    this.prepaidBatch = params.prepaidBatch;
    this.prepaidTemplateId = params.prepaidTemplateId;
    this.payRatio = params.payRatio;
    this.templateId = params.templateId;
    this.prepaidType = params.prepaidType;
    this.totalAmount = params.totalAmount;
    this.prepaidLimit = params.prepaidLimit;
    this.payDelay = params.payDelay;
    this.prepaidTotalAmt = params.prepaidTotalAmt;
    this.prepaidDetailId = params.prepaidDetailId;
    this.agreementId = params.agreementId;
    this.prepaidItemId = params.prepaidItemId;
    this.baseAmt = params.baseAmt;
    this.prepaidStageType = params.prepaidStageType;
    this.payDate = params.payDate;
  }

  payDateType?: string;
  prepaidBatch?: string;
  prepaidTemplateId?: number;
  payRatio?: {value: string};
  templateId?: number;
  prepaidType?: string;
  totalAmount?: {value: string};
  prepaidLimit?: string;
  payDelay?: number;
  prepaidTotalAmt?: {value: string};
  prepaidDetailId?: number;
  agreementId?: number;
  prepaidItemId?: string;
  baseAmt?: {value: string};
  prepaidStageType?: string;
  payDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.AgreementPrepaidInfoDto',
      $: {
        payDateType: java.String(this.payDateType),
        prepaidBatch: java.String(this.prepaidBatch),
        prepaidTemplateId: java.Long(this.prepaidTemplateId),
        payRatio: this.payRatio ? java.BigDecimal(this.payRatio.value) : null,
        templateId: java.Long(this.templateId),
        prepaidType: java.String(this.prepaidType),
        totalAmount: this.totalAmount
          ? java.BigDecimal(this.totalAmount.value)
          : null,
        prepaidLimit: java.String(this.prepaidLimit),
        payDelay: java.Integer(this.payDelay),
        prepaidTotalAmt: this.prepaidTotalAmt
          ? java.BigDecimal(this.prepaidTotalAmt.value)
          : null,
        prepaidDetailId: java.Long(this.prepaidDetailId),
        agreementId: java.Long(this.agreementId),
        prepaidItemId: java.String(this.prepaidItemId),
        baseAmt: this.baseAmt ? java.BigDecimal(this.baseAmt.value) : null,
        prepaidStageType: java.String(this.prepaidStageType),
        payDate: this.payDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
