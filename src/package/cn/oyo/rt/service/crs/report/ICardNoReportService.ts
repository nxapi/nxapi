import { RoomCardNoReportDetailRequest } from './request/RoomCardNoReportDetailRequest';
import { ResponseVo } from './../../../common/response/ResponseVo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IICardNoReportService {
  queryRoomCardNoReportDetailExport(
    request: RoomCardNoReportDetailRequest,
  ): TDubboCallResult<ResponseVo>;
  queryRoomCardNoReport(
    request: RoomCardNoReportDetailRequest,
  ): TDubboCallResult<ResponseVo>;
  queryRoomCardNoReportDetail(
    request: RoomCardNoReportDetailRequest,
  ): TDubboCallResult<ResponseVo>;
}

export const ICardNoReportServiceWrapper = {
  queryRoomCardNoReportDetailExport: argumentMap,
  queryRoomCardNoReport: argumentMap,
  queryRoomCardNoReportDetail: argumentMap,
};

export function ICardNoReportService(dubbo: Dubbo): IICardNoReportService {
  return dubbo.proxyService<IICardNoReportService>({
    dubboInterface: 'cn.oyo.rt.service.crs.report.ICardNoReportService',
    methods: ICardNoReportServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
