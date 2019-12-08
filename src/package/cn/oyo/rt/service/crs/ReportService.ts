import { OrderSourceRequest } from './report/request/OrderSourceRequest';
import { OrderSourceDetail } from './report/response/OrderSourceDetail';
import { HangRequest } from './report/request/HangRequest';
import { RoomStatusVo } from './report/response/RoomStatusVo';
import { OrderSourceList } from './report/response/OrderSourceList';
import { HangVo } from './report/response/HangVo';
import { HotelStatusVo } from './report/response/HotelStatusVo';
import { UrnIInfo } from './report/response/UrnIInfo';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IReportService {
  exportOrderSourceDetail(
    request: OrderSourceRequest,
  ): TDubboCallResult<Array<OrderSourceDetail>>;
  countHangList(request: HangRequest): TDubboCallResult<number>;
  queryOrderSourceDetail(
    request: OrderSourceRequest,
  ): TDubboCallResult<Array<OrderSourceDetail>>;
  queryRoomStatusList(hotelId: JavaLong): TDubboCallResult<Array<RoomStatusVo>>;
  queryOrderSourceList(
    request: OrderSourceRequest,
  ): TDubboCallResult<Array<OrderSourceList>>;
  queryHotelInventory(hotelId: JavaLong): TDubboCallResult<number>;
  queryHangList(request: HangRequest): TDubboCallResult<Array<HangVo>>;
  queryHotelStatus(hotelId: JavaLong): TDubboCallResult<Array<HotelStatusVo>>;
  queryOrderSourceDetailCount(
    request: OrderSourceRequest,
  ): TDubboCallResult<number>;
  exportHangList(request: HangRequest): TDubboCallResult<Array<HangVo>>;
  queryURN(
    hotelId: JavaLong,
    startDate: Date,
    endDate: Date,
  ): TDubboCallResult<Array<UrnIInfo>>;
}

export const ReportServiceWrapper = {
  exportOrderSourceDetail: argumentMap,
  countHangList: argumentMap,
  queryOrderSourceDetail: argumentMap,
  queryRoomStatusList: argumentMap,
  queryOrderSourceList: argumentMap,
  queryHotelInventory: argumentMap,
  queryHangList: argumentMap,
  queryHotelStatus: argumentMap,
  queryOrderSourceDetailCount: argumentMap,
  exportHangList: argumentMap,
  queryURN: argumentMap,
};

export function ReportService(dubbo: Dubbo): IReportService {
  return dubbo.proxyService<IReportService>({
    dubboInterface: 'cn.oyo.rt.service.crs.ReportService',
    methods: ReportServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
