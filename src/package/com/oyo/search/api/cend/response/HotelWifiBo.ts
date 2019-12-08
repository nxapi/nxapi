import java from 'js-to-java';

export interface IHotelWifiBo {
  password?: string;
  oyoId?: string;
  qrCodeImageUrl?: string;
  qrCodeUrl?: string;
  wifiId?: string;
  remark?: string;
  id?: number;
  hotelId?: number;
  hotelName?: string;
  ssid?: string;
}

export class HotelWifiBo {
  constructor(params: IHotelWifiBo) {
    this.password = params.password;
    this.oyoId = params.oyoId;
    this.qrCodeImageUrl = params.qrCodeImageUrl;
    this.qrCodeUrl = params.qrCodeUrl;
    this.wifiId = params.wifiId;
    this.remark = params.remark;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.ssid = params.ssid;
  }

  password?: string;
  oyoId?: string;
  qrCodeImageUrl?: string;
  qrCodeUrl?: string;
  wifiId?: string;
  remark?: string;
  id?: number;
  hotelId?: number;
  hotelName?: string;
  ssid?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelWifiBo',
      $: {
        password: java.String(this.password),
        oyoId: java.String(this.oyoId),
        qrCodeImageUrl: java.String(this.qrCodeImageUrl),
        qrCodeUrl: java.String(this.qrCodeUrl),
        wifiId: java.String(this.wifiId),
        remark: java.String(this.remark),
        id: java.Integer(this.id),
        hotelId: java.Integer(this.hotelId),
        hotelName: java.String(this.hotelName),
        ssid: java.String(this.ssid),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
