import { HotelChannelCommissionBO } from './../channel/HotelChannelCommissionBO';
import java from 'js-to-java';

export interface IHotelBaseInfoBO {
  bizType?: number;
  latitude?: string;
  description?: string;
  managerName?: string;
  oyoId?: string;
  cityName?: string;
  uniqueCode?: string;
  stateName?: string;
  street?: string;
  clusterName?: string;
  id?: number;
  landmark?: string;
  checkoutTime?: string;
  email?: string;
  longitude?: string;
  channelCommissionList?: Array<HotelChannelCommissionBO>;
  pincode?: string;
  checkinTime?: string;
  alternateName?: string;
  totalRooms?: number;
  phone?: string;
  createTime?: string;
  primaryContact?: string;
  name?: string;
  landline?: string;
  countryName?: string;
}

export class HotelBaseInfoBO {
  constructor(params: IHotelBaseInfoBO) {
    this.bizType = params.bizType;
    this.latitude = params.latitude;
    this.description = params.description;
    this.managerName = params.managerName;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.uniqueCode = params.uniqueCode;
    this.stateName = params.stateName;
    this.street = params.street;
    this.clusterName = params.clusterName;
    this.id = params.id;
    this.landmark = params.landmark;
    this.checkoutTime = params.checkoutTime;
    this.email = params.email;
    this.longitude = params.longitude;
    this.channelCommissionList = params.channelCommissionList;
    this.pincode = params.pincode;
    this.checkinTime = params.checkinTime;
    this.alternateName = params.alternateName;
    this.totalRooms = params.totalRooms;
    this.phone = params.phone;
    this.createTime = params.createTime;
    this.primaryContact = params.primaryContact;
    this.name = params.name;
    this.landline = params.landline;
    this.countryName = params.countryName;
  }

  bizType?: number;
  latitude?: string;
  description?: string;
  managerName?: string;
  oyoId?: string;
  cityName?: string;
  uniqueCode?: string;
  stateName?: string;
  street?: string;
  clusterName?: string;
  id?: number;
  landmark?: string;
  checkoutTime?: string;
  email?: string;
  longitude?: string;
  channelCommissionList?: Array<HotelChannelCommissionBO>;
  pincode?: string;
  checkinTime?: string;
  alternateName?: string;
  totalRooms?: number;
  phone?: string;
  createTime?: string;
  primaryContact?: string;
  name?: string;
  landline?: string;
  countryName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelBaseInfoBO',
      $: {
        bizType: java.Integer(this.bizType),
        latitude: java.String(this.latitude),
        description: java.String(this.description),
        managerName: java.String(this.managerName),
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        uniqueCode: java.String(this.uniqueCode),
        stateName: java.String(this.stateName),
        street: java.String(this.street),
        clusterName: java.String(this.clusterName),
        id: java.Long(this.id),
        landmark: java.String(this.landmark),
        checkoutTime: java.String(this.checkoutTime),
        email: java.String(this.email),
        longitude: java.String(this.longitude),
        channelCommissionList: this.channelCommissionList
          ? java.List(
              (this.channelCommissionList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        pincode: java.String(this.pincode),
        checkinTime: java.String(this.checkinTime),
        alternateName: java.String(this.alternateName),
        totalRooms: java.Integer(this.totalRooms),
        phone: java.String(this.phone),
        createTime: java.String(this.createTime),
        primaryContact: java.String(this.primaryContact),
        name: java.String(this.name),
        landline: java.String(this.landline),
        countryName: java.String(this.countryName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
