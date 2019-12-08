import { RoomTypeInventoryDTO } from './RoomTypeInventoryDTO';
import java from 'js-to-java';

export interface IHotelInventoryDTO {
  blockCount?: number;
  roomTypeInventoryList?: Array<RoomTypeInventoryDTO>;
  availabeCount?: number;
  hotelId?: number;
  totalCount?: number;
  stayDate?: string;
}

export class HotelInventoryDTO {
  constructor(params: IHotelInventoryDTO) {
    this.blockCount = params.blockCount;
    this.roomTypeInventoryList = params.roomTypeInventoryList;
    this.availabeCount = params.availabeCount;
    this.hotelId = params.hotelId;
    this.totalCount = params.totalCount;
    this.stayDate = params.stayDate;
  }

  blockCount?: number;
  roomTypeInventoryList?: Array<RoomTypeInventoryDTO>;
  availabeCount?: number;
  hotelId?: number;
  totalCount?: number;
  stayDate?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.HotelInventoryDTO',
      $: {
        blockCount: java.Integer(this.blockCount),
        roomTypeInventoryList: this.roomTypeInventoryList
          ? java.List(
              (this.roomTypeInventoryList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        availabeCount: java.Integer(this.availabeCount),
        hotelId: java.Long(this.hotelId),
        totalCount: java.Integer(this.totalCount),
        stayDate: java.String(this.stayDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
