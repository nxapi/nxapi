import { IdentityDto } from './IdentityDto';
import { DeptDetailDto } from './DeptDetailDto';
import { RegionDto } from './RegionDto';
import java from 'js-to-java';

export interface IEmployeeDto {
  gender?: number;
  corporationId?: number;
  positionAlias?: string;
  corporationName?: string;
  departmentCode?: string;
  departmentId?: string;
  positionCode?: string;
  superUserId?: number;
  employeeNo?: string;
  type?: number;
  superPositionCode?: string;
  cardNo?: string;
  superPositionName?: string;
  positionName?: string;
  dingUserId?: string;
  bank?: string;
  identities?: Array<IdentityDto>;
  accountIds?: Array<number>;
  employeePhone?: number;
  departmentName?: string;
  superEmployeeName?: string;
  merchantCode?: string;
  deptDetails?: Array<DeptDetailDto>;
  corporationCode?: string;
  employeeEmail?: string;
  employeeId?: number;
  userId?: number;
  superEmployeeNo?: string;
  name?: string;
  region?: RegionDto;
  atPost?: boolean;
}

export class EmployeeDto {
  constructor(params: IEmployeeDto) {
    this.gender = params.gender;
    this.corporationId = params.corporationId;
    this.positionAlias = params.positionAlias;
    this.corporationName = params.corporationName;
    this.departmentCode = params.departmentCode;
    this.departmentId = params.departmentId;
    this.positionCode = params.positionCode;
    this.superUserId = params.superUserId;
    this.employeeNo = params.employeeNo;
    this.type = params.type;
    this.superPositionCode = params.superPositionCode;
    this.cardNo = params.cardNo;
    this.superPositionName = params.superPositionName;
    this.positionName = params.positionName;
    this.dingUserId = params.dingUserId;
    this.bank = params.bank;
    this.identities = params.identities;
    this.accountIds = params.accountIds;
    this.employeePhone = params.employeePhone;
    this.departmentName = params.departmentName;
    this.superEmployeeName = params.superEmployeeName;
    this.merchantCode = params.merchantCode;
    this.deptDetails = params.deptDetails;
    this.corporationCode = params.corporationCode;
    this.employeeEmail = params.employeeEmail;
    this.employeeId = params.employeeId;
    this.userId = params.userId;
    this.superEmployeeNo = params.superEmployeeNo;
    this.name = params.name;
    this.region = params.region;
    this.atPost = params.atPost;
  }

  gender?: number;
  corporationId?: number;
  positionAlias?: string;
  corporationName?: string;
  departmentCode?: string;
  departmentId?: string;
  positionCode?: string;
  superUserId?: number;
  employeeNo?: string;
  type?: number;
  superPositionCode?: string;
  cardNo?: string;
  superPositionName?: string;
  positionName?: string;
  dingUserId?: string;
  bank?: string;
  identities?: Array<IdentityDto>;
  accountIds?: Array<number>;
  employeePhone?: number;
  departmentName?: string;
  superEmployeeName?: string;
  merchantCode?: string;
  deptDetails?: Array<DeptDetailDto>;
  corporationCode?: string;
  employeeEmail?: string;
  employeeId?: number;
  userId?: number;
  superEmployeeNo?: string;
  name?: string;
  region?: RegionDto;
  atPost?: boolean;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.EmployeeDto',
      $: {
        gender: java.Integer(this.gender),
        corporationId: java.Long(this.corporationId),
        positionAlias: java.String(this.positionAlias),
        corporationName: java.String(this.corporationName),
        departmentCode: java.String(this.departmentCode),
        departmentId: java.String(this.departmentId),
        positionCode: java.String(this.positionCode),
        superUserId: java.Long(this.superUserId),
        employeeNo: java.String(this.employeeNo),
        type: java.Integer(this.type),
        superPositionCode: java.String(this.superPositionCode),
        cardNo: java.String(this.cardNo),
        superPositionName: java.String(this.superPositionName),
        positionName: java.String(this.positionName),
        dingUserId: java.String(this.dingUserId),
        bank: java.String(this.bank),
        identities: this.identities
          ? java.List(
              (this.identities || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
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
        employeePhone: java.Long(this.employeePhone),
        departmentName: java.String(this.departmentName),
        superEmployeeName: java.String(this.superEmployeeName),
        merchantCode: java.String(this.merchantCode),
        deptDetails: this.deptDetails
          ? java.List(
              (this.deptDetails || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        corporationCode: java.String(this.corporationCode),
        employeeEmail: java.String(this.employeeEmail),
        employeeId: java.Long(this.employeeId),
        userId: java.Long(this.userId),
        superEmployeeNo: java.String(this.superEmployeeNo),
        name: java.String(this.name),
        region: this.region ? this.region.__fields2java() : null,
        atPost: java.Boolean(this.atPost),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
