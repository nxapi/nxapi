import java from 'js-to-java';

export interface IHotelBizVO {
  nightAuditTime?: any;
  bizDate?: any;
  id?: number;
}

export class HotelBizVO {
  constructor(params: IHotelBizVO) {
    this.nightAuditTime = params.nightAuditTime;
    this.bizDate = params.bizDate;
    this.id = params.id;
  }

  nightAuditTime?: any;
  bizDate?: any;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelBizVO',
      $: {
        nightAuditTime: this.nightAuditTime,
        bizDate: this.bizDate,
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
