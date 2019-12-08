import java from 'js-to-java';

export interface IProfileDto {
  isExternal?: number;
  corporationId?: number;
  allocateTime?: number;
  wdCode?: string;
  hotelRela?: number;
  available?: boolean;
  isSendEmail?: number;
  isAutoSuperior?: number;
  valid?: boolean;
  name?: string;
  id?: number;
  describe?: string;
  name2?: string;
  operatorId?: number;
}

export class ProfileDto {
  constructor(params: IProfileDto) {
    this.isExternal = params.isExternal;
    this.corporationId = params.corporationId;
    this.allocateTime = params.allocateTime;
    this.wdCode = params.wdCode;
    this.hotelRela = params.hotelRela;
    this.available = params.available;
    this.isSendEmail = params.isSendEmail;
    this.isAutoSuperior = params.isAutoSuperior;
    this.valid = params.valid;
    this.name = params.name;
    this.id = params.id;
    this.describe = params.describe;
    this.name2 = params.name2;
    this.operatorId = params.operatorId;
  }

  isExternal?: number;
  corporationId?: number;
  allocateTime?: number;
  wdCode?: string;
  hotelRela?: number;
  available?: boolean;
  isSendEmail?: number;
  isAutoSuperior?: number;
  valid?: boolean;
  name?: string;
  id?: number;
  describe?: string;
  name2?: string;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.dto.infrastructure.ProfileDto',
      $: {
        isExternal: java.Integer(this.isExternal),
        corporationId: java.Long(this.corporationId),
        allocateTime: java.Integer(this.allocateTime),
        wdCode: java.String(this.wdCode),
        hotelRela: java.Integer(this.hotelRela),
        available: java.Boolean(this.available),
        isSendEmail: java.Integer(this.isSendEmail),
        isAutoSuperior: java.Integer(this.isAutoSuperior),
        valid: java.Boolean(this.valid),
        name: java.String(this.name),
        id: java.Long(this.id),
        describe: java.String(this.describe),
        name2: java.String(this.name2),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
