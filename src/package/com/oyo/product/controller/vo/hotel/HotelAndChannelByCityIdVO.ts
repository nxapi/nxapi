import java from 'js-to-java';

export interface IHotelAndChannelByCityIdVO {
  brandType?: string;
  srnNumber?: number;
  hotelId?: number;
  type?: number;
  channelCodeStr?: string;
  hotelName?: string;
  status?: string;
  channelCode?: Array<string>;
}

export class HotelAndChannelByCityIdVO {
  constructor(params: IHotelAndChannelByCityIdVO) {
    this.brandType = params.brandType;
    this.srnNumber = params.srnNumber;
    this.hotelId = params.hotelId;
    this.type = params.type;
    this.channelCodeStr = params.channelCodeStr;
    this.hotelName = params.hotelName;
    this.status = params.status;
    this.channelCode = params.channelCode;
  }

  brandType?: string;
  srnNumber?: number;
  hotelId?: number;
  type?: number;
  channelCodeStr?: string;
  hotelName?: string;
  status?: string;
  channelCode?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelAndChannelByCityIdVO',
      $: {
        brandType: java.String(this.brandType),
        srnNumber: java.Integer(this.srnNumber),
        hotelId: java.Long(this.hotelId),
        type: java.Integer(this.type),
        channelCodeStr: java.String(this.channelCodeStr),
        hotelName: java.String(this.hotelName),
        status: java.String(this.status),
        channelCode: this.channelCode
          ? java.List(
              (this.channelCode || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
