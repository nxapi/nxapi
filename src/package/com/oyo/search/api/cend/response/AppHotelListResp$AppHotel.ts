import { DiscountDetail } from './../bean/DiscountDetail';
import { Rating } from './../bean/Rating';
import { ActivityDetail } from './../bean/ActivityDetail';
import { Tag } from './../../bean/Tag';
import { Rate } from './../bean/Rate';
import java from 'js-to-java';

export interface IAppHotelListResp$AppHotel {
  rankScoreFigure?: number;
  distance?: number;
  originalPrice?: number;
  city?: string;
  latitude?: string;
  bestImage?: string;
  inventory?: number;
  available_rooms?: Array<number>;
  pricingStatus?: number;
  clusterCname?: string;
  discountDetail?: DiscountDetail;
  hotelRankScore?: number;
  sortExprValue?: number;
  top?: boolean;
  minDistance?: boolean;
  ratings?: Rating;
  activityDetail?: ActivityDetail;
  hotelTags?: Array<Tag>;
  id?: number;
  longitude?: string;
  supportMember?: boolean;
  availableInventoryPercent?: number;
  address?: string;
  memberPrice?: number;
  currency_symbol?: string;
  poiDistanceText?: string;
  rates?: Array<Rate>;
  china20?: boolean;
  commentTag?: Array<string>;
  best_image?: string;
  availableRoomsNum?: number;
  minPrice?: number;
  name?: string;
  poiCategoryTags?: Array<string>;
  firstPricingDate?: Date;
  hotelType?: number;
  newChina20?: boolean;
  supportCoupon?: boolean;
}

export class AppHotelListResp$AppHotel {
  constructor(params: IAppHotelListResp$AppHotel) {
    this.rankScoreFigure = params.rankScoreFigure;
    this.distance = params.distance;
    this.originalPrice = params.originalPrice;
    this.city = params.city;
    this.latitude = params.latitude;
    this.bestImage = params.bestImage;
    this.inventory = params.inventory;
    this.available_rooms = params.available_rooms;
    this.pricingStatus = params.pricingStatus;
    this.clusterCname = params.clusterCname;
    this.discountDetail = params.discountDetail;
    this.hotelRankScore = params.hotelRankScore;
    this.sortExprValue = params.sortExprValue;
    this.top = params.top;
    this.minDistance = params.minDistance;
    this.ratings = params.ratings;
    this.activityDetail = params.activityDetail;
    this.hotelTags = params.hotelTags;
    this.id = params.id;
    this.longitude = params.longitude;
    this.supportMember = params.supportMember;
    this.availableInventoryPercent = params.availableInventoryPercent;
    this.address = params.address;
    this.memberPrice = params.memberPrice;
    this.currency_symbol = params.currency_symbol;
    this.poiDistanceText = params.poiDistanceText;
    this.rates = params.rates;
    this.china20 = params.china20;
    this.commentTag = params.commentTag;
    this.best_image = params.best_image;
    this.availableRoomsNum = params.availableRoomsNum;
    this.minPrice = params.minPrice;
    this.name = params.name;
    this.poiCategoryTags = params.poiCategoryTags;
    this.firstPricingDate = params.firstPricingDate;
    this.hotelType = params.hotelType;
    this.newChina20 = params.newChina20;
    this.supportCoupon = params.supportCoupon;
  }

  rankScoreFigure?: number;
  distance?: number;
  originalPrice?: number;
  city?: string;
  latitude?: string;
  bestImage?: string;
  inventory?: number;
  available_rooms?: Array<number>;
  pricingStatus?: number;
  clusterCname?: string;
  discountDetail?: DiscountDetail;
  hotelRankScore?: number;
  sortExprValue?: number;
  top?: boolean;
  minDistance?: boolean;
  ratings?: Rating;
  activityDetail?: ActivityDetail;
  hotelTags?: Array<Tag>;
  id?: number;
  longitude?: string;
  supportMember?: boolean;
  availableInventoryPercent?: number;
  address?: string;
  memberPrice?: number;
  currency_symbol?: string;
  poiDistanceText?: string;
  rates?: Array<Rate>;
  china20?: boolean;
  commentTag?: Array<string>;
  best_image?: string;
  availableRoomsNum?: number;
  minPrice?: number;
  name?: string;
  poiCategoryTags?: Array<string>;
  firstPricingDate?: Date;
  hotelType?: number;
  newChina20?: boolean;
  supportCoupon?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.AppHotelListResp$AppHotel',
      $: {
        rankScoreFigure: java.Double(this.rankScoreFigure),
        distance: java.Double(this.distance),
        originalPrice: java.Integer(this.originalPrice),
        city: java.String(this.city),
        latitude: java.String(this.latitude),
        bestImage: java.String(this.bestImage),
        inventory: java.Integer(this.inventory),
        available_rooms: this.available_rooms
          ? java.List(
              (this.available_rooms || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        pricingStatus: java.Integer(this.pricingStatus),
        clusterCname: java.String(this.clusterCname),
        discountDetail: this.discountDetail
          ? this.discountDetail.__fields2java()
          : null,
        hotelRankScore: java.Double(this.hotelRankScore),
        sortExprValue: java.Double(this.sortExprValue),
        top: java.Boolean(this.top),
        minDistance: java.Boolean(this.minDistance),
        ratings: this.ratings ? this.ratings.__fields2java() : null,
        activityDetail: this.activityDetail
          ? this.activityDetail.__fields2java()
          : null,
        hotelTags: this.hotelTags
          ? java.List(
              (this.hotelTags || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        id: java.Integer(this.id),
        longitude: java.String(this.longitude),
        supportMember: java.Boolean(this.supportMember),
        availableInventoryPercent: java.Double(this.availableInventoryPercent),
        address: java.String(this.address),
        memberPrice: java.Integer(this.memberPrice),
        currency_symbol: java.String(this.currency_symbol),
        poiDistanceText: java.String(this.poiDistanceText),
        rates: this.rates
          ? java.List(
              (this.rates || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        china20: java.Boolean(this.china20),
        commentTag: this.commentTag
          ? java.List(
              (this.commentTag || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        best_image: java.String(this.best_image),
        availableRoomsNum: java.Integer(this.availableRoomsNum),
        minPrice: java.Integer(this.minPrice),
        name: java.String(this.name),
        poiCategoryTags: this.poiCategoryTags
          ? java.List(
              (this.poiCategoryTags || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        firstPricingDate: this.firstPricingDate,
        hotelType: java.Integer(this.hotelType),
        newChina20: java.Boolean(this.newChina20),
        supportCoupon: java.Boolean(this.supportCoupon),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
