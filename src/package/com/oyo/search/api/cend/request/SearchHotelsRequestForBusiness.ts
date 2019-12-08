import { Sort } from './../bean/Sort';
import java from 'js-to-java';

export interface ISearchHotelsRequestForBusiness {
  rooms?: number;
  offset?: number;
  searchType?: string;
  isChina20?: boolean;
  latitude?: string;
  count?: number;
  hotelStatus?: string;
  cityId?: number;
  clusterIds?: string;
  checkInDate?: string;
  poiDistanceName?: string;
  serviceObj?: string;
  checkOutDate?: string;
  cityName?: string;
  lowPrice?: number;
  highPrice?: number;
  distanceRange?: string;
  sortFields?: Array<Sort>;
  poiId?: number;
  channelId?: string;
  longitude?: string;
}

export class SearchHotelsRequestForBusiness {
  constructor(params: ISearchHotelsRequestForBusiness) {
    this.rooms = params.rooms;
    this.offset = params.offset;
    this.searchType = params.searchType;
    this.isChina20 = params.isChina20;
    this.latitude = params.latitude;
    this.count = params.count;
    this.hotelStatus = params.hotelStatus;
    this.cityId = params.cityId;
    this.clusterIds = params.clusterIds;
    this.checkInDate = params.checkInDate;
    this.poiDistanceName = params.poiDistanceName;
    this.serviceObj = params.serviceObj;
    this.checkOutDate = params.checkOutDate;
    this.cityName = params.cityName;
    this.lowPrice = params.lowPrice;
    this.highPrice = params.highPrice;
    this.distanceRange = params.distanceRange;
    this.sortFields = params.sortFields;
    this.poiId = params.poiId;
    this.channelId = params.channelId;
    this.longitude = params.longitude;
  }

  rooms?: number;
  offset?: number;
  searchType?: string;
  isChina20?: boolean;
  latitude?: string;
  count?: number;
  hotelStatus?: string;
  cityId?: number;
  clusterIds?: string;
  checkInDate?: string;
  poiDistanceName?: string;
  serviceObj?: string;
  checkOutDate?: string;
  cityName?: string;
  lowPrice?: number;
  highPrice?: number;
  distanceRange?: string;
  sortFields?: Array<Sort>;
  poiId?: number;
  channelId?: string;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.SearchHotelsRequestForBusiness',
      $: {
        rooms: java.Integer(this.rooms),
        offset: java.Integer(this.offset),
        searchType: java.String(this.searchType),
        isChina20: java.Boolean(this.isChina20),
        latitude: java.String(this.latitude),
        count: java.Integer(this.count),
        hotelStatus: java.String(this.hotelStatus),
        cityId: java.Integer(this.cityId),
        clusterIds: java.String(this.clusterIds),
        checkInDate: java.String(this.checkInDate),
        poiDistanceName: java.String(this.poiDistanceName),
        serviceObj: java.String(this.serviceObj),
        checkOutDate: java.String(this.checkOutDate),
        cityName: java.String(this.cityName),
        lowPrice: java.Double(this.lowPrice),
        highPrice: java.Double(this.highPrice),
        distanceRange: java.String(this.distanceRange),
        sortFields: this.sortFields
          ? java.List(
              (this.sortFields || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        poiId: java.Integer(this.poiId),
        channelId: java.String(this.channelId),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
