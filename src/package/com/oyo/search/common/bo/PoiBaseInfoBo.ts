import { GeoPoint } from './GeoPoint';
import java from 'js-to-java';

export interface IPoiBaseInfoBo {
  thirdCategory?: string;
  secondCategory?: string;
  poiName?: string;
  nearbyHotelNum?: number;
  poiNameHighlight?: string;
  stateId?: number;
  updateTime?: number;
  cityId?: number;
  poiSource?: number;
  cityName?: string;
  relevanceScore?: number;
  stateName?: string;
  primaryCategory?: string;
  location?: GeoPoint;
  id?: number;
  poiId?: number;
}

export class PoiBaseInfoBo {
  constructor(params: IPoiBaseInfoBo) {
    this.thirdCategory = params.thirdCategory;
    this.secondCategory = params.secondCategory;
    this.poiName = params.poiName;
    this.nearbyHotelNum = params.nearbyHotelNum;
    this.poiNameHighlight = params.poiNameHighlight;
    this.stateId = params.stateId;
    this.updateTime = params.updateTime;
    this.cityId = params.cityId;
    this.poiSource = params.poiSource;
    this.cityName = params.cityName;
    this.relevanceScore = params.relevanceScore;
    this.stateName = params.stateName;
    this.primaryCategory = params.primaryCategory;
    this.location = params.location;
    this.id = params.id;
    this.poiId = params.poiId;
  }

  thirdCategory?: string;
  secondCategory?: string;
  poiName?: string;
  nearbyHotelNum?: number;
  poiNameHighlight?: string;
  stateId?: number;
  updateTime?: number;
  cityId?: number;
  poiSource?: number;
  cityName?: string;
  relevanceScore?: number;
  stateName?: string;
  primaryCategory?: string;
  location?: GeoPoint;
  id?: number;
  poiId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.common.bo.PoiBaseInfoBo',
      $: {
        thirdCategory: java.String(this.thirdCategory),
        secondCategory: java.String(this.secondCategory),
        poiName: java.String(this.poiName),
        nearbyHotelNum: java.Integer(this.nearbyHotelNum),
        poiNameHighlight: java.String(this.poiNameHighlight),
        stateId: java.Integer(this.stateId),
        updateTime: java.Long(this.updateTime),
        cityId: java.Integer(this.cityId),
        poiSource: java.Integer(this.poiSource),
        cityName: java.String(this.cityName),
        relevanceScore: java.Float(this.relevanceScore),
        stateName: java.String(this.stateName),
        primaryCategory: java.String(this.primaryCategory),
        location: this.location ? this.location.__fields2java() : null,
        id: java.Integer(this.id),
        poiId: java.Integer(this.poiId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
