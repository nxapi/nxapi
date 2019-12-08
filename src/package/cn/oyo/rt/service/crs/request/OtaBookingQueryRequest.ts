import java from 'js-to-java';

export interface IOtaBookingQueryRequest {
  extBookingSns?: Array<string>;
  source?: number;
}

export class OtaBookingQueryRequest {
  constructor(params: IOtaBookingQueryRequest) {
    this.extBookingSns = params.extBookingSns;
    this.source = params.source;
  }

  extBookingSns?: Array<string>;
  source?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.request.OtaBookingQueryRequest',
      $: {
        extBookingSns: this.extBookingSns
          ? java.List(
              (this.extBookingSns || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        source: java.Integer(this.source),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
