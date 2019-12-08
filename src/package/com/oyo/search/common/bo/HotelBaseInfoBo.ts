import java from 'js-to-java';

export interface IHotelBaseInfoBo {
  hubId?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  managerName?: string;
  bizClcName?: string;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  hubName?: string;
  zoneId?: number;
  id?: number;
  landmark?: string;
  fax?: string;
  bizRegionId?: number;
  nameHighlight?: string;
  bizZoneName?: string;
  mapLink?: string;
  averageTotalRate?: {value: string};
  bizClcId?: number;
  newName?: string;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  pinCode?: string;
  name?: string;
  plotNumber?: string;
  bizRegionName?: string;
  status?: number;
  streetId?: number;
  locationDescription?: string;
  atlasId?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  cityName?: string;
  street?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  channelIds?: Array<number>;
  email?: string;
  bizHubId?: number;
  summary?: string;
  bizHubName?: string;
  stateId?: number;
  alternateName?: string;
  landLine?: string;
  bizZoneId?: number;
  brandType?: number;
  relevanceScore?: number;
  primaryContact?: string;
}

export class HotelBaseInfoBo {
  constructor(params: IHotelBaseInfoBo) {
    this.hubId = params.hubId;
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.type = params.type;
    this.managerName = params.managerName;
    this.bizClcName = params.bizClcName;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.roomNum = params.roomNum;
    this.stateName = params.stateName;
    this.hubName = params.hubName;
    this.zoneId = params.zoneId;
    this.id = params.id;
    this.landmark = params.landmark;
    this.fax = params.fax;
    this.bizRegionId = params.bizRegionId;
    this.nameHighlight = params.nameHighlight;
    this.bizZoneName = params.bizZoneName;
    this.mapLink = params.mapLink;
    this.averageTotalRate = params.averageTotalRate;
    this.bizClcId = params.bizClcId;
    this.newName = params.newName;
    this.signRoomNum = params.signRoomNum;
    this.directions = params.directions;
    this.phone = params.phone;
    this.pinCode = params.pinCode;
    this.name = params.name;
    this.plotNumber = params.plotNumber;
    this.bizRegionName = params.bizRegionName;
    this.status = params.status;
    this.streetId = params.streetId;
    this.locationDescription = params.locationDescription;
    this.atlasId = params.atlasId;
    this.description = params.description;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.cityName = params.cityName;
    this.street = params.street;
    this.enName = params.enName;
    this.pyName = params.pyName;
    this.zoneName = params.zoneName;
    this.channelIds = params.channelIds;
    this.email = params.email;
    this.bizHubId = params.bizHubId;
    this.summary = params.summary;
    this.bizHubName = params.bizHubName;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.landLine = params.landLine;
    this.bizZoneId = params.bizZoneId;
    this.brandType = params.brandType;
    this.relevanceScore = params.relevanceScore;
    this.primaryContact = params.primaryContact;
  }

  hubId?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  managerName?: string;
  bizClcName?: string;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  hubName?: string;
  zoneId?: number;
  id?: number;
  landmark?: string;
  fax?: string;
  bizRegionId?: number;
  nameHighlight?: string;
  bizZoneName?: string;
  mapLink?: string;
  averageTotalRate?: {value: string};
  bizClcId?: number;
  newName?: string;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  pinCode?: string;
  name?: string;
  plotNumber?: string;
  bizRegionName?: string;
  status?: number;
  streetId?: number;
  locationDescription?: string;
  atlasId?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  cityName?: string;
  street?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  channelIds?: Array<number>;
  email?: string;
  bizHubId?: number;
  summary?: string;
  bizHubName?: string;
  stateId?: number;
  alternateName?: string;
  landLine?: string;
  bizZoneId?: number;
  brandType?: number;
  relevanceScore?: number;
  primaryContact?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.common.bo.HotelBaseInfoBo',
      $: {
        hubId: java.Integer(this.hubId),
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        managerName: java.String(this.managerName),
        bizClcName: java.String(this.bizClcName),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        roomNum: java.Integer(this.roomNum),
        stateName: java.String(this.stateName),
        hubName: java.String(this.hubName),
        zoneId: java.Integer(this.zoneId),
        id: java.Integer(this.id),
        landmark: java.String(this.landmark),
        fax: java.String(this.fax),
        bizRegionId: java.Integer(this.bizRegionId),
        nameHighlight: java.String(this.nameHighlight),
        bizZoneName: java.String(this.bizZoneName),
        mapLink: java.String(this.mapLink),
        averageTotalRate: this.averageTotalRate
          ? java.BigDecimal(this.averageTotalRate.value)
          : null,
        bizClcId: java.Integer(this.bizClcId),
        newName: java.String(this.newName),
        signRoomNum: java.Integer(this.signRoomNum),
        directions: java.String(this.directions),
        phone: java.String(this.phone),
        pinCode: java.String(this.pinCode),
        name: java.String(this.name),
        plotNumber: java.String(this.plotNumber),
        bizRegionName: java.String(this.bizRegionName),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
        locationDescription: java.String(this.locationDescription),
        atlasId: java.String(this.atlasId),
        description: java.String(this.description),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        enName: java.String(this.enName),
        pyName: java.String(this.pyName),
        zoneName: java.String(this.zoneName),
        channelIds: this.channelIds
          ? java.List(
              (this.channelIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        email: java.String(this.email),
        bizHubId: java.Integer(this.bizHubId),
        summary: java.String(this.summary),
        bizHubName: java.String(this.bizHubName),
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        landLine: java.String(this.landLine),
        bizZoneId: java.Integer(this.bizZoneId),
        brandType: java.Integer(this.brandType),
        relevanceScore: java.Float(this.relevanceScore),
        primaryContact: java.String(this.primaryContact),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
