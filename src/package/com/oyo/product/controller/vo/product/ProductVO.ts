import { RoomTypeVO } from './../roomtype/RoomTypeVO';
import java from 'js-to-java';

export interface IProductVO {
  rate?: string;
  cancelType?: number;
  rateCodeId?: number;
  hotelId?: number;
  inventory?: number;
  listRate?: string;
  rateCodeName?: string;
  channelId?: number;
  roomType?: RoomTypeVO;
}

export class ProductVO {
  constructor(params: IProductVO) {
    this.rate = params.rate;
    this.cancelType = params.cancelType;
    this.rateCodeId = params.rateCodeId;
    this.hotelId = params.hotelId;
    this.inventory = params.inventory;
    this.listRate = params.listRate;
    this.rateCodeName = params.rateCodeName;
    this.channelId = params.channelId;
    this.roomType = params.roomType;
  }

  rate?: string;
  cancelType?: number;
  rateCodeId?: number;
  hotelId?: number;
  inventory?: number;
  listRate?: string;
  rateCodeName?: string;
  channelId?: number;
  roomType?: RoomTypeVO;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.product.ProductVO',
      $: {
        rate: java.String(this.rate),
        cancelType: java.Integer(this.cancelType),
        rateCodeId: java.Long(this.rateCodeId),
        hotelId: java.Long(this.hotelId),
        inventory: java.Integer(this.inventory),
        listRate: java.String(this.listRate),
        rateCodeName: java.String(this.rateCodeName),
        channelId: java.Long(this.channelId),
        roomType: this.roomType ? this.roomType.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
