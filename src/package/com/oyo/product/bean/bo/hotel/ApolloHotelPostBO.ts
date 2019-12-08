import java from 'js-to-java';

export interface IApolloHotelPostBO {
  ptiCheckStatus?: string;
  latitude?: string;
  oyoEmail?: string;
  cityId?: number;
  clusterId?: number;
  managerName?: string;
  type?: number;
  oyoId?: string;
  roomNum?: number;
  uniqueCode?: string;
  street?: string;
  payMethodList?: Array<number>;
  floor?: string;
  bizAreaId?: number;
  email?: string;
  lastDecorateDate?: Date;
  placeCode?: number;
  longitude?: string;
  landmarkList?: Array<string>;
  alternateName?: string;
  bookingEmail?: string;
  brandType?: number;
  signRoomNum?: number;
  phone?: string;
  primaryContact?: string;
  name?: string;
  hotelType?: number;
  activationDate?: Date;
  startDate?: Date;
  coordinatesSupplier?: string;
  streetId?: number;
}

export class ApolloHotelPostBO {
  constructor(params: IApolloHotelPostBO) {
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.latitude = params.latitude;
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.managerName = params.managerName;
    this.type = params.type;
    this.oyoId = params.oyoId;
    this.roomNum = params.roomNum;
    this.uniqueCode = params.uniqueCode;
    this.street = params.street;
    this.payMethodList = params.payMethodList;
    this.floor = params.floor;
    this.bizAreaId = params.bizAreaId;
    this.email = params.email;
    this.lastDecorateDate = params.lastDecorateDate;
    this.placeCode = params.placeCode;
    this.longitude = params.longitude;
    this.landmarkList = params.landmarkList;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.brandType = params.brandType;
    this.signRoomNum = params.signRoomNum;
    this.phone = params.phone;
    this.primaryContact = params.primaryContact;
    this.name = params.name;
    this.hotelType = params.hotelType;
    this.activationDate = params.activationDate;
    this.startDate = params.startDate;
    this.coordinatesSupplier = params.coordinatesSupplier;
    this.streetId = params.streetId;
  }

  ptiCheckStatus?: string;
  latitude?: string;
  oyoEmail?: string;
  cityId?: number;
  clusterId?: number;
  managerName?: string;
  type?: number;
  oyoId?: string;
  roomNum?: number;
  uniqueCode?: string;
  street?: string;
  payMethodList?: Array<number>;
  floor?: string;
  bizAreaId?: number;
  email?: string;
  lastDecorateDate?: Date;
  placeCode?: number;
  longitude?: string;
  landmarkList?: Array<string>;
  alternateName?: string;
  bookingEmail?: string;
  brandType?: number;
  signRoomNum?: number;
  phone?: string;
  primaryContact?: string;
  name?: string;
  hotelType?: number;
  activationDate?: Date;
  startDate?: Date;
  coordinatesSupplier?: string;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.ApolloHotelPostBO',
      $: {
        ptiCheckStatus: java.String(this.ptiCheckStatus),
        latitude: java.String(this.latitude),
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        managerName: java.String(this.managerName),
        type: java.Integer(this.type),
        oyoId: java.String(this.oyoId),
        roomNum: java.Integer(this.roomNum),
        uniqueCode: java.String(this.uniqueCode),
        street: java.String(this.street),
        payMethodList: this.payMethodList
          ? java.List(
              (this.payMethodList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        floor: java.String(this.floor),
        bizAreaId: java.Integer(this.bizAreaId),
        email: java.String(this.email),
        lastDecorateDate: this.lastDecorateDate,
        placeCode: java.Long(this.placeCode),
        longitude: java.String(this.longitude),
        landmarkList: this.landmarkList
          ? java.List(
              (this.landmarkList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        brandType: java.Integer(this.brandType),
        signRoomNum: java.Integer(this.signRoomNum),
        phone: java.String(this.phone),
        primaryContact: java.String(this.primaryContact),
        name: java.String(this.name),
        hotelType: java.Integer(this.hotelType),
        activationDate: this.activationDate,
        startDate: this.startDate,
        coordinatesSupplier: java.String(this.coordinatesSupplier),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
