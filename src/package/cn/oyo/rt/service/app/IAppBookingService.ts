import { BookHotelIdsDTO } from './response/BookHotelIdsDTO';
import { HotelNumberNightsRequest } from './request/HotelNumberNightsRequest';
import { HotelBookingNgihtsCountVO } from './response/HotelBookingNgihtsCountVO';
import { BookingCommentReq } from './request/BookingCommentReq';
import { CommentVO } from './response/CommentVO';
import { CommentPushCountVO } from './response/CommentPushCountVO';
import { argumentMap, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAppBookingService {
  getHotelIds(
    memberId: JavaLong,
    latestDays: JavaInteger,
  ): TDubboCallResult<BookHotelIdsDTO>;
  getHotelNumberNights(
    hotelNumberNightsRequest: HotelNumberNightsRequest,
  ): TDubboCallResult<Array<HotelBookingNgihtsCountVO>>;
  getCommentPush(
    bookingCommentReq: BookingCommentReq,
  ): TDubboCallResult<Array<CommentVO>>;
  getCommentPushCount(
    bookingCommentReq: BookingCommentReq,
  ): TDubboCallResult<CommentPushCountVO>;
}

export const IAppBookingServiceWrapper = {
  getHotelIds: argumentMap,
  getHotelNumberNights: argumentMap,
  getCommentPush: argumentMap,
  getCommentPushCount: argumentMap,
};

export function IAppBookingService(dubbo: Dubbo): IIAppBookingService {
  return dubbo.proxyService<IIAppBookingService>({
    dubboInterface: 'cn.oyo.rt.service.app.IAppBookingService',
    methods: IAppBookingServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
