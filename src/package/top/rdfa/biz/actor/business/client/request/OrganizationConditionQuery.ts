import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IOrganizationConditionQuery {
  queryAction?: string;
  organizationCodes?: Array<string>;
  merchantCode?: string;
  languageType?: LanguageType;
  dictKeys?: Array<string>;
  corporationCode?: string;
  organizationCode?: string;
  dictGroup?: string;
  pageSize?: number;
  appKey?: string;
  parentOrganizationCode?: string;
  pageNum?: number;
}

export class OrganizationConditionQuery {
  constructor(params: IOrganizationConditionQuery) {
    this.queryAction = params.queryAction;
    this.organizationCodes = params.organizationCodes;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.dictKeys = params.dictKeys;
    this.corporationCode = params.corporationCode;
    this.organizationCode = params.organizationCode;
    this.dictGroup = params.dictGroup;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.parentOrganizationCode = params.parentOrganizationCode;
    this.pageNum = params.pageNum;
  }

  queryAction?: string;
  organizationCodes?: Array<string>;
  merchantCode?: string;
  languageType?: LanguageType;
  dictKeys?: Array<string>;
  corporationCode?: string;
  organizationCode?: string;
  dictGroup?: string;
  pageSize?: number;
  appKey?: string;
  parentOrganizationCode?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.OrganizationConditionQuery',
      $: {
        queryAction: java.String(this.queryAction),
        organizationCodes: this.organizationCodes
          ? java.List(
              (this.organizationCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        dictKeys: this.dictKeys
          ? java.List(
              (this.dictKeys || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        corporationCode: java.String(this.corporationCode),
        organizationCode: java.String(this.organizationCode),
        dictGroup: java.String(this.dictGroup),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        parentOrganizationCode: java.String(this.parentOrganizationCode),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
