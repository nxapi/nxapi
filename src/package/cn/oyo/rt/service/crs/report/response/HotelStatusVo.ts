import java from 'js-to-java';

export interface IHotelStatusVo {
  createTime?: Date;
  status?: number;
}

export class HotelStatusVo {
  constructor(params: IHotelStatusVo) {
    this.createTime = params.createTime;
    this.status = params.status;
  }

  createTime?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.HotelStatusVo',
      $: {createTime: this.createTime, status: java.Integer(this.status)},
    };
  }
}

//generate by interpret-cli dubbo2.js
