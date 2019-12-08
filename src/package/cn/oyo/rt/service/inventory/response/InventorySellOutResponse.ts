import { DateInventoryDTO } from './../dto/DateInventoryDTO';
import java from 'js-to-java';

export interface IInventorySellOutResponse {
  dateInventory?: Array<DateInventoryDTO>;
  hotelId?: number;
}

export class InventorySellOutResponse {
  constructor(params: IInventorySellOutResponse) {
    this.dateInventory = params.dateInventory;
    this.hotelId = params.hotelId;
  }

  dateInventory?: Array<DateInventoryDTO>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.response.InventorySellOutResponse',
      $: {
        dateInventory: this.dateInventory
          ? java.List(
              (this.dateInventory || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
