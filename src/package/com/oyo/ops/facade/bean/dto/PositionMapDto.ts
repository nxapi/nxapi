import java from 'js-to-java';

export interface IPositionMapDto {
  positionName?: string;
  musePositionCode?: string;
  roleId?: number;
  roleName?: string;
  positionCode?: string;
  museProfessionId?: string;
  appPositionCode?: string;
}

export class PositionMapDto {
  constructor(params: IPositionMapDto) {
    this.positionName = params.positionName;
    this.musePositionCode = params.musePositionCode;
    this.roleId = params.roleId;
    this.roleName = params.roleName;
    this.positionCode = params.positionCode;
    this.museProfessionId = params.museProfessionId;
    this.appPositionCode = params.appPositionCode;
  }

  positionName?: string;
  musePositionCode?: string;
  roleId?: number;
  roleName?: string;
  positionCode?: string;
  museProfessionId?: string;
  appPositionCode?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.dto.PositionMapDto',
      $: {
        positionName: java.String(this.positionName),
        musePositionCode: java.String(this.musePositionCode),
        roleId: java.Long(this.roleId),
        roleName: java.String(this.roleName),
        positionCode: java.String(this.positionCode),
        museProfessionId: java.String(this.museProfessionId),
        appPositionCode: java.String(this.appPositionCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
