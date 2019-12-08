import { BreakfastBO } from './BreakfastBO';
import java from 'js-to-java';

export interface IHotelBaseBO {
  breakfastBO?: BreakfastBO;
  hubId?: number;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  hubCnName?: string;
  cityId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  stateName?: string;
  creditcards?: Array<number>;
  hubName?: string;
  zoneId?: number;
  id?: number;
  checkoutTime?: Date;
  fax?: string;
  longitude?: string;
  zoneCnName?: string;
  amenityList?: Array<number>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: Date;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  activationDate?: Date;
  breakfast?: number;
  status?: number;
  bizDate?: Date;
  latitude?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<number>;
  cityName?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  alternateName?: string;
  landline?: string;
}

export class HotelBaseBO {
  constructor(params: IHotelBaseBO) {
    this.breakfastBO = params.breakfastBO;
    this.hubId = params.hubId;
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.oyoEmail = params.oyoEmail;
    this.hubCnName = params.hubCnName;
    this.cityId = params.cityId;
    this.type = params.type;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.stateName = params.stateName;
    this.creditcards = params.creditcards;
    this.hubName = params.hubName;
    this.zoneId = params.zoneId;
    this.id = params.id;
    this.checkoutTime = params.checkoutTime;
    this.fax = params.fax;
    this.longitude = params.longitude;
    this.zoneCnName = params.zoneCnName;
    this.amenityList = params.amenityList;
    this.mapLink = params.mapLink;
    this.totalRooms = params.totalRooms;
    this.nightAuditTime = params.nightAuditTime;
    this.directions = params.directions;
    this.phone = params.phone;
    this.name = params.name;
    this.plotNumber = params.plotNumber;
    this.countryName = params.countryName;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.status = params.status;
    this.bizDate = params.bizDate;
    this.latitude = params.latitude;
    this.description = params.description;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.restrictionsList = params.restrictionsList;
    this.cityName = params.cityName;
    this.street = params.street;
    this.clusterName = params.clusterName;
    this.enName = params.enName;
    this.pyName = params.pyName;
    this.zoneName = params.zoneName;
    this.email = params.email;
    this.summary = params.summary;
    this.transformedById = params.transformedById;
    this.checkinTime = params.checkinTime;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.landline = params.landline;
  }

  breakfastBO?: BreakfastBO;
  hubId?: number;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  hubCnName?: string;
  cityId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  stateName?: string;
  creditcards?: Array<number>;
  hubName?: string;
  zoneId?: number;
  id?: number;
  checkoutTime?: Date;
  fax?: string;
  longitude?: string;
  zoneCnName?: string;
  amenityList?: Array<number>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: Date;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  activationDate?: Date;
  breakfast?: number;
  status?: number;
  bizDate?: Date;
  latitude?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<number>;
  cityName?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  alternateName?: string;
  landline?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelBaseBO',
      $: {
        breakfastBO: this.breakfastBO ? this.breakfastBO.__fields2java() : null,
        hubId: java.Integer(this.hubId),
        ptiCheckStatus: java.Integer(this.ptiCheckStatus),
        oyoEmail: java.String(this.oyoEmail),
        hubCnName: java.String(this.hubCnName),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        stateName: java.String(this.stateName),
        creditcards: this.creditcards
          ? java.List(
              (this.creditcards || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hubName: java.String(this.hubName),
        zoneId: java.Integer(this.zoneId),
        id: java.Long(this.id),
        checkoutTime: this.checkoutTime,
        fax: java.String(this.fax),
        longitude: java.String(this.longitude),
        zoneCnName: java.String(this.zoneCnName),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        mapLink: java.String(this.mapLink),
        totalRooms: java.Integer(this.totalRooms),
        nightAuditTime: this.nightAuditTime,
        directions: java.String(this.directions),
        phone: java.String(this.phone),
        name: java.String(this.name),
        plotNumber: java.String(this.plotNumber),
        countryName: java.String(this.countryName),
        activationDate: this.activationDate,
        breakfast: java.Integer(this.breakfast),
        status: java.Integer(this.status),
        bizDate: this.bizDate,
        latitude: java.String(this.latitude),
        description: java.String(this.description),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        restrictionsList: this.restrictionsList
          ? java.List(
              (this.restrictionsList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        clusterName: java.String(this.clusterName),
        enName: java.String(this.enName),
        pyName: java.String(this.pyName),
        zoneName: java.String(this.zoneName),
        email: java.String(this.email),
        summary: java.String(this.summary),
        transformedById: java.Integer(this.transformedById),
        checkinTime: this.checkinTime,
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        landline: java.String(this.landline),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
