import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IEmployeeConditionQuery {
  employeePhone?: string;
  deptName?: string;
  employeeName?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  corporationCode?: string;
  available?: boolean;
  pageSize?: number;
  employeeEmail?: string;
  positionCode?: string;
  departmentIds?: Array<number>;
  employeeNo?: string;
  type?: number;
  pageNum?: number;
  dingUserId?: string;
  queryAction?: string;
  positionAliase?: string;
  appKey?: string;
  deptCode?: string;
}

export class EmployeeConditionQuery {
  constructor(params: IEmployeeConditionQuery) {
    this.employeePhone = params.employeePhone;
    this.deptName = params.deptName;
    this.employeeName = params.employeeName;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.corporationCode = params.corporationCode;
    this.available = params.available;
    this.pageSize = params.pageSize;
    this.employeeEmail = params.employeeEmail;
    this.positionCode = params.positionCode;
    this.departmentIds = params.departmentIds;
    this.employeeNo = params.employeeNo;
    this.type = params.type;
    this.pageNum = params.pageNum;
    this.dingUserId = params.dingUserId;
    this.queryAction = params.queryAction;
    this.positionAliase = params.positionAliase;
    this.appKey = params.appKey;
    this.deptCode = params.deptCode;
  }

  employeePhone?: string;
  deptName?: string;
  employeeName?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  corporationCode?: string;
  available?: boolean;
  pageSize?: number;
  employeeEmail?: string;
  positionCode?: string;
  departmentIds?: Array<number>;
  employeeNo?: string;
  type?: number;
  pageNum?: number;
  dingUserId?: string;
  queryAction?: string;
  positionAliase?: string;
  appKey?: string;
  deptCode?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.EmployeeConditionQuery',
      $: {
        employeePhone: java.String(this.employeePhone),
        deptName: java.String(this.deptName),
        employeeName: java.String(this.employeeName),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        corporationCode: java.String(this.corporationCode),
        available: java.Boolean(this.available),
        pageSize: java.Integer(this.pageSize),
        employeeEmail: java.String(this.employeeEmail),
        positionCode: java.String(this.positionCode),
        departmentIds: this.departmentIds
          ? java.List(
              (this.departmentIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        employeeNo: java.String(this.employeeNo),
        type: java.Integer(this.type),
        pageNum: java.Integer(this.pageNum),
        dingUserId: java.String(this.dingUserId),
        queryAction: java.String(this.queryAction),
        positionAliase: java.String(this.positionAliase),
        appKey: java.String(this.appKey),
        deptCode: java.String(this.deptCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
