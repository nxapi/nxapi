import java from 'js-to-java';

export interface IHotelResponse {
  hubId?: number;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  managerName?: string;
  breakfastInfo?: string;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  payMethod?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  nearybyLandmarkDirection?: string;
  checkoutTime?: Date;
  fax?: string;
  landmark?: string;
  longitude?: string;
  pincode?: string;
  clcName?: string;
  mapLink?: string;
  newName?: string;
  nightAuditTime?: Date;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  hotelType?: number;
  activationDate?: Date;
  breakfast?: number;
  styleTag?: string;
  startDate?: Date;
  status?: number;
  streetId?: number;
  bizDate?: Date;
  regionName?: string;
  locationDescription?: string;
  latitude?: string;
  atlasId?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  locationTag?: string;
  regionCode?: string;
  streetName?: number;
  isDeleted?: boolean;
  cityName?: string;
  street?: string;
  nearybyLandmark?: string;
  clusterName?: string;
  hotelFeature?: string;
  enName?: string;
  pyName?: string;
  isZombie?: boolean;
  zoneName?: string;
  floor?: string;
  travelTypeTag?: string;
  bizAreaId?: number;
  email?: string;
  lastDecorateDate?: Date;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  updateTime?: Date;
  alternateName?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  createTime?: Date;
  regionId?: number;
  createdBy?: string;
  primaryContact?: string;
  landline?: string;
}

export class HotelResponse {
  constructor(params: IHotelResponse) {
    this.hubId = params.hubId;
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.type = params.type;
    this.managerName = params.managerName;
    this.breakfastInfo = params.breakfastInfo;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.roomNum = params.roomNum;
    this.stateName = params.stateName;
    this.payMethod = params.payMethod;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.id = params.id;
    this.nearybyLandmarkDirection = params.nearybyLandmarkDirection;
    this.checkoutTime = params.checkoutTime;
    this.fax = params.fax;
    this.landmark = params.landmark;
    this.longitude = params.longitude;
    this.pincode = params.pincode;
    this.clcName = params.clcName;
    this.mapLink = params.mapLink;
    this.newName = params.newName;
    this.nightAuditTime = params.nightAuditTime;
    this.signRoomNum = params.signRoomNum;
    this.directions = params.directions;
    this.phone = params.phone;
    this.name = params.name;
    this.plotNumber = params.plotNumber;
    this.hotelType = params.hotelType;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.styleTag = params.styleTag;
    this.startDate = params.startDate;
    this.status = params.status;
    this.streetId = params.streetId;
    this.bizDate = params.bizDate;
    this.regionName = params.regionName;
    this.locationDescription = params.locationDescription;
    this.latitude = params.latitude;
    this.atlasId = params.atlasId;
    this.description = params.description;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.locationTag = params.locationTag;
    this.regionCode = params.regionCode;
    this.streetName = params.streetName;
    this.isDeleted = params.isDeleted;
    this.cityName = params.cityName;
    this.street = params.street;
    this.nearybyLandmark = params.nearybyLandmark;
    this.clusterName = params.clusterName;
    this.hotelFeature = params.hotelFeature;
    this.enName = params.enName;
    this.pyName = params.pyName;
    this.isZombie = params.isZombie;
    this.zoneName = params.zoneName;
    this.floor = params.floor;
    this.travelTypeTag = params.travelTypeTag;
    this.bizAreaId = params.bizAreaId;
    this.email = params.email;
    this.lastDecorateDate = params.lastDecorateDate;
    this.summary = params.summary;
    this.transformedById = params.transformedById;
    this.checkinTime = params.checkinTime;
    this.stateId = params.stateId;
    this.updateTime = params.updateTime;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.clcId = params.clcId;
    this.brandType = params.brandType;
    this.createTime = params.createTime;
    this.regionId = params.regionId;
    this.createdBy = params.createdBy;
    this.primaryContact = params.primaryContact;
    this.landline = params.landline;
  }

  hubId?: number;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  managerName?: string;
  breakfastInfo?: string;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  payMethod?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  nearybyLandmarkDirection?: string;
  checkoutTime?: Date;
  fax?: string;
  landmark?: string;
  longitude?: string;
  pincode?: string;
  clcName?: string;
  mapLink?: string;
  newName?: string;
  nightAuditTime?: Date;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  hotelType?: number;
  activationDate?: Date;
  breakfast?: number;
  styleTag?: string;
  startDate?: Date;
  status?: number;
  streetId?: number;
  bizDate?: Date;
  regionName?: string;
  locationDescription?: string;
  latitude?: string;
  atlasId?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  locationTag?: string;
  regionCode?: string;
  streetName?: number;
  isDeleted?: boolean;
  cityName?: string;
  street?: string;
  nearybyLandmark?: string;
  clusterName?: string;
  hotelFeature?: string;
  enName?: string;
  pyName?: string;
  isZombie?: boolean;
  zoneName?: string;
  floor?: string;
  travelTypeTag?: string;
  bizAreaId?: number;
  email?: string;
  lastDecorateDate?: Date;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  updateTime?: Date;
  alternateName?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  createTime?: Date;
  regionId?: number;
  createdBy?: string;
  primaryContact?: string;
  landline?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.response.HotelResponse',
      $: {
        hubId: java.Integer(this.hubId),
        ptiCheckStatus: java.Integer(this.ptiCheckStatus),
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        managerName: java.String(this.managerName),
        breakfastInfo: java.String(this.breakfastInfo),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        roomNum: java.Integer(this.roomNum),
        stateName: java.String(this.stateName),
        payMethod: java.String(this.payMethod),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        id: java.Long(this.id),
        nearybyLandmarkDirection: java.String(this.nearybyLandmarkDirection),
        checkoutTime: this.checkoutTime,
        fax: java.String(this.fax),
        landmark: java.String(this.landmark),
        longitude: java.String(this.longitude),
        pincode: java.String(this.pincode),
        clcName: java.String(this.clcName),
        mapLink: java.String(this.mapLink),
        newName: java.String(this.newName),
        nightAuditTime: this.nightAuditTime,
        signRoomNum: java.Integer(this.signRoomNum),
        directions: java.String(this.directions),
        phone: java.String(this.phone),
        name: java.String(this.name),
        plotNumber: java.String(this.plotNumber),
        hotelType: java.Integer(this.hotelType),
        activationDate: this.activationDate,
        breakfast: java.Integer(this.breakfast),
        styleTag: java.String(this.styleTag),
        startDate: this.startDate,
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
        bizDate: this.bizDate,
        regionName: java.String(this.regionName),
        locationDescription: java.String(this.locationDescription),
        latitude: java.String(this.latitude),
        atlasId: java.String(this.atlasId),
        description: java.String(this.description),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        locationTag: java.String(this.locationTag),
        regionCode: java.String(this.regionCode),
        streetName: java.Integer(this.streetName),
        isDeleted: java.Boolean(this.isDeleted),
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        nearybyLandmark: java.String(this.nearybyLandmark),
        clusterName: java.String(this.clusterName),
        hotelFeature: java.String(this.hotelFeature),
        enName: java.String(this.enName),
        pyName: java.String(this.pyName),
        isZombie: java.Boolean(this.isZombie),
        zoneName: java.String(this.zoneName),
        floor: java.String(this.floor),
        travelTypeTag: java.String(this.travelTypeTag),
        bizAreaId: java.Integer(this.bizAreaId),
        email: java.String(this.email),
        lastDecorateDate: this.lastDecorateDate,
        summary: java.String(this.summary),
        transformedById: java.Integer(this.transformedById),
        checkinTime: this.checkinTime,
        stateId: java.Integer(this.stateId),
        updateTime: this.updateTime,
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        clcId: java.Integer(this.clcId),
        brandType: java.Integer(this.brandType),
        createTime: this.createTime,
        regionId: java.Integer(this.regionId),
        createdBy: java.String(this.createdBy),
        primaryContact: java.String(this.primaryContact),
        landline: java.String(this.landline),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
