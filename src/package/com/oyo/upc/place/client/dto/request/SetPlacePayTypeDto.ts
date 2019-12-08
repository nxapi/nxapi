import java from 'js-to-java';

export interface ISetPlacePayTypeDto {
  payType?: Array<number>;
  placeId?: number;
  status?: number;
}

export class SetPlacePayTypeDto {
  constructor(params: ISetPlacePayTypeDto) {
    this.payType = params.payType;
    this.placeId = params.placeId;
    this.status = params.status;
  }

  payType?: Array<number>;
  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SetPlacePayTypeDto',
      $: {
        payType: this.payType
          ? java.List(
              (this.payType || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        placeId: java.Long(this.placeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
