import java from 'js-to-java';

export interface IPlaceContractDto {
  leadsId?: string;
  code?: string;
  crsId?: string;
  agreementId?: number;
  subTemplateCode?: string;
  version?: string;
}

export class PlaceContractDto {
  constructor(params: IPlaceContractDto) {
    this.leadsId = params.leadsId;
    this.code = params.code;
    this.crsId = params.crsId;
    this.agreementId = params.agreementId;
    this.subTemplateCode = params.subTemplateCode;
    this.version = params.version;
  }

  leadsId?: string;
  code?: string;
  crsId?: string;
  agreementId?: number;
  subTemplateCode?: string;
  version?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceContractDto',
      $: {
        leadsId: java.String(this.leadsId),
        code: java.String(this.code),
        crsId: java.String(this.crsId),
        agreementId: java.Long(this.agreementId),
        subTemplateCode: java.String(this.subTemplateCode),
        version: java.String(this.version),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
