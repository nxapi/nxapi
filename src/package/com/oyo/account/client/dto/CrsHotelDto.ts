import java from 'js-to-java';

export interface ICrsHotelDto {
  hotelRate?: string;
  hotelStatusCode?: number;
  orderId?: string;
  city?: string;
  hotelStatusDesc?: string;
  orderStatusDesc?: string;
  hotelId?: number;
  hotelName?: string;
  checkIn?: string;
  oyoId?: string;
  uniqueCode?: number;
  oyoRate?: string;
  orderStatusCode?: number;
  oyoShare?: string;
  id?: number;
  region?: string;
  checkOut?: string;
}

export class CrsHotelDto {
  constructor(params: ICrsHotelDto) {
    this.hotelRate = params.hotelRate;
    this.hotelStatusCode = params.hotelStatusCode;
    this.orderId = params.orderId;
    this.city = params.city;
    this.hotelStatusDesc = params.hotelStatusDesc;
    this.orderStatusDesc = params.orderStatusDesc;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.checkIn = params.checkIn;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.oyoRate = params.oyoRate;
    this.orderStatusCode = params.orderStatusCode;
    this.oyoShare = params.oyoShare;
    this.id = params.id;
    this.region = params.region;
    this.checkOut = params.checkOut;
  }

  hotelRate?: string;
  hotelStatusCode?: number;
  orderId?: string;
  city?: string;
  hotelStatusDesc?: string;
  orderStatusDesc?: string;
  hotelId?: number;
  hotelName?: string;
  checkIn?: string;
  oyoId?: string;
  uniqueCode?: number;
  oyoRate?: string;
  orderStatusCode?: number;
  oyoShare?: string;
  id?: number;
  region?: string;
  checkOut?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.CrsHotelDto',
      $: {
        hotelRate: java.String(this.hotelRate),
        hotelStatusCode: java.Integer(this.hotelStatusCode),
        orderId: java.String(this.orderId),
        city: java.String(this.city),
        hotelStatusDesc: java.String(this.hotelStatusDesc),
        orderStatusDesc: java.String(this.orderStatusDesc),
        hotelId: java.Integer(this.hotelId),
        hotelName: java.String(this.hotelName),
        checkIn: java.String(this.checkIn),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.Integer(this.uniqueCode),
        oyoRate: java.String(this.oyoRate),
        orderStatusCode: java.Integer(this.orderStatusCode),
        oyoShare: java.String(this.oyoShare),
        id: java.Integer(this.id),
        region: java.String(this.region),
        checkOut: java.String(this.checkOut),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
