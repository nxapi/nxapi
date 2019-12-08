import { InventoryQueryDTO } from './../dto/InventoryQueryDTO';
import java from 'js-to-java';

export interface IInventoryQueryRequestV2 {
  checkin?: Date;
  hotelIds?: Array<number>;
  inventoryQueryDtos?: Array<InventoryQueryDTO>;
  checkout?: Date;
  channelId?: number;
}

export class InventoryQueryRequestV2 {
  constructor(params: IInventoryQueryRequestV2) {
    this.checkin = params.checkin;
    this.hotelIds = params.hotelIds;
    this.inventoryQueryDtos = params.inventoryQueryDtos;
    this.checkout = params.checkout;
    this.channelId = params.channelId;
  }

  checkin?: Date;
  hotelIds?: Array<number>;
  inventoryQueryDtos?: Array<InventoryQueryDTO>;
  checkout?: Date;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.request.InventoryQueryRequestV2',
      $: {
        checkin: this.checkin,
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        inventoryQueryDtos: this.inventoryQueryDtos
          ? java.List(
              (this.inventoryQueryDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        checkout: this.checkout,
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
