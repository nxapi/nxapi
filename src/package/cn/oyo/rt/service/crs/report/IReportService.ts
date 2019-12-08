import { ResponseVo } from './../../../common/response/ResponseVo';
import { OrderSourceRequest } from './request/OrderSourceRequest';
import { HangRequest } from './request/HangRequest';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIReportService {
  querySRN(
    hotelId: JavaLong,
    startDate: Date,
    endDate: Date,
  ): TDubboCallResult<ResponseVo>;
  queryOrderSourceDetail(
    request: OrderSourceRequest,
  ): TDubboCallResult<ResponseVo>;
  queryOrderSourceList(
    request: OrderSourceRequest,
  ): TDubboCallResult<ResponseVo>;
  exportHangBill(request: HangRequest): TDubboCallResult<ResponseVo>;
  queryHangBill(request: HangRequest): TDubboCallResult<ResponseVo>;
}

export const IReportServiceWrapper = {
  querySRN: argumentMap,
  queryOrderSourceDetail: argumentMap,
  queryOrderSourceList: argumentMap,
  exportHangBill: argumentMap,
  queryHangBill: argumentMap,
};

export function IReportService(dubbo: Dubbo): IIReportService {
  return dubbo.proxyService<IIReportService>({
    dubboInterface: 'cn.oyo.rt.service.crs.report.IReportService',
    methods: IReportServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
