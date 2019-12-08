import { RoomTypeRateCodeRefDTO } from './RoomTypeRateCodeRefDTO';
import java from 'js-to-java';

export interface IDateInventoryDTO {
  date?: Date;
  roomTypeInventory?: Array<RoomTypeRateCodeRefDTO>;
}

export class DateInventoryDTO {
  constructor(params: IDateInventoryDTO) {
    this.date = params.date;
    this.roomTypeInventory = params.roomTypeInventory;
  }

  date?: Date;
  roomTypeInventory?: Array<RoomTypeRateCodeRefDTO>;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.DateInventoryDTO',
      $: {
        date: this.date,
        roomTypeInventory: this.roomTypeInventory
          ? java.List(
              (this.roomTypeInventory || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
