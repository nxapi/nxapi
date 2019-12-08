import java from 'js-to-java';

export interface IClientBaseQueryRequest {
  leadsId?: string;
  agreementTemplateCode?: string;
  crsId?: string;
  indexTemplateCode?: string;
  pageSize?: number;
  auditStatus?: Array<string>;
  searchConditionMap?: {[name: string]: Object};
  pageNum?: number;
}

export class ClientBaseQueryRequest {
  constructor(params: IClientBaseQueryRequest) {
    this.leadsId = params.leadsId;
    this.agreementTemplateCode = params.agreementTemplateCode;
    this.crsId = params.crsId;
    this.indexTemplateCode = params.indexTemplateCode;
    this.pageSize = params.pageSize;
    this.auditStatus = params.auditStatus;
    this.searchConditionMap = params.searchConditionMap;
    this.pageNum = params.pageNum;
  }

  leadsId?: string;
  agreementTemplateCode?: string;
  crsId?: string;
  indexTemplateCode?: string;
  pageSize?: number;
  auditStatus?: Array<string>;
  searchConditionMap?: {[name: string]: Object};
  pageNum?: number;

  __fields2java(): any {
    let searchConditionMapMapTransfer = new Map();
    for (let mapKey in this.searchConditionMap) {
      searchConditionMapMapTransfer.set(
        java.String(mapKey),
        this.searchConditionMap[mapKey] &&
          this.searchConditionMap[mapKey]['__fields2java']
          ? this.searchConditionMap[mapKey]['__fields2java']()
          : this.searchConditionMap[mapKey],
      );
    }
    return {
      $class: 'top.rdfa.biz.agreement.client.request.ClientBaseQueryRequest',
      $: {
        leadsId: java.String(this.leadsId),
        agreementTemplateCode: java.String(this.agreementTemplateCode),
        crsId: java.String(this.crsId),
        indexTemplateCode: java.String(this.indexTemplateCode),
        pageSize: java.Integer(this.pageSize),
        auditStatus: this.auditStatus
          ? java.List(
              (this.auditStatus || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        searchConditionMap: java.Map(searchConditionMapMapTransfer),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
