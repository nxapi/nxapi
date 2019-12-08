import { RoomTypeSimpleBO } from './../../../bean/bo/roomtype/RoomTypeSimpleBO';
import { SaleRoomTypeBO } from './../../../bean/bo/roomtype/SaleRoomTypeBO';
import java from 'js-to-java';

export interface IRoomTypeAndRelationVO {
  roomTypeList?: Array<RoomTypeSimpleBO>;
  saleRoomTypeList?: Array<SaleRoomTypeBO>;
}

export class RoomTypeAndRelationVO {
  constructor(params: IRoomTypeAndRelationVO) {
    this.roomTypeList = params.roomTypeList;
    this.saleRoomTypeList = params.saleRoomTypeList;
  }

  roomTypeList?: Array<RoomTypeSimpleBO>;
  saleRoomTypeList?: Array<SaleRoomTypeBO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.RoomTypeAndRelationVO',
      $: {
        roomTypeList: this.roomTypeList
          ? java.List(
              (this.roomTypeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        saleRoomTypeList: this.saleRoomTypeList
          ? java.List(
              (this.saleRoomTypeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
