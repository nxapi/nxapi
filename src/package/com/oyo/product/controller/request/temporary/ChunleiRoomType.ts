import java from 'js-to-java';

export interface IChunleiRoomType {
  excludeRateCodes?: Array<number>;
  roomTypeId?: number;
}

export class ChunleiRoomType {
  constructor(params: IChunleiRoomType) {
    this.excludeRateCodes = params.excludeRateCodes;
    this.roomTypeId = params.roomTypeId;
  }

  excludeRateCodes?: Array<number>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.temporary.ChunleiRoomType',
      $: {
        excludeRateCodes: this.excludeRateCodes
          ? java.List(
              (this.excludeRateCodes || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
