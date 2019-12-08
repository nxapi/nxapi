import java from 'js-to-java';

export interface IOtaVo {
  BookingSn?: string;
  ExtBookingSn?: string;
  source?: number;
  status?: number;
}

export class OtaVo {
  constructor(params: IOtaVo) {
    this.BookingSn = params.BookingSn;
    this.ExtBookingSn = params.ExtBookingSn;
    this.source = params.source;
    this.status = params.status;
  }

  BookingSn?: string;
  ExtBookingSn?: string;
  source?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.response.OtaVo',
      $: {
        BookingSn: java.String(this.BookingSn),
        ExtBookingSn: java.String(this.ExtBookingSn),
        source: java.Integer(this.source),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
