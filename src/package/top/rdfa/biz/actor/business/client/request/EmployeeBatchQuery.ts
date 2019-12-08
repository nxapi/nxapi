import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IEmployeeBatchQuery {
  queryAction?: string;
  employeeIds?: Array<number>;
  merchantCode?: string;
  languageType?: LanguageType;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;
  employeeNos?: Array<string>;
}

export class EmployeeBatchQuery {
  constructor(params: IEmployeeBatchQuery) {
    this.queryAction = params.queryAction;
    this.employeeIds = params.employeeIds;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.pageNum = params.pageNum;
    this.employeeNos = params.employeeNos;
  }

  queryAction?: string;
  employeeIds?: Array<number>;
  merchantCode?: string;
  languageType?: LanguageType;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;
  employeeNos?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.EmployeeBatchQuery',
      $: {
        queryAction: java.String(this.queryAction),
        employeeIds: this.employeeIds
          ? java.List(
              (this.employeeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        pageNum: java.Integer(this.pageNum),
        employeeNos: this.employeeNos
          ? java.List(
              (this.employeeNos || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
