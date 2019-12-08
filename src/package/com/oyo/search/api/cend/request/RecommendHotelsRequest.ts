import { AbVersion } from './../bean/AbVersion';
import java from 'js-to-java';

export interface IRecommendHotelsRequest {
  cacheCityFlag?: number;
  offset?: number;
  latitude?: string;
  count?: number;
  cityId?: number;
  userId?: number;
  distinctId?: string;
  excludeNearbyHotel?: boolean;
  abVersion?: AbVersion;
  visitCityId?: number;
  userType?: number;
  channelId?: string;
  longitude?: string;
}

export class RecommendHotelsRequest {
  constructor(params: IRecommendHotelsRequest) {
    this.cacheCityFlag = params.cacheCityFlag;
    this.offset = params.offset;
    this.latitude = params.latitude;
    this.count = params.count;
    this.cityId = params.cityId;
    this.userId = params.userId;
    this.distinctId = params.distinctId;
    this.excludeNearbyHotel = params.excludeNearbyHotel;
    this.abVersion = params.abVersion;
    this.visitCityId = params.visitCityId;
    this.userType = params.userType;
    this.channelId = params.channelId;
    this.longitude = params.longitude;
  }

  cacheCityFlag?: number;
  offset?: number;
  latitude?: string;
  count?: number;
  cityId?: number;
  userId?: number;
  distinctId?: string;
  excludeNearbyHotel?: boolean;
  abVersion?: AbVersion;
  visitCityId?: number;
  userType?: number;
  channelId?: string;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.RecommendHotelsRequest',
      $: {
        cacheCityFlag: java.Integer(this.cacheCityFlag),
        offset: java.Integer(this.offset),
        latitude: java.String(this.latitude),
        count: java.Integer(this.count),
        cityId: java.Integer(this.cityId),
        userId: java.Long(this.userId),
        distinctId: java.String(this.distinctId),
        excludeNearbyHotel: java.Boolean(this.excludeNearbyHotel),
        abVersion: this.abVersion ? this.abVersion.__fields2java() : null,
        visitCityId: java.Integer(this.visitCityId),
        userType: java.Integer(this.userType),
        channelId: java.String(this.channelId),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
