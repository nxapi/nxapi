import java from 'js-to-java';

export interface IBannerStatusUpdateRequest {
  location?: string;
  id?: string;
  status?: number;
}

export class BannerStatusUpdateRequest {
  constructor(params: IBannerStatusUpdateRequest) {
    this.location = params.location;
    this.id = params.id;
    this.status = params.status;
  }

  location?: string;
  id?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.BannerStatusUpdateRequest',
      $: {
        location: java.String(this.location),
        id: java.String(this.id),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
