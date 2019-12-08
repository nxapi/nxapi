import java from 'js-to-java';

export interface IClienLastingQueryRequest {
  agreementTemplateCode?: string;
  dimensionOutsideUk?: string;
  sourceType?: string;
  pageSize?: number;
  pageNum?: number;
  status?: string;
}

export class ClienLastingQueryRequest {
  constructor(params: IClienLastingQueryRequest) {
    this.agreementTemplateCode = params.agreementTemplateCode;
    this.dimensionOutsideUk = params.dimensionOutsideUk;
    this.sourceType = params.sourceType;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  agreementTemplateCode?: string;
  dimensionOutsideUk?: string;
  sourceType?: string;
  pageSize?: number;
  pageNum?: number;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.request.ClienLastingQueryRequest',
      $: {
        agreementTemplateCode: java.String(this.agreementTemplateCode),
        dimensionOutsideUk: java.String(this.dimensionOutsideUk),
        sourceType: java.String(this.sourceType),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
