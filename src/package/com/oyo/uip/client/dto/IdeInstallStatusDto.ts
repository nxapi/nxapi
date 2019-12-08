import java from 'js-to-java';

export interface IIdeInstallStatusDto {
  dismantleDate?: Date;
  installType?: string;
  hotelId?: number;
  auditType?: string;
  ideType?: string;
}

export class IdeInstallStatusDto {
  constructor(params: IIdeInstallStatusDto) {
    this.dismantleDate = params.dismantleDate;
    this.installType = params.installType;
    this.hotelId = params.hotelId;
    this.auditType = params.auditType;
    this.ideType = params.ideType;
  }

  dismantleDate?: Date;
  installType?: string;
  hotelId?: number;
  auditType?: string;
  ideType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.IdeInstallStatusDto',
      $: {
        dismantleDate: this.dismantleDate,
        installType: java.String(this.installType),
        hotelId: java.Long(this.hotelId),
        auditType: java.String(this.auditType),
        ideType: java.String(this.ideType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
