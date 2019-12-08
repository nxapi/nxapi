import { ChunleiRoomType } from './ChunleiRoomType';
import java from 'js-to-java';

export interface ISupportChunleiActivityReq {
  hotelId?: number;
  roomTypeId?: Array<ChunleiRoomType>;
}

export class SupportChunleiActivityReq {
  constructor(params: ISupportChunleiActivityReq) {
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
  }

  hotelId?: number;
  roomTypeId?: Array<ChunleiRoomType>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.temporary.SupportChunleiActivityReq',
      $: {
        hotelId: java.Long(this.hotelId),
        roomTypeId: this.roomTypeId
          ? java.List(
              (this.roomTypeId || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
