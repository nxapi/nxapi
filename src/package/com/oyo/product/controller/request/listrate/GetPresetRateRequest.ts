import java from 'js-to-java';

export interface IGetPresetRateRequest {
  roomTypeIdList?: Array<number>;
  hotelId?: number;
}

export class GetPresetRateRequest {
  constructor(params: IGetPresetRateRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.hotelId = params.hotelId;
  }

  roomTypeIdList?: Array<number>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetPresetRateRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
