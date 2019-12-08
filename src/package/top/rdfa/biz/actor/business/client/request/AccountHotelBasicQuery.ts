import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountHotelBasicQuery {
  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  accountName?: string;
  dataType?: string;
  pageSize?: number;
  searchKey?: string;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  dataCodes?: Array<string>;
  accountIds?: Array<number>;
  appKey?: string;
  dataGroupCode?: string;
}

export class AccountHotelBasicQuery {
  constructor(params: IAccountHotelBasicQuery) {
    this.merchantCode = params.merchantCode;
    this.positionCodes = params.positionCodes;
    this.languageType = params.languageType;
    this.accountName = params.accountName;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.searchKey = params.searchKey;
    this.pageNum = params.pageNum;
    this.positionAliases = params.positionAliases;
    this.queryAction = params.queryAction;
    this.dataCodes = params.dataCodes;
    this.accountIds = params.accountIds;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
  }

  merchantCode?: string;
  positionCodes?: Array<string>;
  languageType?: LanguageType;
  accountName?: string;
  dataType?: string;
  pageSize?: number;
  searchKey?: string;
  pageNum?: number;
  positionAliases?: Array<string>;
  queryAction?: string;
  dataCodes?: Array<string>;
  accountIds?: Array<number>;
  appKey?: string;
  dataGroupCode?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountHotelBasicQuery',
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
        accountName: java.String(this.accountName),
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        searchKey: java.String(this.searchKey),
        pageNum: java.Integer(this.pageNum),
        positionAliases: this.positionAliases
          ? java.List(
              (this.positionAliases || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        queryAction: java.String(this.queryAction),
        dataCodes: this.dataCodes
          ? java.List(
              (this.dataCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        accountIds: this.accountIds
          ? java.List(
              (this.accountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
