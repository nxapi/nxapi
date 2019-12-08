import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountDataPermissionConditionQuery {
  resoureCodes?: Array<string>;
  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  fuCode?: string;
  resoureCode?: string;
  dataType?: string;
  pageSize?: number;
  roleCodes?: Array<string>;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  accountId?: number;
  accountIds?: Array<number>;
  roleCode?: string;
  appKey?: string;
  dataGroupCode?: string;
}

export class AccountDataPermissionConditionQuery {
  constructor(params: IAccountDataPermissionConditionQuery) {
    this.resoureCodes = params.resoureCodes;
    this.merchantCode = params.merchantCode;
    this.positionCodes = params.positionCodes;
    this.languageType = params.languageType;
    this.fuCode = params.fuCode;
    this.resoureCode = params.resoureCode;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.roleCodes = params.roleCodes;
    this.pageNum = params.pageNum;
    this.positionAliases = params.positionAliases;
    this.queryAction = params.queryAction;
    this.accountId = params.accountId;
    this.accountIds = params.accountIds;
    this.roleCode = params.roleCode;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
  }

  resoureCodes?: Array<string>;
  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  fuCode?: string;
  resoureCode?: string;
  dataType?: string;
  pageSize?: number;
  roleCodes?: Array<string>;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  accountId?: number;
  accountIds?: Array<number>;
  roleCode?: string;
  appKey?: string;
  dataGroupCode?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountDataPermissionConditionQuery',
      $: {
        resoureCodes: this.resoureCodes
          ? java.List(
              (this.resoureCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        merchantCode: java.String(this.merchantCode),
        positionCodes: this.positionCodes
          ? java.List(
              (this.positionCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        fuCode: java.String(this.fuCode),
        resoureCode: java.String(this.resoureCode),
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        roleCodes: this.roleCodes
          ? java.List(
              (this.roleCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
        positionAliases: this.positionAliases
          ? java.List(
              (this.positionAliases || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        queryAction: java.String(this.queryAction),
        accountId: java.Long(this.accountId),
        accountIds: this.accountIds
          ? java.List(
              (this.accountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        roleCode: java.String(this.roleCode),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
