import { OrderStatus } from './../../../common/enums/OrderStatus';
import { CardTypeEnum } from './../enums/CardTypeEnum';
import { SortEnum } from './../enums/SortEnum';
import { CheckInPatternEnum } from './../enums/CheckInPatternEnum';
import java from 'js-to-java';

export interface IQueryHotelHeroRoomReservationRequest {
  checkInTimeEnd?: string;
  guestPhone?: string;
  orderStatusList?: Array<OrderStatus>;
  start?: number;
  limit?: number;
  cardType?: CardTypeEnum;
  page?: number;
  hotelId?: number;
  sort?: SortEnum;
  checkInTimeStart?: string;
  checkInPatternList?: Array<CheckInPatternEnum>;
}

export class QueryHotelHeroRoomReservationRequest {
  constructor(params: IQueryHotelHeroRoomReservationRequest) {
    this.checkInTimeEnd = params.checkInTimeEnd;
    this.guestPhone = params.guestPhone;
    this.orderStatusList = params.orderStatusList;
    this.start = params.start;
    this.limit = params.limit;
    this.cardType = params.cardType;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.sort = params.sort;
    this.checkInTimeStart = params.checkInTimeStart;
    this.checkInPatternList = params.checkInPatternList;
  }

  checkInTimeEnd?: string;
  guestPhone?: string;
  orderStatusList?: Array<OrderStatus>;
  start?: number;
  limit?: number;
  cardType?: CardTypeEnum;
  page?: number;
  hotelId?: number;
  sort?: SortEnum;
  checkInTimeStart?: string;
  checkInPatternList?: Array<CheckInPatternEnum>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.QueryHotelHeroRoomReservationRequest',
      $: {
        checkInTimeEnd: java.String(this.checkInTimeEnd),
        guestPhone: java.String(this.guestPhone),
        orderStatusList: this.orderStatusList
          ? java.List(
              (this.orderStatusList || []).map((paramItem: any) => {
                return java['enum'](
                  'com.oyo.common.enums.OrderStatus',
                  OrderStatus[paramItem],
                );
              }),
            )
          : null,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        cardType: java['enum'](
          'com.oyo.report.api.enums.CardTypeEnum',
          CardTypeEnum[this.cardType],
        ),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        sort: java['enum'](
          'com.oyo.report.api.enums.SortEnum',
          SortEnum[this.sort],
        ),
        checkInTimeStart: java.String(this.checkInTimeStart),
        checkInPatternList: this.checkInPatternList
          ? java.List(
              (this.checkInPatternList || []).map((paramItem: any) => {
                return java['enum'](
                  'com.oyo.report.api.enums.CheckInPatternEnum',
                  CheckInPatternEnum[paramItem],
                );
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
