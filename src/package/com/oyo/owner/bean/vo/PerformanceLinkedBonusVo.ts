import java from 'js-to-java';

export interface IPerformanceLinkedBonusVo {
  accountId?: number;
  plbType?: string;
  unsubscribeTime?: Date;
  plbCode?: string;
  expireDate?: Date;
  id?: number;
  hotelId?: number;
  officialDate?: Date;
  effectiveDate?: Date;
  status?: number;
}

export class PerformanceLinkedBonusVo {
  constructor(params: IPerformanceLinkedBonusVo) {
    this.accountId = params.accountId;
    this.plbType = params.plbType;
    this.unsubscribeTime = params.unsubscribeTime;
    this.plbCode = params.plbCode;
    this.expireDate = params.expireDate;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.officialDate = params.officialDate;
    this.effectiveDate = params.effectiveDate;
    this.status = params.status;
  }

  accountId?: number;
  plbType?: string;
  unsubscribeTime?: Date;
  plbCode?: string;
  expireDate?: Date;
  id?: number;
  hotelId?: number;
  officialDate?: Date;
  effectiveDate?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.PerformanceLinkedBonusVo',
      $: {
        accountId: java.Long(this.accountId),
        plbType: java.String(this.plbType),
        unsubscribeTime: this.unsubscribeTime,
        plbCode: java.String(this.plbCode),
        expireDate: this.expireDate,
        id: java.Long(this.id),
        hotelId: java.Long(this.hotelId),
        officialDate: this.officialDate,
        effectiveDate: this.effectiveDate,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
