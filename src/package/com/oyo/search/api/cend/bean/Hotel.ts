import { DiscountDetail } from './DiscountDetail';
import { MinPriceRateCode } from './MinPriceRateCode';
import { Rating } from './Rating';
import { ActivityDetail } from './ActivityDetail';
import { Tag } from './../../bean/Tag';
import { Rate } from './Rate';
import java from 'js-to-java';

export interface IHotel {
  oyoEmail?: string;
  cityId?: number;
  ratingFigure?: string;
  clusterCName?: string;
  type?: number;
  rateValue?: number;
  pricingStatus?: number;
  uniqueCode?: string;
  stateName?: string;
  roomAvailableCount?: Object;
  fax?: string;
  memberDiscount?: number;
  commentTag?: Array<string>;
  appChannel?: string;
  phone?: string;
  pinCode?: string;
  plotNumber?: string;
  activationDate?: Date;
  breakfast?: number;
  status?: number;
  rankScoreFigure?: number;
  city?: string;
  bizDate?: Date;
  latitude?: string;
  locationDescription?: string;
  bestImage?: string;
  heroImage?: string;
  nearbyHotel?: boolean;
  discountDetail?: DiscountDetail;
  hotelRankScore?: number;
  sortExprValue?: number;
  rateCount?: number;
  top?: boolean;
  clusterName?: string;
  roomPriceFigure?: number;
  email?: string;
  transformedById?: number;
  topNo?: number;
  memberPrice?: number;
  memberLevel?: string;
  distanceFigure?: number;
  stateId?: number;
  alternateName?: string;
  hotelId?: number;
  hotelName?: string;
  checkOutTime?: string;
  availableRooms?: Array<number>;
  rooms?: Object;
  minPriceRateCode?: MinPriceRateCode;
  managerName?: string;
  oyoId?: string;
  minDistance?: boolean;
  reducePercent?: number;
  landmark?: string;
  longitude?: string;
  roomPrice?: Object;
  availableInventoryPercent?: number;
  hotelAmenities?: Object;
  china20?: boolean;
  mapLink?: string;
  stateCName?: string;
  nightAuditTime?: Date;
  directions?: string;
  minPrice?: number;
  hotelConfigStatus?: number;
  poiCategoryTags?: Array<string>;
  firstPricingDate?: Date;
  countryName?: string;
  englishName?: string;
  originalPrice?: number;
  distance?: number;
  description?: string;
  clusterId?: number;
  inventory?: number;
  hotelRoomStatus?: string;
  countryId?: number;
  cityName?: string;
  cooperationType?: string;
  street?: string;
  ratings?: Rating;
  activityDetail?: ActivityDetail;
  pyName?: string;
  hotelStatusConfigFromtime?: number;
  hotelTags?: Array<Tag>;
  hotelNumberNights?: number;
  summary?: string;
  supportMember?: boolean;
  locationTopIndex?: number;
  poiDistanceText?: string;
  checkInTime?: string;
  rates?: Array<Rate>;
  hotelHighLightName?: string;
  orderCount?: number;
  landLine?: string;
  hotelStatusConfigTotime?: number;
  currentDayMinPrice?: number;
  primaryContact?: string;
  noLocationTopIndex?: number;
  newChina20?: boolean;
  supportCoupon?: boolean;
}

export class Hotel {
  constructor(params: IHotel) {
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.ratingFigure = params.ratingFigure;
    this.clusterCName = params.clusterCName;
    this.type = params.type;
    this.rateValue = params.rateValue;
    this.pricingStatus = params.pricingStatus;
    this.uniqueCode = params.uniqueCode;
    this.stateName = params.stateName;
    this.roomAvailableCount = params.roomAvailableCount;
    this.fax = params.fax;
    this.memberDiscount = params.memberDiscount;
    this.commentTag = params.commentTag;
    this.appChannel = params.appChannel;
    this.phone = params.phone;
    this.pinCode = params.pinCode;
    this.plotNumber = params.plotNumber;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.status = params.status;
    this.rankScoreFigure = params.rankScoreFigure;
    this.city = params.city;
    this.bizDate = params.bizDate;
    this.latitude = params.latitude;
    this.locationDescription = params.locationDescription;
    this.bestImage = params.bestImage;
    this.heroImage = params.heroImage;
    this.nearbyHotel = params.nearbyHotel;
    this.discountDetail = params.discountDetail;
    this.hotelRankScore = params.hotelRankScore;
    this.sortExprValue = params.sortExprValue;
    this.rateCount = params.rateCount;
    this.top = params.top;
    this.clusterName = params.clusterName;
    this.roomPriceFigure = params.roomPriceFigure;
    this.email = params.email;
    this.transformedById = params.transformedById;
    this.topNo = params.topNo;
    this.memberPrice = params.memberPrice;
    this.memberLevel = params.memberLevel;
    this.distanceFigure = params.distanceFigure;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.checkOutTime = params.checkOutTime;
    this.availableRooms = params.availableRooms;
    this.rooms = params.rooms;
    this.minPriceRateCode = params.minPriceRateCode;
    this.managerName = params.managerName;
    this.oyoId = params.oyoId;
    this.minDistance = params.minDistance;
    this.reducePercent = params.reducePercent;
    this.landmark = params.landmark;
    this.longitude = params.longitude;
    this.roomPrice = params.roomPrice;
    this.availableInventoryPercent = params.availableInventoryPercent;
    this.hotelAmenities = params.hotelAmenities;
    this.china20 = params.china20;
    this.mapLink = params.mapLink;
    this.stateCName = params.stateCName;
    this.nightAuditTime = params.nightAuditTime;
    this.directions = params.directions;
    this.minPrice = params.minPrice;
    this.hotelConfigStatus = params.hotelConfigStatus;
    this.poiCategoryTags = params.poiCategoryTags;
    this.firstPricingDate = params.firstPricingDate;
    this.countryName = params.countryName;
    this.englishName = params.englishName;
    this.originalPrice = params.originalPrice;
    this.distance = params.distance;
    this.description = params.description;
    this.clusterId = params.clusterId;
    this.inventory = params.inventory;
    this.hotelRoomStatus = params.hotelRoomStatus;
    this.countryId = params.countryId;
    this.cityName = params.cityName;
    this.cooperationType = params.cooperationType;
    this.street = params.street;
    this.ratings = params.ratings;
    this.activityDetail = params.activityDetail;
    this.pyName = params.pyName;
    this.hotelStatusConfigFromtime = params.hotelStatusConfigFromtime;
    this.hotelTags = params.hotelTags;
    this.hotelNumberNights = params.hotelNumberNights;
    this.summary = params.summary;
    this.supportMember = params.supportMember;
    this.locationTopIndex = params.locationTopIndex;
    this.poiDistanceText = params.poiDistanceText;
    this.checkInTime = params.checkInTime;
    this.rates = params.rates;
    this.hotelHighLightName = params.hotelHighLightName;
    this.orderCount = params.orderCount;
    this.landLine = params.landLine;
    this.hotelStatusConfigTotime = params.hotelStatusConfigTotime;
    this.currentDayMinPrice = params.currentDayMinPrice;
    this.primaryContact = params.primaryContact;
    this.noLocationTopIndex = params.noLocationTopIndex;
    this.newChina20 = params.newChina20;
    this.supportCoupon = params.supportCoupon;
  }

  oyoEmail?: string;
  cityId?: number;
  ratingFigure?: string;
  clusterCName?: string;
  type?: number;
  rateValue?: number;
  pricingStatus?: number;
  uniqueCode?: string;
  stateName?: string;
  roomAvailableCount?: Object;
  fax?: string;
  memberDiscount?: number;
  commentTag?: Array<string>;
  appChannel?: string;
  phone?: string;
  pinCode?: string;
  plotNumber?: string;
  activationDate?: Date;
  breakfast?: number;
  status?: number;
  rankScoreFigure?: number;
  city?: string;
  bizDate?: Date;
  latitude?: string;
  locationDescription?: string;
  bestImage?: string;
  heroImage?: string;
  nearbyHotel?: boolean;
  discountDetail?: DiscountDetail;
  hotelRankScore?: number;
  sortExprValue?: number;
  rateCount?: number;
  top?: boolean;
  clusterName?: string;
  roomPriceFigure?: number;
  email?: string;
  transformedById?: number;
  topNo?: number;
  memberPrice?: number;
  memberLevel?: string;
  distanceFigure?: number;
  stateId?: number;
  alternateName?: string;
  hotelId?: number;
  hotelName?: string;
  checkOutTime?: string;
  availableRooms?: Array<number>;
  rooms?: Object;
  minPriceRateCode?: MinPriceRateCode;
  managerName?: string;
  oyoId?: string;
  minDistance?: boolean;
  reducePercent?: number;
  landmark?: string;
  longitude?: string;
  roomPrice?: Object;
  availableInventoryPercent?: number;
  hotelAmenities?: Object;
  china20?: boolean;
  mapLink?: string;
  stateCName?: string;
  nightAuditTime?: Date;
  directions?: string;
  minPrice?: number;
  hotelConfigStatus?: number;
  poiCategoryTags?: Array<string>;
  firstPricingDate?: Date;
  countryName?: string;
  englishName?: string;
  originalPrice?: number;
  distance?: number;
  description?: string;
  clusterId?: number;
  inventory?: number;
  hotelRoomStatus?: string;
  countryId?: number;
  cityName?: string;
  cooperationType?: string;
  street?: string;
  ratings?: Rating;
  activityDetail?: ActivityDetail;
  pyName?: string;
  hotelStatusConfigFromtime?: number;
  hotelTags?: Array<Tag>;
  hotelNumberNights?: number;
  summary?: string;
  supportMember?: boolean;
  locationTopIndex?: number;
  poiDistanceText?: string;
  checkInTime?: string;
  rates?: Array<Rate>;
  hotelHighLightName?: string;
  orderCount?: number;
  landLine?: string;
  hotelStatusConfigTotime?: number;
  currentDayMinPrice?: number;
  primaryContact?: string;
  noLocationTopIndex?: number;
  newChina20?: boolean;
  supportCoupon?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.Hotel',
      $: {
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        ratingFigure: java.String(this.ratingFigure),
        clusterCName: java.String(this.clusterCName),
        type: java.Integer(this.type),
        rateValue: java.Double(this.rateValue),
        pricingStatus: java.Integer(this.pricingStatus),
        uniqueCode: java.String(this.uniqueCode),
        stateName: java.String(this.stateName),
        roomAvailableCount:
          this.roomAvailableCount && this.roomAvailableCount['__fields2java']
            ? this.roomAvailableCount['__fields2java']()
            : this.roomAvailableCount,
        fax: java.String(this.fax),
        memberDiscount: java.Integer(this.memberDiscount),
        commentTag: this.commentTag
          ? java.List(
              (this.commentTag || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        appChannel: java.String(this.appChannel),
        phone: java.String(this.phone),
        pinCode: java.String(this.pinCode),
        plotNumber: java.String(this.plotNumber),
        activationDate: this.activationDate,
        breakfast: java.Integer(this.breakfast),
        status: java.Integer(this.status),
        rankScoreFigure: java.Double(this.rankScoreFigure),
        city: java.String(this.city),
        bizDate: this.bizDate,
        latitude: java.String(this.latitude),
        locationDescription: java.String(this.locationDescription),
        bestImage: java.String(this.bestImage),
        heroImage: java.String(this.heroImage),
        nearbyHotel: java.Boolean(this.nearbyHotel),
        discountDetail: this.discountDetail
          ? this.discountDetail.__fields2java()
          : null,
        hotelRankScore: java.Double(this.hotelRankScore),
        sortExprValue: java.Double(this.sortExprValue),
        rateCount: java.Integer(this.rateCount),
        top: java.Boolean(this.top),
        clusterName: java.String(this.clusterName),
        roomPriceFigure: java.Double(this.roomPriceFigure),
        email: java.String(this.email),
        transformedById: java.Integer(this.transformedById),
        topNo: java.Integer(this.topNo),
        memberPrice: java.Integer(this.memberPrice),
        memberLevel: java.String(this.memberLevel),
        distanceFigure: java.Double(this.distanceFigure),
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        hotelId: java.Integer(this.hotelId),
        hotelName: java.String(this.hotelName),
        checkOutTime: java.String(this.checkOutTime),
        availableRooms: this.availableRooms
          ? java.List(
              (this.availableRooms || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        rooms:
          this.rooms && this.rooms['__fields2java']
            ? this.rooms['__fields2java']()
            : this.rooms,
        minPriceRateCode: this.minPriceRateCode
          ? this.minPriceRateCode.__fields2java()
          : null,
        managerName: java.String(this.managerName),
        oyoId: java.String(this.oyoId),
        minDistance: java.Boolean(this.minDistance),
        reducePercent: java.Double(this.reducePercent),
        landmark: java.String(this.landmark),
        longitude: java.String(this.longitude),
        roomPrice:
          this.roomPrice && this.roomPrice['__fields2java']
            ? this.roomPrice['__fields2java']()
            : this.roomPrice,
        availableInventoryPercent: java.Double(this.availableInventoryPercent),
        hotelAmenities:
          this.hotelAmenities && this.hotelAmenities['__fields2java']
            ? this.hotelAmenities['__fields2java']()
            : this.hotelAmenities,
        china20: java.Boolean(this.china20),
        mapLink: java.String(this.mapLink),
        stateCName: java.String(this.stateCName),
        nightAuditTime: this.nightAuditTime,
        directions: java.String(this.directions),
        minPrice: java.Integer(this.minPrice),
        hotelConfigStatus: java.Integer(this.hotelConfigStatus),
        poiCategoryTags: this.poiCategoryTags
          ? java.List(
              (this.poiCategoryTags || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        firstPricingDate: this.firstPricingDate,
        countryName: java.String(this.countryName),
        englishName: java.String(this.englishName),
        originalPrice: java.Integer(this.originalPrice),
        distance: java.Double(this.distance),
        description: java.String(this.description),
        clusterId: java.Integer(this.clusterId),
        inventory: java.Integer(this.inventory),
        hotelRoomStatus: java.String(this.hotelRoomStatus),
        countryId: java.Integer(this.countryId),
        cityName: java.String(this.cityName),
        cooperationType: java.String(this.cooperationType),
        street: java.String(this.street),
        ratings: this.ratings ? this.ratings.__fields2java() : null,
        activityDetail: this.activityDetail
          ? this.activityDetail.__fields2java()
          : null,
        pyName: java.String(this.pyName),
        hotelStatusConfigFromtime: java.Long(this.hotelStatusConfigFromtime),
        hotelTags: this.hotelTags
          ? java.List(
              (this.hotelTags || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelNumberNights: java.Integer(this.hotelNumberNights),
        summary: java.String(this.summary),
        supportMember: java.Boolean(this.supportMember),
        locationTopIndex: java.Long(this.locationTopIndex),
        poiDistanceText: java.String(this.poiDistanceText),
        checkInTime: java.String(this.checkInTime),
        rates: this.rates
          ? java.List(
              (this.rates || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelHighLightName: java.String(this.hotelHighLightName),
        orderCount: java.Integer(this.orderCount),
        landLine: java.String(this.landLine),
        hotelStatusConfigTotime: java.Long(this.hotelStatusConfigTotime),
        currentDayMinPrice: java.Double(this.currentDayMinPrice),
        primaryContact: java.String(this.primaryContact),
        noLocationTopIndex: java.Long(this.noLocationTopIndex),
        newChina20: java.Boolean(this.newChina20),
        supportCoupon: java.Boolean(this.supportCoupon),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
