import java from 'js-to-java';

export interface IClientDimensionQueryRequest {
  creator?: string;
  agreementTemplateCode?: string;
  dimensionOutsideUk?: string;
  dimensionTemplateCode?: string;
  pageSize?: number;
  pageNum?: number;
}

export class ClientDimensionQueryRequest {
  constructor(params: IClientDimensionQueryRequest) {
    this.creator = params.creator;
    this.agreementTemplateCode = params.agreementTemplateCode;
    this.dimensionOutsideUk = params.dimensionOutsideUk;
    this.dimensionTemplateCode = params.dimensionTemplateCode;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  creator?: string;
  agreementTemplateCode?: string;
  dimensionOutsideUk?: string;
  dimensionTemplateCode?: string;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.request.ClientDimensionQueryRequest',
      $: {
        creator: java.String(this.creator),
        agreementTemplateCode: java.String(this.agreementTemplateCode),
        dimensionOutsideUk: java.String(this.dimensionOutsideUk),
        dimensionTemplateCode: java.String(this.dimensionTemplateCode),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
