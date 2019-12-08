import { DiscountDetail } from './../bean/DiscountDetail';
import { ActivityDetail } from './../bean/ActivityDetail';
import { Tag } from './../../bean/Tag';
import java from 'js-to-java';

export interface IRecommendHotelBo {
  originalPrice?: number;
  distance?: number;
  memberPrice?: number;
  city?: string;
  china20?: boolean;
  heroImage?: string;
  hotelId?: number;
  commentTag?: Array<string>;
  hotelName?: string;
  distanceDisplayText?: string;
  nearbyHotel?: boolean;
  rateValue?: number;
  pricingStatus?: number;
  discountDetail?: DiscountDetail;
  rateCount?: number;
  activityDetail?: ActivityDetail;
  minPrice?: number;
  poiCategoryTags?: Array<string>;
  hotelTags?: Array<Tag>;
  hotelType?: number;
}

export class RecommendHotelBo {
  constructor(params: IRecommendHotelBo) {
    this.originalPrice = params.originalPrice;
    this.distance = params.distance;
    this.memberPrice = params.memberPrice;
    this.city = params.city;
    this.china20 = params.china20;
    this.heroImage = params.heroImage;
    this.hotelId = params.hotelId;
    this.commentTag = params.commentTag;
    this.hotelName = params.hotelName;
    this.distanceDisplayText = params.distanceDisplayText;
    this.nearbyHotel = params.nearbyHotel;
    this.rateValue = params.rateValue;
    this.pricingStatus = params.pricingStatus;
    this.discountDetail = params.discountDetail;
    this.rateCount = params.rateCount;
    this.activityDetail = params.activityDetail;
    this.minPrice = params.minPrice;
    this.poiCategoryTags = params.poiCategoryTags;
    this.hotelTags = params.hotelTags;
    this.hotelType = params.hotelType;
  }

  originalPrice?: number;
  distance?: number;
  memberPrice?: number;
  city?: string;
  china20?: boolean;
  heroImage?: string;
  hotelId?: number;
  commentTag?: Array<string>;
  hotelName?: string;
  distanceDisplayText?: string;
  nearbyHotel?: boolean;
  rateValue?: number;
  pricingStatus?: number;
  discountDetail?: DiscountDetail;
  rateCount?: number;
  activityDetail?: ActivityDetail;
  minPrice?: number;
  poiCategoryTags?: Array<string>;
  hotelTags?: Array<Tag>;
  hotelType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bo.RecommendHotelBo',
      $: {
        originalPrice: java.Integer(this.originalPrice),
        distance: java.Double(this.distance),
        memberPrice: java.Integer(this.memberPrice),
        city: java.String(this.city),
        china20: java.Boolean(this.china20),
        heroImage: java.String(this.heroImage),
        hotelId: java.Integer(this.hotelId),
        commentTag: this.commentTag
          ? java.List(
              (this.commentTag || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        hotelName: java.String(this.hotelName),
        distanceDisplayText: java.String(this.distanceDisplayText),
        nearbyHotel: java.Boolean(this.nearbyHotel),
        rateValue: java.Double(this.rateValue),
        pricingStatus: java.Integer(this.pricingStatus),
        discountDetail: this.discountDetail
          ? this.discountDetail.__fields2java()
          : null,
        rateCount: java.Integer(this.rateCount),
        activityDetail: this.activityDetail
          ? this.activityDetail.__fields2java()
          : null,
        minPrice: java.Integer(this.minPrice),
        poiCategoryTags: this.poiCategoryTags
          ? java.List(
              (this.poiCategoryTags || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        hotelTags: this.hotelTags
          ? java.List(
              (this.hotelTags || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelType: java.Integer(this.hotelType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
