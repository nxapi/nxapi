import java from 'js-to-java';

export interface IHotelBizDateUpdateRequest {
  nightAuditTime?: string;
  bizDate?: string;
  id?: number;
}

export class HotelBizDateUpdateRequest {
  constructor(params: IHotelBizDateUpdateRequest) {
    this.nightAuditTime = params.nightAuditTime;
    this.bizDate = params.bizDate;
    this.id = params.id;
  }

  nightAuditTime?: string;
  bizDate?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelBizDateUpdateRequest',
      $: {
        nightAuditTime: java.String(this.nightAuditTime),
        bizDate: java.String(this.bizDate),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
