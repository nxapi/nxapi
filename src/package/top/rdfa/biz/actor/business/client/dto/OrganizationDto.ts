import { CorporationDto } from './CorporationDto';
import { MerchantDto } from './MerchantDto';
import { RmDictionaryDTO } from './RmDictionaryDTO';
import { EmployeeDto } from './EmployeeDto';
import java from 'js-to-java';

export interface IOrganizationDto {
  merchantCode?: string;
  organizationPath?: string;
  code?: string;
  corporationId?: number;
  corporationCode?: string;
  corporation?: CorporationDto;
  description?: string;
  merchant?: MerchantDto;
  type?: string;
  leaf?: boolean;
  rmDictionarys?: Array<RmDictionaryDTO>;
  subOrganizations?: Array<OrganizationDto>;
  parentId?: number;
  parentCode?: string;
  name?: string;
  id?: number;
  employees?: Array<EmployeeDto>;
  organizationManager?: EmployeeDto;
}

export class OrganizationDto {
  constructor(params: IOrganizationDto) {
    this.merchantCode = params.merchantCode;
    this.organizationPath = params.organizationPath;
    this.code = params.code;
    this.corporationId = params.corporationId;
    this.corporationCode = params.corporationCode;
    this.corporation = params.corporation;
    this.description = params.description;
    this.merchant = params.merchant;
    this.type = params.type;
    this.leaf = params.leaf;
    this.rmDictionarys = params.rmDictionarys;
    this.subOrganizations = params.subOrganizations;
    this.parentId = params.parentId;
    this.parentCode = params.parentCode;
    this.name = params.name;
    this.id = params.id;
    this.employees = params.employees;
    this.organizationManager = params.organizationManager;
  }

  merchantCode?: string;
  organizationPath?: string;
  code?: string;
  corporationId?: number;
  corporationCode?: string;
  corporation?: CorporationDto;
  description?: string;
  merchant?: MerchantDto;
  type?: string;
  leaf?: boolean;
  rmDictionarys?: Array<RmDictionaryDTO>;
  subOrganizations?: Array<OrganizationDto>;
  parentId?: number;
  parentCode?: string;
  name?: string;
  id?: number;
  employees?: Array<EmployeeDto>;
  organizationManager?: EmployeeDto;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.OrganizationDto',
      $: {
        merchantCode: java.String(this.merchantCode),
        organizationPath: java.String(this.organizationPath),
        code: java.String(this.code),
        corporationId: java.Long(this.corporationId),
        corporationCode: java.String(this.corporationCode),
        corporation: this.corporation ? this.corporation.__fields2java() : null,
        description: java.String(this.description),
        merchant: this.merchant ? this.merchant.__fields2java() : null,
        type: java.String(this.type),
        leaf: java.Boolean(this.leaf),
        rmDictionarys: this.rmDictionarys
          ? java.List(
              (this.rmDictionarys || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        subOrganizations: this.subOrganizations
          ? java.List(
              (this.subOrganizations || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        parentId: java.Long(this.parentId),
        parentCode: java.String(this.parentCode),
        name: java.String(this.name),
        id: java.Long(this.id),
        employees: this.employees
          ? java.List(
              (this.employees || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        organizationManager: this.organizationManager
          ? this.organizationManager.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
