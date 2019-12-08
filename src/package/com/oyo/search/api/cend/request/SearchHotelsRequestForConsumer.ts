import { Tag } from './../../bean/Tag';
import { Sort } from './../bean/Sort';
import { PoiScopeFilter } from './../bean/poi/PoiScopeFilter';
import { ConsumerAbVersion } from './../bean/ConsumerAbVersion';
import java from 'js-to-java';

export interface ISearchHotelsRequestForConsumer {
  country?: number;
  rooms?: number;
  appVersion?: string;
  latitude?: string;
  useNewPoiOptionDistanceRange?: boolean;
  cityId?: number;
  clusterIds?: string;
  locationCityId?: number;
  checkInDate?: string;
  poiDistanceName?: string;
  isLogin?: boolean;
  tagFilter?: Array<Tag>;
  distinctId?: string;
  checkOutDate?: string;
  cityName?: string;
  lowPrice?: number;
  highPrice?: number;
  sortField?: string;
  distanceRange?: string;
  sortFields?: Array<Sort>;
  poiId?: number;
  channelId?: string;
  longitude?: string;
  crsQueryString?: string;
  firstChannel?: string;
  offset?: number;
  searchType?: string;
  count?: number;
  hotelStatus?: string;
  sort?: Sort;
  highRateValue?: number;
  userId?: number;
  sortCode?: string;
  token?: string;
  lowRateValue?: number;
  serviceObj?: string;
  isHourRoom?: boolean;
  sortType?: string;
  poiScopeFilter?: PoiScopeFilter;
  abVersion?: ConsumerAbVersion;
  userProfileId?: string;
  userType?: number;
}

export class SearchHotelsRequestForConsumer {
  constructor(params: ISearchHotelsRequestForConsumer) {
    this.country = params.country;
    this.rooms = params.rooms;
    this.appVersion = params.appVersion;
    this.latitude = params.latitude;
    this.useNewPoiOptionDistanceRange = params.useNewPoiOptionDistanceRange;
    this.cityId = params.cityId;
    this.clusterIds = params.clusterIds;
    this.locationCityId = params.locationCityId;
    this.checkInDate = params.checkInDate;
    this.poiDistanceName = params.poiDistanceName;
    this.isLogin = params.isLogin;
    this.tagFilter = params.tagFilter;
    this.distinctId = params.distinctId;
    this.checkOutDate = params.checkOutDate;
    this.cityName = params.cityName;
    this.lowPrice = params.lowPrice;
    this.highPrice = params.highPrice;
    this.sortField = params.sortField;
    this.distanceRange = params.distanceRange;
    this.sortFields = params.sortFields;
    this.poiId = params.poiId;
    this.channelId = params.channelId;
    this.longitude = params.longitude;
    this.crsQueryString = params.crsQueryString;
    this.firstChannel = params.firstChannel;
    this.offset = params.offset;
    this.searchType = params.searchType;
    this.count = params.count;
    this.hotelStatus = params.hotelStatus;
    this.sort = params.sort;
    this.highRateValue = params.highRateValue;
    this.userId = params.userId;
    this.sortCode = params.sortCode;
    this.token = params.token;
    this.lowRateValue = params.lowRateValue;
    this.serviceObj = params.serviceObj;
    this.isHourRoom = params.isHourRoom;
    this.sortType = params.sortType;
    this.poiScopeFilter = params.poiScopeFilter;
    this.abVersion = params.abVersion;
    this.userProfileId = params.userProfileId;
    this.userType = params.userType;
  }

  country?: number;
  rooms?: number;
  appVersion?: string;
  latitude?: string;
  useNewPoiOptionDistanceRange?: boolean;
  cityId?: number;
  clusterIds?: string;
  locationCityId?: number;
  checkInDate?: string;
  poiDistanceName?: string;
  isLogin?: boolean;
  tagFilter?: Array<Tag>;
  distinctId?: string;
  checkOutDate?: string;
  cityName?: string;
  lowPrice?: number;
  highPrice?: number;
  sortField?: string;
  distanceRange?: string;
  sortFields?: Array<Sort>;
  poiId?: number;
  channelId?: string;
  longitude?: string;
  crsQueryString?: string;
  firstChannel?: string;
  offset?: number;
  searchType?: string;
  count?: number;
  hotelStatus?: string;
  sort?: Sort;
  highRateValue?: number;
  userId?: number;
  sortCode?: string;
  token?: string;
  lowRateValue?: number;
  serviceObj?: string;
  isHourRoom?: boolean;
  sortType?: string;
  poiScopeFilter?: PoiScopeFilter;
  abVersion?: ConsumerAbVersion;
  userProfileId?: string;
  userType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.SearchHotelsRequestForConsumer',
      $: {
        country: java.Integer(this.country),
        rooms: java.Integer(this.rooms),
        appVersion: java.String(this.appVersion),
        latitude: java.String(this.latitude),
        useNewPoiOptionDistanceRange: java.Boolean(
          this.useNewPoiOptionDistanceRange,
        ),
        cityId: java.Integer(this.cityId),
        clusterIds: java.String(this.clusterIds),
        locationCityId: java.Integer(this.locationCityId),
        checkInDate: java.String(this.checkInDate),
        poiDistanceName: java.String(this.poiDistanceName),
        isLogin: java.Boolean(this.isLogin),
        tagFilter: this.tagFilter
          ? java.List(
              (this.tagFilter || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        distinctId: java.String(this.distinctId),
        checkOutDate: java.String(this.checkOutDate),
        cityName: java.String(this.cityName),
        lowPrice: java.Double(this.lowPrice),
        highPrice: java.Double(this.highPrice),
        sortField: java.String(this.sortField),
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
        crsQueryString: java.String(this.crsQueryString),
        firstChannel: java.String(this.firstChannel),
        offset: java.Integer(this.offset),
        searchType: java.String(this.searchType),
        count: java.Integer(this.count),
        hotelStatus: java.String(this.hotelStatus),
        sort: this.sort ? this.sort.__fields2java() : null,
        highRateValue: java.Double(this.highRateValue),
        userId: java.Long(this.userId),
        sortCode: java.String(this.sortCode),
        token: java.String(this.token),
        lowRateValue: java.Double(this.lowRateValue),
        serviceObj: java.String(this.serviceObj),
        isHourRoom: java.Boolean(this.isHourRoom),
        sortType: java.String(this.sortType),
        poiScopeFilter: this.poiScopeFilter
          ? this.poiScopeFilter.__fields2java()
          : null,
        abVersion: this.abVersion ? this.abVersion.__fields2java() : null,
        userProfileId: java.String(this.userProfileId),
        userType: java.Integer(this.userType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
