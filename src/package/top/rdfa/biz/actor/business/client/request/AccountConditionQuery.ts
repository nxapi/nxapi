import { LanguageType } from './../enums/LanguageType';
import { AccountConditionQuery$AccountCondition } from './AccountConditionQuery$AccountCondition';
import java from 'js-to-java';

export interface IAccountConditionQuery {
  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  fuCode?: string;
  roleId?: number;
  dataType?: string;
  pageSize?: number;
  positionCode?: string;
  roleCodes?: Array<string>;
  searchKey?: string;
  dataCode?: string;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  accountId?: number;
  dataCodes?: Array<string>;
  roleCode?: string;
  appKey?: string;
  dataGroupCode?: string;
  accountConditions?: Array<AccountConditionQuery$AccountCondition>;
}

export class AccountConditionQuery {
  constructor(params: IAccountConditionQuery) {
    this.merchantCode = params.merchantCode;
    this.positionCodes = params.positionCodes;
    this.languageType = params.languageType;
    this.fuCode = params.fuCode;
    this.roleId = params.roleId;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.positionCode = params.positionCode;
    this.roleCodes = params.roleCodes;
    this.searchKey = params.searchKey;
    this.dataCode = params.dataCode;
    this.pageNum = params.pageNum;
    this.positionAliases = params.positionAliases;
    this.queryAction = params.queryAction;
    this.accountId = params.accountId;
    this.dataCodes = params.dataCodes;
    this.roleCode = params.roleCode;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.accountConditions = params.accountConditions;
  }

  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  fuCode?: string;
  roleId?: number;
  dataType?: string;
  pageSize?: number;
  positionCode?: string;
  roleCodes?: Array<string>;
  searchKey?: string;
  dataCode?: string;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  accountId?: number;
  dataCodes?: Array<string>;
  roleCode?: string;
  appKey?: string;
  dataGroupCode?: string;
  accountConditions?: Array<AccountConditionQuery$AccountCondition>;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountConditionQuery',
      $: {
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
        roleId: java.Long(this.roleId),
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        positionCode: java.String(this.positionCode),
        roleCodes: this.roleCodes
          ? java.List(
              (this.roleCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        searchKey: java.String(this.searchKey),
        dataCode: java.String(this.dataCode),
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
        dataCodes: this.dataCodes
          ? java.List(
              (this.dataCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        roleCode: java.String(this.roleCode),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        accountConditions: this.accountConditions
          ? java.List(
              (this.accountConditions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
