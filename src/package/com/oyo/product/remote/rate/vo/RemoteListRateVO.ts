import java from 'js-to-java';

export interface IRemoteListRateVO {
  rate?: number;
  rateDate?: string;
  hotelId?: number;
  roomTypeId?: number;
}

export class RemoteListRateVO {
  constructor(params: IRemoteListRateVO) {
    this.rate = params.rate;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
  }

  rate?: number;
  rateDate?: string;
  hotelId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.remote.rate.vo.RemoteListRateVO',
      $: {
        rate: java.Double(this.rate),
        rateDate: java.String(this.rateDate),
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
