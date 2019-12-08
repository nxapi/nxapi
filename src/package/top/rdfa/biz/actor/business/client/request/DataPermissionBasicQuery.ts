import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IDataPermissionBasicQuery {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dataCodes?: Array<string>;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  parentDataCode?: string;
  dataCode?: string;
  parentDataType?: string;
  pageNum?: number;
}

export class DataPermissionBasicQuery {
  constructor(params: IDataPermissionBasicQuery) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.dataCodes = params.dataCodes;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.parentDataCode = params.parentDataCode;
    this.dataCode = params.dataCode;
    this.parentDataType = params.parentDataType;
    this.pageNum = params.pageNum;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dataCodes?: Array<string>;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  parentDataCode?: string;
  dataCode?: string;
  parentDataType?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.DataPermissionBasicQuery',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        dataCodes: this.dataCodes
          ? java.List(
              (this.dataCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        parentDataCode: java.String(this.parentDataCode),
        dataCode: java.String(this.dataCode),
        parentDataType: java.String(this.parentDataType),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
