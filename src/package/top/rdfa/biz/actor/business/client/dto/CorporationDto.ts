import { RmDictionaryDTO } from './RmDictionaryDTO';
import java from 'js-to-java';

export interface ICorporationDto {
  valid?: boolean;
  typeStr?: string;
  rmDictionaryDTOs?: Array<RmDictionaryDTO>;
  merchantCode?: string;
  code?: string;
  editOrganization?: boolean;
  name?: string;
  available?: boolean;
  type?: number;
  operatorId?: number;
}

export class CorporationDto {
  constructor(params: ICorporationDto) {
    this.valid = params.valid;
    this.typeStr = params.typeStr;
    this.rmDictionaryDTOs = params.rmDictionaryDTOs;
    this.merchantCode = params.merchantCode;
    this.code = params.code;
    this.editOrganization = params.editOrganization;
    this.name = params.name;
    this.available = params.available;
    this.type = params.type;
    this.operatorId = params.operatorId;
  }

  valid?: boolean;
  typeStr?: string;
  rmDictionaryDTOs?: Array<RmDictionaryDTO>;
  merchantCode?: string;
  code?: string;
  editOrganization?: boolean;
  name?: string;
  available?: boolean;
  type?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.CorporationDto',
      $: {
        valid: java.Boolean(this.valid),
        typeStr: java.String(this.typeStr),
        rmDictionaryDTOs: this.rmDictionaryDTOs
          ? java.List(
              (this.rmDictionaryDTOs || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        merchantCode: java.String(this.merchantCode),
        code: java.String(this.code),
        editOrganization: java.Boolean(this.editOrganization),
        name: java.String(this.name),
        available: java.Boolean(this.available),
        type: java.Integer(this.type),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
