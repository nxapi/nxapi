import { RoomCardNoReportDetailRequest } from './request/RoomCardNoReportDetailRequest';
import { RoomCardNoReportDetailVo } from './response/RoomCardNoReportDetailVo';
import { ResponseVo } from './../../../common/response/ResponseVo';
import { CardNoResult } from './response/CardNoResult';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICardNoReportService {
  queryRoomCardNoReportDetailExport(
    request: RoomCardNoReportDetailRequest,
  ): TDubboCallResult<Array<RoomCardNoReportDetailVo>>;
  queryRoomCardNoReport(
    hotelId: JavaLong,
    startDate: Date,
    endDate: Date,
  ): TDubboCallResult<ResponseVo>;
  queryRoomCardNoReportDetail(
    request: RoomCardNoReportDetailRequest,
  ): TDubboCallResult<CardNoResult>;
}

export const CardNoReportServiceWrapper = {
  queryRoomCardNoReportDetailExport: argumentMap,
  queryRoomCardNoReport: argumentMap,
  queryRoomCardNoReportDetail: argumentMap,
};

export function CardNoReportService(dubbo: Dubbo): ICardNoReportService {
  return dubbo.proxyService<ICardNoReportService>({
    dubboInterface: 'cn.oyo.rt.service.crs.report.CardNoReportService',
    methods: CardNoReportServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
