import java from 'js-to-java';

export interface IRoomTypeBedInfoDeleteRequest {
  bedInfoIdType?: number;
  bedInfoId?: number;
  operator?: string;
}

export class RoomTypeBedInfoDeleteRequest {
  constructor(params: IRoomTypeBedInfoDeleteRequest) {
    this.bedInfoIdType = params.bedInfoIdType;
    this.bedInfoId = params.bedInfoId;
    this.operator = params.operator;
  }

  bedInfoIdType?: number;
  bedInfoId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeBedInfoDeleteRequest',
      $: {
        bedInfoIdType: java.Integer(this.bedInfoIdType),
        bedInfoId: java.Long(this.bedInfoId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
