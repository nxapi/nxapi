import { RoomTypeBindSellTypeRequest } from './RoomTypeBindSellTypeRequest';
import java from 'js-to-java';

export interface IRoomTypeBindSellTypeListRequest {
  bindInfoList?: Array<RoomTypeBindSellTypeRequest>;
  hotelId?: number;
  operator?: string;
}

export class RoomTypeBindSellTypeListRequest {
  constructor(params: IRoomTypeBindSellTypeListRequest) {
    this.bindInfoList = params.bindInfoList;
    this.hotelId = params.hotelId;
    this.operator = params.operator;
  }

  bindInfoList?: Array<RoomTypeBindSellTypeRequest>;
  hotelId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeBindSellTypeListRequest',
      $: {
        bindInfoList: this.bindInfoList
          ? java.List(
              (this.bindInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
