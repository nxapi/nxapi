import java from 'js-to-java';

export interface IInventoryQueryDTO {
  date?: Date;
  inventoryNum?: number;
  price?: {value: string};
  rateCodeId?: number;
  hotelId?: number;
  saleNum?: number;
  roomTypeId?: number;
  channelId?: number;
}

export class InventoryQueryDTO {
  constructor(params: IInventoryQueryDTO) {
    this.date = params.date;
    this.inventoryNum = params.inventoryNum;
    this.price = params.price;
    this.rateCodeId = params.rateCodeId;
    this.hotelId = params.hotelId;
    this.saleNum = params.saleNum;
    this.roomTypeId = params.roomTypeId;
    this.channelId = params.channelId;
  }

  date?: Date;
  inventoryNum?: number;
  price?: {value: string};
  rateCodeId?: number;
  hotelId?: number;
  saleNum?: number;
  roomTypeId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.InventoryQueryDTO',
      $: {
        date: this.date,
        inventoryNum: java.Integer(this.inventoryNum),
        price: this.price ? java.BigDecimal(this.price.value) : null,
        rateCodeId: java.Long(this.rateCodeId),
        hotelId: java.Long(this.hotelId),
        saleNum: java.Integer(this.saleNum),
        roomTypeId: java.Long(this.roomTypeId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
